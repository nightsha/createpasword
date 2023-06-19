// Assignment Code
var generateBtn = document.querySelector("#generate");

//found and copied code from stackoverflow.com
//And Trinh helped me refactor some errors in 
//the stackoverflow code

// Write password to the #password input

function writePassword() {
  // var password = generatePassword();
  //*Length
  var length = prompt("Enter the length of your password between 8-128 characters.");

  while (length < 8 || length > 128 || isNaN(length)) {
    length = prompt("Enter the length of your password between 8-128 characters.");
  }

  //Char Types
  // var charType = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include.");
  var uppercaseConfirm = confirm("Do you want to include uppercase in your password?")
  var lowercaseConfirm = confirm("Do you want to include lowercase in your password?")
  var numbercaseConfirm = confirm("Do you want to include numbercase in your password?")
  var symbolsConfirm = confirm("Do you want to include symbols in your password?")


  //this is assuming a false value is selected
  //prompting the user to enter a true value
  while (!uppercaseConfirm || !lowercaseConfirm || !numbercaseConfirm || !symbolsConfirm) {
    uppercaseConfirm = confirm("Do you want to include uppercase in your password?")
    lowercaseConfirm = confirm("Do you want to include lowercase in your password?")
    numbercaseConfirm = confirm("Do you want to include numbercase in your password?")
    symbolsConfirm = confirm("Do you want to include symbols in your password?")
  }
  var passwordText = document.querySelector("#password");
  var allChars = ""

  var charGen = {
    lowercase: 'abcdefghijklmnop',
    uppercase: 'ABCDEFGHIJKLMNOP',
    numbers: '0123456789',
    symbols: '@#$%^&*',
  }
//this is a boolean indicating a true value
  if (uppercaseConfirm) {
    allChars += charGen.uppercase
  }
  if (lowercaseConfirm) {
    allChars += charGen.lowercase
  }
  if (numbercaseConfirm) {
    allChars += charGen.numbers
  }
  if (symbolsConfirm) {
    allChars += charGen.symbols
  }
  //this is a string that logs all chars and randomly selects a password
 // from the string
  console.log(allChars)
  var password = "";
  for (i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    console.log(password);
  }


  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this copies the password to clipboard
function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!" + copyText.value);
}

