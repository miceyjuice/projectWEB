const alertBox = document.getElementById("alertMessage");
const submitButton = document.getElementById("button");
const burgerButton = document.getElementById("burger__button");
const burgerMenu = document.getElementById("burger__menu")
const wholeNav = document.querySelector("#main__nav");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.forms["messageForm"]["yourName"];
    const mail = document.forms["messageForm"]["yourMail"];
    const message = document.forms["messageForm"]["yourMessage"];
    const nameLabel = document.getElementById("name");
    if (name.value === "" || mail.value === "" || message.value === "") {
      if(name.value === ""){
        name.classList.add("fillIt");
        nameLabel.style.color="#fff";
      }
      if(mail.value === ""){
        mail.classList.add("fillIt");
      }
      if(message.value === ""){
        message.classList.add("fillIt");
      }
      alertBox.innerHTML="Every field must be filled!";
      return false;
    }else alertBox.innerHTML="";
  }
);

burgerButton.addEventListener("click", function () {
  if(burgerMenu.style.display === "none"){
    burgerMenu.style.display = "flex";
    wholeNav.style.borderBottom = "none";
  }else {
    burgerMenu.style.display = "none";
    wholeNav.style.borderBottom = "1px solid #eee";
  }
})
