document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("passwordField");
  const togglePassword = document.getElementById("togglePassword");

  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const loginButton = document.querySelector('button[type="submit"]');
  const feedbackMessage = document.createElement("p");
  const form = document.querySelector("form");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

  feedbackMessage.style.marginTop = "1rem";
  feedbackMessage.style.textAlign = "center";

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Example username and password
    const expectedUsername = "user";
    const expectedPassword = "password";

    // Get user input
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Clear previous error styles
    clearError(usernameInput);
    clearError(passwordInput);

    // Check if username or password fields are empty
    if (enteredUsername === "" || enteredPassword === "") {
      if (enteredUsername === "") {
        feedbackMessage.textContent = "Email or username is required.";
        showError(usernameInput);
      } else {
        feedbackMessage.textContent = "Password is required.";
        showError(passwordInput);
      }
      feedbackMessage.style.color = "red";
    } else {
      // Check if the entered username and password match the expected values
      if (
        enteredUsername === expectedUsername &&
        enteredPassword === expectedPassword
      ) {
        feedbackMessage.textContent = "Login successful!"; // navigate to next page
        feedbackMessage.style.color = "green";
        usernameInput.value = "";
        passwordInput.value = "";
      } else if (
        enteredUsername !== expectedUsername &&
        enteredPassword !== expectedPassword
      ) {
        feedbackMessage.textContent =
          "Incorrect username and password. Please try again.";
        showError(usernameInput);
        showError(passwordInput);
        feedbackMessage.style.color = "red";
      } else if (enteredUsername !== expectedUsername) {
        feedbackMessage.textContent = "Incorrect username. Please try again.";
        showError(usernameInput);
        feedbackMessage.style.color = "red";
      } else {
        feedbackMessage.textContent = "Incorrect password. Please try again.";
        showError(passwordInput);
        feedbackMessage.style.color = "red";
      }
    }

    // Display feedback message
    form.appendChild(feedbackMessage);
  });

  // Function to show error message
  function showError(inputField) {
    inputField.style.borderBottom = "1px solid red";
    inputField.classList.add("error"); // Add error class
  }

  // Function to clear error styles
  function clearError(inputField) {
    inputField.style.borderBottom = "";
    inputField.classList.remove("error"); // Remove error class
  }
});
