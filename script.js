const passwordBox = document.getElementById("password");
const length = 11;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const allChars = upperCase + lowerCase + number + symbol;

const copyNotification = document.createElement("div"); // Create a div for the copy notification
copyNotification.id = "copy-notification";
copyNotification.innerText = "Password copied!";
copyNotification.style.display = "none"; // Initially hidden
document.body.appendChild(copyNotification); // Add it to the body

function createPassword() {
  let password = "";

  // Ensure one of each type is included
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Fill the rest of the password with random characters from allChars
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
    const password = passwordBox.value;
    navigator.clipboard.writeText(password)
        .then(() => {
            // Show the notification
            copyNotification.style.display = "block";
            setTimeout(() => {
                copyNotification.style.display = "none"; // Hide after 2 seconds
            }, 2000);
        })
        .catch(err => {
            alert("Failed to copy password. Please try again!"); // User-friendly error message
        });
}