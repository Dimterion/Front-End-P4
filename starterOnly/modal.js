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
const errorCity = document.querySelector("#error_city");
const errorTerms = document.querySelector("#error_terms");

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

// validation
function validate() {
  var city = document.forms["reserve"]["location"];
  var terms = document.forms["reserve"]["terms-check"];
  if ((city[0].checked == false) && (city[1].checked == false) && (city[2].checked == false) && (city[3].checked == false) && (city[4].checked == false) && (city[5].checked == false)) {
    errorCity.innerHTML = "You must choose one option.";
    return false;
  } else if (terms.checked == false) {
    errorTerms.innerHTML = "You must check to agree to terms and conditions.";
    return false;
  }
}