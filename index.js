const clearCURP = document.getElementById('clearCURPForm');
const clearINFO = document.getElementById('clearINFOForm');
const CURPInputs = Array.from(document.querySelectorAll('.get-curp input[type="text"]'));
const INFOInputs = Array.from(document.querySelectorAll('.get-info input[type="text"]'));
const forms = document.querySelectorAll('form');
const date = new Date();

let months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Noviembre',
  'Diciembre'
];

let day = date.getDate() + 1;
let month = months[date.getMonth()];
let year = date.getFullYear();
let today = day + ' de ' + month + ' del ' + year;

clearCURP.addEventListener('click', function (e) {
  e.preventDefault();
  CURPInputs.forEach(input => input.value = '');
});

clearINFO.addEventListener('click', function (e) {
  e.preventDefault();
  INFOInputs.forEach(function (input) {
    input.value = '';
  });
});

forms.forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  });
});

document.getElementById('date').innerHTML = today;
