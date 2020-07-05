const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")

context.strokeStyle = "#fff"
context.lineWidth = 40
context.lineCap = "round"

document.addEventListener("click", function (event) {

    context.clearRect(0, 0, canvas.width, canvas.height)

})

document.addEventListener("mousemove", function (event) {

    context.lineTo(event.pageX, event.pageY)
    context.stroke()
    
})