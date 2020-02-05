/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

let myGallery = [
"elegance_5.png",
"elegance_7.png",
"heritage_3.jpg",
"heritage_4.jpg",
"heritage_5.jpg",
"heritage_6.jpg",
"heritage_8.jpg",
"heritage_9.jpg",
"heritage_10.jpg",
"sport_6.png",
"sport_6.png",
"sport_7.png",
"sport_8.png",
"sport_9.png",
"sport_10.png"
];

for (i = 0; i < myGallery.length; i++) {
    // note the shorthand code below
    exhibition.innerHTML += '<img src="images/' +
        myGallery[i] +
        '" alt="from my galleries">';
}
