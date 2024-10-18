'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

const renderCountry = function (data, classname="") {
    console.log(data);
    const html = `
        <article class="country ${classname}">
        <img class="country__img" src="${data.flags['png']}" />
        <div class="country__data">
            <h3 class="country__name">${data.name['common']}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

// const getCountry = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);

//         renderCountry(data);

//         const [neighbour] = data.borders;

//         if (!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function() {
//             const [data] = JSON.parse(this.responseText);

//             renderCountry(data, 'neighbour');

//             const [neighbour] = data.borders;

//             if (!neighbour) return;

//             // AJAX call country 2
//             const request3 = new XMLHttpRequest();
//             request3.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//             request3.send();

//             request3.addEventListener('load', function() {
//                 const [data] = JSON.parse(this.responseText);

//                 renderCountry(data, 'neighbour');
//             });
//         });
//     });
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// const getCountryData = function (country) {
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) throw new Error('no neighbour found');
        
//         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Neighbour not found')
//     }).then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         // renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     }).finally(() => {
//         countriesContainer.style.opacity = 1;
//         countriesContainer.insertAdjacentText('beforebegin', 'Loading');
//     });
// };

// btn.addEventListener('click', function () {
//     getCountryData('germany');
// })

// getCountryData('sdfsdfsda');

// getCountry('germany');



///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/


// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
//         if (!response.ok) throw new Error(`Maximum amount of request per second reached, ${response.status}`)
//         return response.json
//     }).then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);
        
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     }).then(response => {
//         if(!response.ok) throw new Error(`Country not found (${response.status})`);

//         return response.json();
//     }).then(data => renderCountry(data[0]))
//     .catch(err => {
//         console.error(`${err.message} 💥`);
//     })
// }

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);



// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log(res);
// })

// console.log('Test end');


// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('Lottery draw is happening ');
//     setTimeout(function () {
//         console.log('Processing');
//         if (Math.random() >= 0.5) {
//             resolve('You WIN');
//         } else {
//             reject(new Error('You lost your money'));
//         }
//     }, 2000);
// });


// const wait = function (second) {
//     return new Promise ( function (response) {
//         setTimeout(response, second * 1000);
//     });
// };

// wait(2)
// .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 3 second');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 4 second');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 5 second');
//     return wait(1);
// });

// Promise.resolve('')


// const getPosition = function () {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
// }

// const whereAmI = function (lat, lng) {
//     getPosition().then(pos => {
//         const { latitude: lat, longitude: lng } = pos.coords;

//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     }).then(response => {
//         if (!response.ok) throw new Error(`Maximum amount of request per second reached, ${response.status}`)
//         return response.json
//     }).then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);
        
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     }).then(response => {
//         if(!response.ok) throw new Error(`Country not found (${response.status})`);

//         return response.json();
//     }).then(data => renderCountry(data[0]))
//     .catch(err => {
//         console.error(`${err.message} 💥`);
//     })
// }



///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const wait = function (second) {
//     return new Promise ( function (resolve) {
//         setTimeout(resolve, second * 1000);
//     });
// };


// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//     return new Promise (function (resolve, reject) {
//         const imgEl = document.createElement('img');
//         console.log(imgEl);
//         imgEl.src = imgPath;
//         imgEl.addEventListener('load', function () {
//             imgContainer.append(imgEl);
//             resolve(imgEl);
//         });

//         imgEl.addEventListener('error', function () {
//             reject(new Error('Image not found'))
//         })
//     })
// }

// let currentImg;

// createImage('img/img-1.jpg').then(img => {
//     currentImg = img;
//     return wait(2);
// }).then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
// }).then(img => {
//     currentImg = img;
//     return wait(2);
// }).then(() => {
//     currentImg.style.display = 'none';
// }).catch(err => {
//     console.error(err);
// })


// const getPosition = function () {
//     return new Promise( function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// } 

// const whereAmI = async function () {
//     try {
//         // Get position
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;

//         // Reverse Geocoding
//         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         if (!resGeo.ok) throw new Error('Problem getting location data');

//         const dataGeo = await resGeo.json();
//         console.log(dataGeo);

//         // Country data
//         const res = await fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//         if (!res.ok) throw new Error('Problem getting country data');
//         const data = await res.json();
//         console.log(data);
//         renderCountry(data[0]);

//         return `You're in ${dataGeo.city}, ${dataGeo.country}`;
//     } catch (err) {
//         console.error(`${err} 💥`);
//         renderError(`💥 ${err.message}`);

//         throw err;
//     }
// }

// console.log('1: Will get the location');
// whereAmI()
// .then(city => console.log(`2: ${city}`))
// .catch(err => console.error(`2: ${err.message} 💥`))
// .finally(() => console.log(`3: Finished getting location`));
// console.log('2. Finished getting location');

// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (err) {
//         console.error(`2: ${err.message} 💥`)
//     }
//     console.log(`3: Finished getting location`)
// })();

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//         ]);

//         console.log(data.map(d => d[0].capital));
//     } catch (err) {
//         console.error(err);
//     }
// }

// get3Countries('portugal', 'canada', 'tanzania');


// // Promise.race
// (async function () {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/italy`),
//         getJSON(`https://restcountries.com/v3.1/name/egypt`),
//         getJSON(`https://restcountries.com/v3.1/name/mexico`)
//     ])
//     console.log(res[0]);
// })();

// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function() {
//             reject(new Error('Request took too long!'));
//         }, sec * 1000);
//     });
// };

// Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(5)
// ]).then(res => console.log(res[0])).catch(err=>console.error(err));

// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success'),
// ]).then(res => console.log(res)).catch(err => console.error(err));

// Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success'),
// ]).then(res => console.log(res)).catch(err => console.error(err));


// // Promise.any
// Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success'),
// ]).then(res => console.log(res)).catch(err => console.error(err));






const wait = function (second) {
    return new Promise ( function (resolve) {
        setTimeout(resolve, second * 1000);
    });
};


const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
    return new Promise (function (resolve, reject) {
        const imgEl = document.createElement('img');
        console.log(imgEl);
        imgEl.src = imgPath;
        imgEl.addEventListener('load', function () {
            imgContainer.append(imgEl);
            resolve(imgEl);
        });

        imgEl.addEventListener('error', function () {
            reject(new Error('Image not found'))
        })
    })
}


const loadNPause = async function () {
    try {
        let img = await createImage('img/img-1.jpg');
        await wait(2);
        img.style.display = 'none';
        img = await createImage('img/img-2.jpg');
        await wait(2);
        img.style.display = 'none';  
    } catch (err) {
        console.error(err);
    };
}

// loadNPause();

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);

        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.error(err);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);