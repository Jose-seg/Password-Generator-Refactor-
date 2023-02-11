// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// console.log("hey! You clicked me") 
// 1. prompts for the user to apply the password criteria
var lowerCase = prompt("Should password inlcude any lowercase (abcdefghijklmnopqrstuvwxyz):", "enter response"); 
var upperCase = prompt("Should password inlcude any uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ):", "enter response"); 
var number = prompt("Should password inlcude any numbers (0123456789):", "enter response"); 
var specialChar = prompt("Should password inlcude any special characters (!@#$%^&*()-_=+<>?):", "enter response"); 
//  a. password length 8 < 128
var charLength = 128
    charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+<>?'
//  b. lowercase, uppercase, numbers and special characters
// 2. validate the input.
// 3. password generates when at least one criteria is met


// 4. display password in an alert box or written on page (returning password)

  return "Generated Password will go here";
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
