
const container = document.createElement("div");
container.classList.add("container");


const loginContainer = document.createElement("div");
loginContainer.classList.add("login__container");


const loginSignin = document.createElement("div");
loginSignin.classList.add("login__signin");


const loginSigninNow = document.createElement("div");
loginSigninNow.classList.add("login__signin-now");


const h1 = document.createElement("h1");
h1.textContent = "Sign up NOW!";


const h3 = document.createElement("h3");
h3.textContent = "Enter your details";


const form = document.createElement("form");


const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
const emailInput = document.createElement("input");
emailInput.classList.add("input-field");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.required = true;
emailLabel.appendChild(emailInput);


const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password";
const passwordInput = document.createElement("input");
passwordInput.classList.add("input-field");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);


const cPasswordLabel = document.createElement("label");
cPasswordLabel.textContent = "Confirm Password";
const cPasswordInput = document.createElement("input");
cPasswordInput.classList.add("input-field");
cPasswordInput.type = "password";
cPasswordInput.placeholder = "Confirm Password";
cPasswordInput.required = true;
cPasswordLabel.appendChild(cPasswordInput);


const submitButton = document.createElement("button");
submitButton.classList.add("filled-btn");
submitButton.id = "submit-btn";
submitButton.textContent = "Submit";


form.appendChild(emailLabel);
form.appendChild(passwordLabel);
form.appendChild(cPasswordLabel);
form.appendChild(submitButton);
loginSigninNow.appendChild(h1);
loginSigninNow.appendChild(h3);
loginSigninNow.appendChild(form);
loginSignin.appendChild(loginSigninNow);
loginContainer.appendChild(loginSignin);
container.appendChild(loginContainer);


document.body.appendChild(container);

document.addEventListener("DOMContentLoaded", function () {
    // ... (previous code)

    // Get the password and confirm password input elements
    const passwordInput = document.querySelector('input[type="password"][placeholder="Password"]');
    const cPasswordInput = document.querySelector('input[type="password"][placeholder="Confirm Password"]');

    // Create the error message element
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Passwords do not match";

    // Function to check if passwords match and show/hide error message
    function checkPasswords() {
        if (passwordInput.value !== cPasswordInput.value) {
            cPasswordInput.parentElement.appendChild(errorMessage);
        } else {
            if (cPasswordInput.parentElement.contains(errorMessage)) {
                cPasswordInput.parentElement.removeChild(errorMessage);
            } else {
                // Redirect to quote.html if passwords match
                window.location.href = "quote.html";
            }
        }
    }

    // Attach the checkPasswords function to the submit button click event
    submitButton.addEventListener("click", function (event) {
        checkPasswords();

        // Prevent form submission if passwords do not match
        if (passwordInput.value !== cPasswordInput.value) {
            event.preventDefault();
        }
    });
});
