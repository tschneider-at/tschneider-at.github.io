function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")

context.strokeStyle = "rgb(250,250,250,250)"
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