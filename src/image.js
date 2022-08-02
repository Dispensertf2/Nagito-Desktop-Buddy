let images = ["single.webp", "freddy.jpeg", "hellyah.jpg",  "blt.jpg", "kittie.jpg"]

let random_image = Math.floor(Math.random() * images.length)

let image = document.getElementById("image") 
image.src = `assets/images/${images[random_image]}`
