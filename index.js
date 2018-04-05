const clearCURP = document.getElementById("clearCURPForm");
const clearINFO = document.getElementById("clearINFOForm");
const CURPInputs = document.querySelectorAll(".get-curp input[type='text']");
const INFOInputs = document.querySelectorAll(".get-info input[type='text']");

console.log(CURPInputs)

clearCURP.addEventListener("click", () => {
  for(i = 0; i < CURPInputs.length; i++){
    CURPInputs.item(i).setProperty("value", "");
  }
});
clearINFO.addEventListener("click", () => {});