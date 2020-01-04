'use strict';

let modelerForm = document.querySelector('.modeler-form');
let lastBodyTopWoodSelected = 'flame-maple';

function bodyShapeSelected() {
    document.querySelectorAll('.body-shape').forEach(bodyShape => bodyShape.classList.add('hide'));
    document.querySelector(`.${event.target.value}.body-shape`).classList.remove('hide');
}

function bodyTopWoodSelected() {
    document.querySelectorAll('.body-shape').forEach(bodyShape => bodyShape.classList.remove(lastBodyTopWoodSelected));
    document.querySelectorAll('.body-shape').forEach(bodyShape => bodyShape.classList.add(event.target.value));
    lastBodyTopWoodSelected = event.target.value;
}

function fretboardShapeSelected() {
    document.querySelectorAll('.fretboard-shape').forEach(fretboardShape => fretboardShape.classList.add('hide'));
    document.querySelector(`.${event.target.value}.fretboard-shape`).classList.remove('hide');
}

function headstockShapeSelected() {
    document.querySelectorAll('.headstock-shape').forEach(headstockShape => headstockShape.classList.add('hide'));
    document.querySelector(`.${event.target.value}.headstock-shape`).classList.remove('hide');
}