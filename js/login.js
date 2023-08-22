const slider = document.querySelector(".slider-img");
const btnLogon = document.querySelector("#btn-login");
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
  let pass = document.querySelector(`#login-pass`);

  let email = document.querySelector(`#login-email`);
  let btnLogin = document.querySelector(`#btn-login`);

  pass.value.length > 5 && email.value.length > 5
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
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-pass").value;

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
    window.open("home.html");
  }
}

//--------------------------------------------end valdtion------------------------------------------------------------
