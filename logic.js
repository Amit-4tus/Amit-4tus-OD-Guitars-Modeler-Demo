'use strict';

let modelerForm = document.querySelector('.modeler-form');


function bodyShapeSelected() {
    document.querySelectorAll('.body-shape').forEach(bodyShape => bodyShape.classList.add('hide'));
    document.querySelector(`.${event.target.value}.body-shape`).classList.remove('hide');
}

function fretboardShapeSelected() {
    document.querySelectorAll('.fretboard-shape').forEach(fretboardShape => fretboardShape.classList.add('hide'));
    document.querySelector(`.${event.target.value}.fretboard-shape`).classList.remove('hide');
}

function headstockShapeSelected() {
    document.querySelectorAll('.headstock-shape').forEach(headstockShape => headstockShape.classList.add('hide'));
    document.querySelector(`.${event.target.value}.headstock-shape`).classList.remove('hide');
}