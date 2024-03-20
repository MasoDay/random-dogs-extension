const image = document.getElementById("image")
const url = "https://dog.ceo/api/breeds/image/random"

// The outrageously simple function that took me 3 hours to correctly write...
// Even though it just repeats nearly all of the logic below inside of an async block.
async function fetchDoggo() {
    fetch(url)
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(error => console.log(error))
}
fetchDoggo();

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

// {
//     const options = {
//         method: 'GET'
//     };

//     const response = await fetch(url, options);
//     const result = await response.json()

//     document.getElementById("neighborhoods").innerHTML =
//     result.data.map(item => `<li>${item.name}</li>`).join("");
// }

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
