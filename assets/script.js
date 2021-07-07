// Updated code includes reference to https://codepen.io/FlorinPop17/pen/BaBePej?editors=1010
// Found through https://www.youtube.com/watch?v=duNmhKgtcsI to attempt to replace variable process with functions
// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

// http://www.net-comber.com/charset.html

// setup constants in place of variables 

var lengthElement = document.getElementById('length');
var uppercaseElement = document.getElementById('uppercase');
var lowercaseElement = document.getElementById('lowercase');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');
var generateBtn = document.getElementById('generate');

var symbols = "!@#$%^&*()";
var numbers = "1234567890";
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercases = "abcdefghijklmnopqrstuvwxyz";


// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var lengthElement = (prompt("Please enter the length of the password from 8 to 128"));
 //console.log (generatePassword);
 
  // Loop if answer is outside the parameters 
  while(lengthElement <= 7 || lengthElement >= 128) {
      alert("Password length must be between 8 - 128 characters Try again");
      var lengthElement = (prompt("How many characters would you like your password to contain?"));
      }

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${lengthElement} characters`);
      var passwordCharacters = []
      var randomPassword = ""
    // Determine parameters of password 
    const symbolsElement = confirm("Click OK to confirm if you would like to include symbols");
    if (symbolsElement) {
      passwordCharacters.push (symbols)
    }
    const numbersElement = confirm("Click OK to confirm if you would like to include numbers");    
    if (numbersElement) {
      passwordCharacters.push(numbers)
    }
    const lowercaseElement = confirm("Click OK to confirm if you would like to include lowercase letters");
    if (lowercaseElement) {
      passwordCharacters.push(lowercases)
    }
    const uppercaseElement = confirm("Click OK to confirm if you would like to include uppercase letters");
    if (uppercaseElement) {
      passwordCharacters.push(uppercases)
    }
    passwordCharacters = passwordCharacters.join("");

      // Loop if answer is outside the parameters 
      while (symbolsElement === false && numbersElement === false && lowercaseElement === false && uppercaseElement === false)
      alert("Please select whether you would like to include the parameter");
      
      // Assign an action to the password parameters
      for (var i = 0; i < lengthElement; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
        }
        return randomPassword;
      }
// Empty string to be filled based on for loop selecting random characters from the array

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log (password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //console.log ('#password');
}