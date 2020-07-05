const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")

context.strokeStyle = "rgb(250, 250, 190)"
context.lineWidth = 1
context.lineCap = "round"

document.addEventListener("mousemove", function (event) {
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
})