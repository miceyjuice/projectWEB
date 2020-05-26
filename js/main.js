let alertBox = document.getElementById("alertMessage");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.forms["messageForm"]["yourName"].value;
    let mail = document.forms["messageForm"]["yourMail"].value;
    let message = document.forms["messageForm"]["message"].value;
    if (name === "" || mail === "" || message === "") {
      alertBox.innerHTML="Every field must be filled!";
      return false;
    }else alertBox.innerHTML="";
  }
)

