const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")

context.strokeStyle = "#fff"
context.lineWidth = 20
context.lineCap = "round"

let shouldPaint = true

document.addEventListener("load", function (event) {
    shouldPaint = true
})

document.addEventListener("click", function (event) {
    shouldPaint = false
})

document.addEventListener("mousemove", function (event) {

    if (shouldPaint) {
        context.lineTo(event.pageX, event.pageY)
        context.stroke()
    }
    
})