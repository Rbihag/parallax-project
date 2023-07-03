//html setup
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);

// console.log('pupilsHTMLCollection', pupilsHTMLCollection)

//input setup
var input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//Output setup
var output = {
    x: {
        start: -70,
        end: 70,
        current: 0,
    },
    y: {
        start: -90,
        end: 90,
        current: 0,
    },
}

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

//variables
var handleMouseMove = function (event) {
    //mouse X input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    // mouse Y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    //output x
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);

    //output y
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

    //apply output to HTML
    pupilsArray.forEach(function (pupil, k) {
        pupil.style.transform = 'translate(' + output.x.current + 'px, ' + output.y.current + 'px)';
    });

    // console.log('output.x.current', output.x.current);
    // console.log('fraction Y', input.mouseY.fraction);

}

var handleResize = function () {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);