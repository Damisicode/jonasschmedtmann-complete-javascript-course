'use strict';


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor (coords, distance, duration) {
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
    }

    _setDescription () {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }

    click() {
        this.clicks++;
    }
}


class Running extends Workout {
    type = 'running';
    
    constructor (coords, duration, distance, cadence) {
        super(coords, duration, distance);
        this.cadence = cadence;
        this._calcPace();
        this._setDescription();
    }

    _calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}


class Cycling extends Workout {
    type = 'cycling';

    constructor (coords, duration, distance, elevationGain) {
        super(coords, duration, distance);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}


// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);


const form = document.querySelector('.form');
const updateData = document.querySelector('.update-data');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor () {
        // Get user's position
        this._getPosition();

        // Get localstorage
        this._getLocalStorage();

        // Attach event handlers
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (form.objectId) {
                console.log('Editing form submission...')
                console.log(app);
                this._updateWorkout(e, form.objectId)
            } else {
                console.log('creation form submission...')
                this._newWorkout(e);
            }
        }.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));
        updateData.addEventListener('click', this._editWorkout);
    }

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get your position');
            });
    }

    _loadMap (position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this));

        console.log(this.#workouts);

        // Load markers
        this.#workouts.forEach(workout => {
            this._renderWorkOutMarker(workout);
        });
    }

    _showForm (mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideForm () {
        // Empty the input;
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =  '';

        // hide form;
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);
    }

    _toggleElevationField() {
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout (e) {
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();

        // Get data from form
        const type = inputType.value;
        const distance = inputDistance.value;
        const duration = inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        

        // If workout is running, create running object
        if (type === 'running') {
            const cadence = inputCadence.value
            // check if data is valid
            if (!(validInputs(distance, duration, cadence) || allPositive(distance, duration, cadence))) return alert('Inputs have to be positive numbers!');
            workout = new Running([lat, lng], duration, distance, cadence);
        }

        // if workout is cycling, create cycling object
        if (type === 'cycling') {
            const elevation = inputElevation.value
            // check if data is valid
            if (!(validInputs(distance, duration, elevation) || allPositive(distance, duration))) return alert('Inputs have to be positive numbers!');
            workout = new Cycling([lat, lng], duration, distance, elevation);
        }

        // Add new object to workout array
        this.#workouts.push(workout);
        console.log(workout);

        // Render workout on map as marker
        this._renderWorkOutMarker(workout);

        // Render workout on list
        this._renderWorkout(workout);
        
        // Hide form + clear input fields
        this._hideForm();
    
        // Set local storage to all workouts
        this._setLocalStorage();
    }

    _editWorkout (workout) {
        console.log('Updating workout...')
        console.log(workout);

        if (!form.classList.contains('hidden')) this._hideForm();

        inputDistance.value = workout.distance
        inputDuration.value = workout.duration
        inputCadence.value = workout.cadence

        if (workout.type === 'running') {
            inputElevation.value = workout.elevation;
        } else {
            inputElevation.value = '';
        }

        if (workout.type === 'cycling') {
            inputElevation.value =  workout.speed;
        } else {
            inputElevation.value = '';
        }

        // display form;
        console.log(Array.from(containerWorkouts.children));
        const workoutEl = Array.from(containerWorkouts.children).find(workEl => workEl.dataset.id === workout.id);
        console.log(workoutEl);

        form.objectId = workout.id;
        form.style.display = 'grid';
        form.classList.remove('hidden');
        form.classList.add('edit-form', 'full-width');
        workoutEl.insertAdjacentElement('beforeend', form);

        // return;
    }

    _updateWorkout (e, workoutID) {
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();

        // get workout
        const workout = this.#workouts.find(work => work.id === workoutID);

        // get workout element
        const workoutEL = Array.from(containerWorkouts.children).find(workEl => workEl.dataset.id === workoutID);
        console.log(workoutEL);

        // Get data from form
        const type = inputType.value;
        const distance = inputDistance.value;
        const duration = inputDuration.value;
        // const { lat, lng } = this.#mapEvent.latlng;
        // let workout;
        console.log(distance, inputDuration.value, inputType.value);
        console.log(workout);
        

        // If workout is running, create running object
        if (type === 'running') {
            const cadence = inputCadence.value
            // check if data is valid
            if (!(validInputs(distance, duration, cadence) || allPositive(distance, duration, cadence))) return alert('Inputs have to be positive numbers!');
            workout.distance = distance;
            workout.duration = duration;
            workout.cadence = cadence;

            workoutEL.getElementsByClassName('distance').item(0).textContent = distance;
            workoutEL.getElementsByClassName('duration').item(0).textContent = duration;
            workoutEL.getElementsByClassName('cadence').item(0).textContent = cadence;
            workoutEL.getElementsByClassName('pace').item(0).textContent = workout._calcPace();
        }

        // if workout is cycling, create cycling object
        if (type === 'cycling') {
            const elevation = inputElevation.value
            // check if data is valid
            if (!(validInputs(distance, duration, elevation) || allPositive(distance, duration, elevation))) return alert('Inputs have to be positive numbers!');
            workout.distance = distance;
            workout.duration = duration;
            workout.elevation = elevation;

            // Update the workout with the new data
            workoutEL.getElementsByClassName('distance').item(0).textContent = distance;
            workoutEL.getElementsByClassName('duration').item(0).textContent = duration;
            workoutEL.getElementsByClassName('elevation').item(0).textContent = elevation;
            workoutEL.getElementsByClassName('speed').item(0).textContent = workout.calcSpeed();
        }
        
        // Hide form + clear input fields
        this._hideForm();
    
        // Set local storage to all workouts
        this._setLocalStorage();

        // Remove form from the element
        workoutEL.removeChild(form);

        console.log(this);
    }

    _deleteWorkout (workout, workoutEl) {
        console.log("Deleting the workout...")
        console.log(workout);

        // remove workout from the workout class
        this.#workouts.pop(workout);

        // Set local storage to all workouts
        this._setLocalStorage();

        // remove workout from the list of workouts
        containerWorkouts.removeChild(workoutEl);

        // Close popup attached to the marker
        L.marker(workout.coords).addTo(this.#map).unbindPopup();

        // Make map active again
        this.#map.on('click', this._showForm.bind(this));
    }

    _renderWorkOutMarker (workout) {
        L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        })).setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`).openPopup();
    }

    _renderWorkout(workout) {
        let html = `
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                    <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                    <span class="workout__value distance">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value duration">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
        `

        if (workout.type === 'running') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value pace">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value cadence">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
                </li>
            `
        }

        if (workout.type === 'cycling') {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value speed">${workout.speed}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value elevation">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
                </li>
            `
        }

        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopUp (e) {
        const workoutEl = e.target.closest('.workout');
        const html = `
            <div class="update-data full-width">
                <div class="edit-workout update-workout">
                    <img src="edit-icon.png" alt="edit workout icon" class="edit-icon" />
                    <span class="edit-text">edit workout</span>
                </div>
                <div class="delete-workout update-workout">
                    <img src="delete-icon.png" alt="delete workout icon" class="delete-icon" />
                    <span class="delete-text">delete workout</span>
                </div>
            </div>
        `

        // Default function for getting only the workouts
        if (!workoutEl) return;

        console.log(this.#workouts);

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
        console.log(workout);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1,
            }
        });

        // remove the update pop up from other workouts
        // const currentUpdates = containerWorkouts.getElementsByClassName('update-data');
        Array.from(containerWorkouts.getElementsByClassName('update-data')).forEach(update => update.closest('.workout').removeChild(update));
        // console.log(currentUpdates.item(0).closest('.workout'));
        // for (let i=0; i < currentUpdates.length; i++) {
        //     currentUpdates.item(i).closest('.workout').removeChild(currentUpdates.item(i));
        // }

        // Default function to return if the workout has the form
        if (workoutEl.getElementsByClassName('form').length) return;

        // insert update pop up into workout
        workoutEl.insertAdjacentHTML('beforeend', html);

        console.log(e.target.classList);

        // Match target of edit workout
        const updateWorkout = e.target.closest('.edit-workout');
        console.log(updateWorkout);
        if (e.target.closest('.edit-workout')) {
            this._editWorkout(workout);
        }

        // Match target of delete workout
        const deleteWorkout = e.target.closest('.delete-workout');
        console.log(deleteWorkout);
        if (e.target.closest('.delete-workout')) {
            this._deleteWorkout(workout, workoutEl);
        }

        // Using the public interface
        // workout.click();
    }

    _updateDataPopUp () {
        // create html code
        const html = `
            <div class="update-data workout__title">
                <div class="edit-workout update-workout">
                    <img src="edit-icon.png" alt="edit workout icon" class="edit-icon" />
                    <span class="edit-text">edit workout</span>
                </div>
                <div class="delete-workout update-workout">
                    <img src="delete-icon.png" alt="delete workout icon" class="delete-icon" />
                    <span class="delete-text">delete workout</span>
                </div>
            </div>
        `

        // set target element

        // add html to the element

    }

    _setLocalStorage () {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts))
    }

    _getLocalStorage () {
        const data = JSON.parse(localStorage.getItem('workouts'));

        if (!data) return;

        // this.#workouts = data;
        this.#workouts = data.map(workout => {
            let work;

            if (workout.type === 'running') {
                work = new Running(workout.coords, workout.duration, workout.distance, workout.cadence);
            }

            if (workout.type === 'cycling') {
                work = new Cycling(workout.coords, workout.duration, workout.distance, workout.elevationGain);
            }

            work.date = workout.date;
            work.id = workout.id;
            work.clicks = workout.clicks;
            work.description = workout.description;

            this._renderWorkout(work);

            console.log(work);

            return work;
        })

        // this.#workouts.forEach(workout => {
        //     this._renderWorkout(workout);
        // });
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }
}

const app = new App();