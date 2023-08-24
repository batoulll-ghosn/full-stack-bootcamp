const butt = document.createElement('button');
butt.textContent = 'Click Me';
document.body.appendChild(butt);
butt.style.padding = '10px 20px';
butt.style.fontSize = '16px';
butt.style.backgroundColor = '#3498db';
butt.style.color = '#ffffff';
butt.style.border = 'none';
butt.style.cursor = 'pointer';

butt.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    butt.style.background = 'red';
    butt.style.color = 'white';
    butt.textContent = 'Clicked ' + randomNumber + '!';
})
const divheading = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = 'Hello!';
divheading.appendChild(heading);
document.body.appendChild(divheading);
heading.style.width = '10px'
heading.style.fontStyle = 'dotted';
heading.style.color = 'green';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        divheading.style.background = 'red';
    } else if (event.key === 's' || event.key === 'S') {

        heading.style.marginLeft = parseInt(heading.style.marginLeft || 0) + 10 + 'px';
    } else if (event.key === 'd' || event.key === 'D') {

        const paragraph = document.createElement('p');
        paragraph.textContent = 'Key D was pressed!';
        document.body.appendChild(paragraph);
    } else if (event.key === 'w' || event.key === 'W') {

        heading.style.display = heading.style.display === 'none' ? 'block' : 'none';
    } else if (event.key === ' ') {

        heading.style.fontSize = parseInt(window.getComputedStyle(heading).fontSize) + 2 + 'px';
    }
});

const errorMessages = document.getElementById('errorMessages');
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    errorMessages.innerHTML = '';
    successMessage.innerHTML = '';

    if (!isValidEmail(email)) {
        errorMessages.innerHTML = 'Please enter a valid email address.';
    }
    else if (password !== confirmPassword) {
        errorMessages.innerHTML = 'Passwords do not match.';
    }
    else {
        successMessage.innerHTML = 'Form submitted successfully!';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}






