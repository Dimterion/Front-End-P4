function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeMenu);

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeMenu() {
  modalbg.style.display = "none";
}

// validate modal form

function validateFirstName() {
  const firstName = document.forms["reserve"]["first"];
  if (firstName.value === "" || firstName.value == null || firstName.value.length < 2) {
    formData[0].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[0].removeAttribute("data-error-visible");
    return true;
  }
}
  
function validateLastName() {
  const lastName = document.forms["reserve"]["last"];
  if (lastName.value === "" || lastName.value == null || lastName.value.length < 2) {
    formData[1].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[1].removeAttribute("data-error-visible");
    return true;
  }
}

function validateEmail() {
  const email = document.forms["reserve"]["email"];
  const emailTemplate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(emailTemplate)) {
    formData[2].removeAttribute("data-error-visible");
    return true;
  } else {
    formData[2].setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateBirthDate() {
  const birthDate = document.forms["reserve"]["birthdate"];
  const dateTemplate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
  if (birthDate.value.match(dateTemplate)) {
    formData[3].removeAttribute("data-error-visible");
    return true;
  } else {
    formData[3].setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateTournaments() {
  const tournaments = document.forms["reserve"]["quantity"];
  if (tournaments.value == "" || tournaments.value < 0) {
    formData[4].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[4].removeAttribute("data-error-visible");
    return true;
  }
}

function validateCity() {
  const city = document.forms["reserve"]["location"];
  if ((city[0].checked == false) && (city[1].checked == false) && (city[2].checked == false) && (city[3].checked == false) && (city[4].checked == false) && (city[5].checked == false)) {
    formData[5].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[5].removeAttribute("data-error-visible");
    return true;
  }
}

function validateTerms() {
  const terms = document.forms["reserve"]["checkbox1"];
  if (terms.checked == false) {
    formData[6].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[6].removeAttribute("data-error-visible");
    return true;
  }
}

/*
validateFirstName() & validateLastName() & validateEmail() & validateBirthDate() & validateTournaments() & validateCity() & validateTerms()

validateFirstName(), validateLastName(), validateEmail(), validateBirthDate(), validateTournaments(), validateCity(), validateTerms()
*/

// const bgroundThx = document.querySelector("#bground1");

const formField = document.querySelector("form");
let criteriaCheck = false;

function validate() {
  if (validateFirstName(), validateLastName(), validateEmail(), validateBirthDate(), validateTournaments(), validateCity(), validateTerms()) {
    criteriaCheck = true;
    return true;
    } else {
    return false;
  }
}

/*formField.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  if (criteriaCheck == true) {
    bgroundThx.style.display = "block";
    return true;
  } else {
    return false;
  }
});*/

formField.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  if (criteriaCheck == true) {

    // formField.classList.add("select-hide");
    
    document.querySelector(".bground").style.display = "none";
    document.querySelector("#bground1").style.display = "block";
  }
});