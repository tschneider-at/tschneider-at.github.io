//painter

document.body.style.cursor = "url('/img/brush.png'), auto"

var canvas = document.querySelector("canvas")

var context = canvas.getContext("2d")

context.strokeStyle = "rgb(250, 250, 250)"
context.lineWidth = 20
context.lineCap = "round"
context.canvas.width = window.innerWidth
context.canvas.height = window.innerHeight

window.addEventListener("resize", function (event) {

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    context.beginPath()

})

document.addEventListener("click", function (event) {

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.beginPath()

})

document.addEventListener("mousemove", function (event) {

    context.lineTo(event.pageX, event.pageY)
    context.stroke()
    
})