const images = ["img1.jpg", "img2.png", "img3.jpg", "img4.jpg"]
let current = 0

const slide = document.getElementById("slide")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

function showImage(index){
    slide.src = images[index]
}

function nextImage() {
    current = (current + 1) % images.length
    showImage(current)
}

function prevImage(){
    current = (current - 1 + images.length) % images.length
    showImage(current)
}

next.addEventListener("click", nextImage)
prev.addEventListener("click", prevImage)

//autoSlide
setInterval(nextImage, 3000 )