let passInputs = document.getElementsByClassName("passCheck");
let checkInputs = document.getElementsByClassName("checkFills");
let submitButton = document.getElementById("submit-button");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm");

submitButton.disabled = true;
submitButton.style.backgroundColor = "lightgrey";
submitButton.style.borderColor = "lightgrey";

for (let i = 0; i < passInputs.length; i++) {
  passInputs[i].onkeyup = function() {
    if (password.value != confirm_password.value) {
      confirm_password.style.backgroundColor = "#fceae5";
      password.style.backgroundColor = "#fceae5";
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "lightgrey";
      submitButton.style.borderColor = "lightgrey";
    }
    //check if all inputs are filled
    let counter = 0;
    for (let i = 0; i < checkInputs.length; i++) {
      if (checkInputs[i].value != "") {
        counter += 1;
      }
    }
    if (
      password.value === confirm_password.value &&
      counter === checkInputs.length
    ) {
      confirm_password.style.backgroundColor = "white";
      password.style.backgroundColor = "white";
      submitButton.disabled = false;
      submitButton.style.backgroundColor = "#00b4e3";
    }
  };
}
