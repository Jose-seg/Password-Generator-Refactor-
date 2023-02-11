// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = 8; // starting length that is required for user to input can't be less than 8
var choice = []; 
// arrays to store the values of each variable that will be refered back to in the functions I created
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '<', '>', '?'];
var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




function generatePassword(){ 
  // used psuedo code to better understand the assignment
// 1. prompts for the user to apply the password criteria
// //  a. password length 8 < 128
// //  b. lowercase, uppercase, numbers and special characters
// // 2. validate the input.
// // 3. password generates when at least one criteria is met
// // 4. display password in an alert box or written on page (returning password)
var password = '';
for (var i = 0; i < charLength; i++) {
     var randomIndex = Math.floor(Math.random() * choice.length) // had to use math. in order to get the random num to appear if user wants numbers in password
     password = password + choice[randomIndex];
  }
    return password;
}
// function gets me the prompts users will neeed to meet the criteria for generating password
function getPrompts() {
choice = [];

  charLength = parseInt(prompt('How long should your password be? (8 - 128 characters'));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert('Character length needs to be a number (8 - 128), Please try again.')
    return false;
  }

  if (confirm('Should your password include lowercase letters?')) {
    choice = choice.concat(lowerArr);
  }

  if (confirm('Should your password include uppercase letters?')) {
    choice = choice.concat(upperArr);
  }

  if (confirm('Should your password include special characters?')) {
    choice = choice.concat(specArr);
  }

  if (confirm('Should your password include numbers?')) {
    choice = choice.concat(numArr);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var exactgPrompts = getPrompts(); // will return true or false in regards to the prompts depending on the user input
  var passwordText = document.querySelector("#password"); // moved variable to line 61 because it is refered in line 64 and 67
  if (exactgPrompts) {
    var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
