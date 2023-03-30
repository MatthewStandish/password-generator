// Assignment code here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

document.querySelector("#generate").addEventListener("click", function() {
  const length = parseInt(
    prompt("Enter the desired length of your password (8-128 characters):"),
    10
  );

  if(length == "") {
    alert("Must enter password length between 8 and 128 characters");
    return;
  }

  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  let characterTypes = "";
  if (confirm("Include lowercase letters?")) {
    characterTypes += lowercase;
  }
  if (confirm("Include uppercase letters?")) {
    characterTypes += uppercase;
  }
  if (confirm("Include numbers?")) {
    characterTypes += numeric;
  }
  if (confirm("Include special characters?")) {
    characterTypes += special;
  }

  if (!characterTypes) {
    alert("At least one character type must be selected");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characterTypes.charAt(
      Math.floor(Math.random() * characterTypes.length)
    );
  }

  document.querySelector("#password").innerHTML = password;
});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);