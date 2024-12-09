const togglePassword = document.querySelector(".eye--toggle");
const passwordInput = document.querySelector(".password-inputfield");
const passwordBox = document.querySelector(".password-box");

togglePassword.addEventListener("click", () => {
  // Toggle the input type and assign isPasswordShowing variable
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordBox.classList.add("show-password");
  } else {
    passwordInput.type = "password";
    passwordBox.classList.remove("show-password");
  }
});
