const clearCURP = document.getElementById("clearCURPForm");
const clearINFO = document.getElementById("clearINFOForm");
const CURPInputs = document.querySelectorAll(".get-curp input[type='text']");
const INFOInputs = document.querySelectorAll(".get-info input[type='text']");
const date = new Date();

let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];

let day = date.getDay();
let month = months[date.getMonth()];
let year = date.getFullYear();

let today = `${day} de ${month} del ${year}`;

clearCURP.addEventListener("click", () => {
  for(i = 0; i < CURPInputs.length; i++){
    CURPInputs.item(i).setProperty("value", "");
  }
});

clearINFO.addEventListener("click", () => {});

document.getElementById("date").innerHTML = today;
