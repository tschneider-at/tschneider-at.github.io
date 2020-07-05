//painter

const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

document.body.style.cursor = "none"

const context = canvas.getContext("2d")

context.strokeStyle = "rgba(250,250,250,1)"
context.lineWidth = 20
context.lineCap = "round"

document.addEventListener("click", function (event) {

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()

})

document.addEventListener("mousemove", function (event) {

    context.lineTo(event.pageX, event.pageY)
    context.stroke()
    
})