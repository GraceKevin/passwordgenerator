// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

// http://www.net-comber.com/charset.html

// setup constants in place of variables 

const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Prompt to confirm how many characters the user would like in their password
function generatePassword(lower, upper, number, symbols, length) {
  const lengthElement = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(lengthElement <= 7 || lengthElement >= 128) {
      alert("Password length must be between 8 - 128 characters Try again");
      const lengthElement = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${lengthElement} characters`);

    // Determine parameters of password 
    const symbolsElement = confirm("Click OK to confirm if you would like to include symbols");
    const numbersElement = confirm("Click OK to confirm if you would like to include numbers");    
    const lowercaseElement = confirm("Click OK to confirm if you would like to include lowercase letters");
    const uppercaseElement = confirm("Click OK to confirm if you would like to include uppercase letters");
      // Loop if answer is outside the parameters 
      while (symbolsElement === false && numbersElement === false && lowercaseElement === false && uppercaseElement === false)
      alert("Please select whether you would like to include the parameter");
      
      // Assign an action to the password parameters
      var passwordCharacters = [number + symbols + upper + lower + length]
      
    if (symbolsElement) {
      passwordCharacters = passwordCharacters.concat(symbols)
    }

    if (numbersElement) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (lowercaseElement) {
      passwordCharacters = passwordCharacters.concat(lower)
    }

    if (uppercaseElement) {
      passwordCharacters = passwordCharacters.concat(upper)
    }

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < lengthElement; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}