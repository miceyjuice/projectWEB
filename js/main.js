const alertBox = document.getElementById("alertMessage");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.forms["messageForm"]["yourName"].value;
    const mail = document.forms["messageForm"]["yourMail"].value;
    const message = document.forms["messageForm"]["yourMessage"].value;
    if (name === "" || mail === "" || message === "") {
      alertBox.innerHTML="Every field must be filled!";
      return false;
    }else alertBox.innerHTML="";
  }
)
