const image = document.getElementById("image")
const url = "https://dog.ceo/api/breeds/image/random"
const beagleUrl = "https://unsplash.com/photos/brown-white-and-black-short-coated-dog-on-green-grass-field-during-daytime-VYrMzY-g5HQ"

const btn = document.getElementById("btnClick");
btn.addEventListener("click", function () {
    fetch(url)
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(error => console.log(error))
})




// const img = new Image();
// img.addEventListener("load", function () {
//     fetch(url)
//     .then(res => res.json())
//     .then(result => {
//         console.log(result)
//         image.src = result.message
//     })
//     .catch(error => console.log(error))
// })

// const loadImage = url => {
//     return new Promise ((resolve, reject) => {
//         const img = new Image()
//         img.src = url
//         img.onload = () => {
//             resolve(img)
//         }
//         img.onerror = e => {
//             reject(e)
//         }
//     })
// };
// loadImage();

// function preloadImage(url) {
//     let  img = new Image();
//     img.onload = () => {
//         console.log(result)
//         image.src = url
//         img.src = result.message
//     }
// };
// preloadImage();

// let autoLoadDog = document.images[0];
// let image = new Image();
// image.onload = function firstDogPhoto() {
//     autoLoadDog.src = this.src;
// };
// image.src = "https://unsplash.com/photos/beagle-leap-on-grass-field-s63SosNApwo";
