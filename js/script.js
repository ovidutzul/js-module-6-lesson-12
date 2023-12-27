const toggleButton = document.querySelector(".toggle-button");
const myBlock = document.querySelector(".my-block");

const toggleColor = () => {
  myBlock.classList.toggle("my-block-blue");
};

toggleButton.addEventListener("click", toggleColor);

setTimeout(() => {
  // alert("De acum nu mai poti schimba culoarea!");
  toggleButton.removeEventListener("click", toggleColor);
}, 3000);

// Form Submit Login

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log(e);

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value === '' || password.value === '') {
    alert("Te rugam sa introduci o valoare in ambele campuri!");
  } else {
    alert("Formularul a fost trimis cu success!");
    username.value = "";
    password.value = "";
  }
});

const username = document.getElementById("username");
setTimeout(() => {
  username.value = "test";
}, 3000);

// Form Submit Register

const registerForm = document.forms.register;
const registerFormErrors = document.getElementsByClassName("form-errors")[0];

const markFormWithError = message => {
  registerForm.classList.add("form-error");
  registerFormErrors.textContent = message;
};

const handleSuccess = () => {
  registerForm.classList.remove("form-error");
  registerFormErrors.textContent = "";
  alert("Success!");
};

registerForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log(e);

  const { elements } = e.target;
  const username = elements["username-register"].value;
  const password = elements["password-register"].value;

  if (!username || !password) {
    markFormWithError("Te rugam sa introduci o valoare in ambele campuri!");
    return;
  }

  if (username.length > 15) {
    markFormWithError("Username-ul trebuie sa fie mai mic de 15 caractere!");
    return;
  }

  if (password.length < 8) {
    markFormWithError("Parola trebuie sa fie mai mare de 8 caractere!");
    return;
  }

  handleSuccess();
});