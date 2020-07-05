//painter

const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

document.body.style.cursor = "url('/img/brush.png'), auto"

const context = canvas.getContext("2d")

context.strokeStyle = "rgb(250, 250, 250)"
context.lineWidth = 20
context.lineCap = "round"

window.addEventListener("resize", function (event) {

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()

})

document.addEventListener("click", function (event) {

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()

})

document.addEventListener("mousemove", function (event) {

    context.lineTo(event.pageX, event.pageY)
    context.stroke()
    
})