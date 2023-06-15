// Assignment Code
var generateBtn = document.querySelector("#generate");

//found and copied code from stackoverflow.com

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  //*Length
  var length = number - prompt("Enter the length of your password between 8-128 characters.");

  //Char Types
  var charType = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include.");


  var passwordText = document.querySelector("#password");

  function password() {
    var charGen = {
      lowercase: 'abcdefghijklmnop',
      uppercase: 'ABCDEFGHIJKLMNOP',
      numbers: '0123456789',
      symbols: '@#$%^&*',
    }


  var charSet = charGen[charType , toLowercase()];

  var retVal = "";
  for (i = 0; i < length; i++ ) { 
    retVal += charSet . charAt(Math.floor)(Math.random) * charGen.length;
  }

  return retVal;
  }
    passwordText.value = password;
}




  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!" + copyText.value);
}
  
