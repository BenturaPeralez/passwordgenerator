// Assignment Code

var generateBtn = document.querySelector("#generate");

var specialChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var length = prompt ("Enter password length 8-128 characters")
  while (length < 8 || length > 128) {
    length = prompt ("Enter password length 8-128 characters")
  }

  var caseTypelower = confirm ('include lowercase letters?')
  //true
  var caseTypeupper = confirm ('include uppercase letters?')
  var caseTypenumber = confirm ('include numbers?')
  //false
  var caseTypespecial = confirm ('include special characters?')
  console.log (caseTypelower,caseTypeupper, caseTypenumber,caseTypespecial);

  // Concatenate the user's chosen arrays together
  var chosenCharacters = [];
  if ( caseTypelower === true) {
    // concatenate lowerCasedChars to chosenCharacters
    chosenCharacters = chosenCharacters.concat (lowerCasedChars);
  }
 if (caseTypenumber === true) { 
   chosenCharacters = chosenCharacters.concat (numericChars);
 }

 if (caseTypeupper === true) {
   chosenCharacters = chosenCharacters.concat (upperCasedChars);
 }

 if ( caseTypespecial === true) {
   chosenCharacters = chosenCharacters.concat (specialChars);
 }

 var randIndex = Math.floor(Math.random() * arr.length); var randElement = arr[randIndex];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)