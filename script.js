const btn = document.getElementById("btnClick");
const image = document.getElementById("image")

btn.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(error => console.log(error))
})
