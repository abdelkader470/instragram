const slider = document.querySelector(".slider-img");
const btnLogon = document.querySelector("#btn-sign");
const errMessage = document.querySelector(".err-message");

const changeBanner = () => {
  //Qisa yol ile sekli deyismek
  //Lakin animasiyali etmek ucun opacity clasi elave etmek lazim
  let current = 2;
  setInterval(() => {
    slider.src = `../images/banner1.png`;
    current != 4 ? current++ : (current = 1);
  }, 6000);
};
const checkLoginBtn = () => {
  let username = document.querySelector(`#sign-username`);
  let pass = document.querySelector(`#sign-pass`);
  let conPass = document.querySelector(`#sign-con-pass`);
  let email = document.querySelector(`#sign-email`);
  let btnLogin = document.querySelector(`#btn-sign`);
  username.value.length > 3 &&
  pass.value.length > 3 &&
  conPass.value.length > 3 &&
  email.value.length > 3
    ? (btnLogin.disabled = false)
    : (btnLogin.disabled = true);
  console.log("check");
};
const changeInput = (classname, input) => {
  let x = document.querySelector(`#${classname}`);
  input.value.length > 0
    ? x.classList.add("inpt-focused")
    : x.classList.remove("inpt-focused");
  checkLoginBtn();
};

changeBanner();
//-------------------------------------------start valdation-------------------------------------------------------------
function signup() {
  var userName = document.getElementById("sign-username").value;
  var email = document.getElementById("sign-email").value;
  var password = document.getElementById("sign-pass").value;
  var confirmPassword = document.getElementById("sign-con-pass").value;

  if (!validateName(userName)) {
    return false;
  }
  if (!validateEmail(email)) {
    return false;
  }

  if (!validatePassword(password)) {
    return false;
  }

  if (!validateConfirmPassword(password, confirmPassword)) {
    return false;
  }
  // Save the email value to the local storage
  localStorage.setItem("userName", userName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("confirmPassword", confirmPassword);

  window.open("home.html");
}
function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateName(userName) {
  return userName.length >= 3;
}
function validatePassword(password) {
  return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function loginFunc() {
  let email = document.getElementById("sign-email").value;
  let password = document.getElementById("sign-pass").value;

  if (!validateEmail(email)) {
    return false;
  }

  if (!validatePassword(password)) {
    return false;
  }
  if (
    email === localStorage.getItem("email") &&
    password === localStorage.getItem("password")
  ) {
    // window.open("http://127.0.0.1:5503/home.html", "_self");
    location.href("/home.html");
  }
}

//--------------------------------------------end valdtion------------------------------------------------------------
