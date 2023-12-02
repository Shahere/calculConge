const dateControl = document.getElementById("start");
const actualDate = document.getElementById("end");
const congeHTML = document.getElementById("conge");

const congeResHTML = document.getElementById("congeRes");
const congeTotHTML = document.getElementById("congeTot");

dateControl.value = "2022-09-05";
actualDate.value = getCurrentDate();
let congePris = getConge();
let txConge = 2.08;

function getConge() {
  let conge = congeHTML.value;
  if (!conge) {
    conge = 0;
  }
  return conge;
}

function getCurrentDate() {
  var todayDate = new Date().toISOString().slice(0, 10);
  return todayDate;
}

function getStartDate() {
  return dateControl.value;
}

function submitForm(e) {
  e.preventDefault();
  var formData = new FormData(myform);
  let start = formData.get("trip-start");
  const startDate = Date.parse(start);

  let end = formData.get("trip-end");
  const endDate = Date.parse(end);

  let conge = formData.get("text-conge");

  let differenceMS = endDate-startDate;
  let months = differenceMS / 2629746000;

  let congeTot = months*txConge;
  congeTot = congeTot.toFixed(2);
  let congeRes = congeTot-congePris;
  congeRes = congeRes.toFixed(2);

  congeResHTML.innerText = congeRes;
  congeTotHTML.innerText = congeTot;
}

var myform = document.getElementById("submitForm");
myform.addEventListener("submit", submitForm);
