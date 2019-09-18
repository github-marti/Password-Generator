//create character arrays

let specialChar = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    '"',
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "¥",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
];

let numericChar = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];

let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

let upperCase = lowerCase.toUpperCase();

let lowerCaseAlphabet = lowerCase.split('');

let upperCaseAlphabet = upperCase.split('');


// create empty arrays for accepting user character choices and making the new password

let charArray = [];

let newPassword = [];


// create prompts for getting user choices

let passwordLength = prompt("How long do you want your password to be? Choose a number between 8 and 128.");


// method to confirm using if statements (haven't made it work yet)

// if (confirm("Do you want your password to contain special characters?")) {
//     charArray.push(specialChar);
// }

// if (confirm("Do you want your password to contain numeric characters?")) {
//     charArray.push(numericChar);
// }

// if (confirm("Do you want your password to contain lower case characters?")) {
//     charArray.push(lowerCaseAlphabet);
// }

// if (confirm("Do you want your password to contain upper case characters?")) {
//     charArray.push(upperCaseAlphabet);
// }

// if (charArray = []) {
//     alert("You must choose at least one character set. Please refresh page and start again.")
// }

// method to confirm user choices using variables

let specialCharConfirm = confirm("Do you want your password to contain special characters?");
let numericCharConfirm = confirm("Do you want your password to contain numeric characters?");
let lowerCaseConfirm = confirm("Do you want your password to contain lower case characters?");
let upperCaseConfirm = confirm("Do you want your password to contain upper case characters?");

if (specialCharConfirm) {
    charArray.push(specialChar);
}

if (numericCharConfirm) {
    charArray.push(numericChar);
}

if (lowerCaseConfirm) {
    charArray.push(lowerCaseAlphabet);
}

if (upperCaseConfirm) {
    charArray.push(upperCaseAlphabet);
}

if (!specialCharConfirm && !numericCharConfirm && !lowerCaseConfirm && !upperCaseConfirm) {
    alert("You must choose at least one character set. Please refresh page and start again.")
}


// make sure arrays are pushing to charArray

console.log(charArray);


// functions for selecting an array from the user's selected character groups
// and for adding a new character to the password array

let arraySelect = () => {
    let selectedArray = charArray[Math.floor(Math.random() * charArray.length)];
    return selectedArray;
}

let addCharacter = (array) => {
    let newChar = array[Math.floor(Math.random() * array.length)];
    newPassword.push(newChar);
}


// function that writes new password to the textarea

let printPassword = () => {
    let password = newPassword.join('');
    document.getElementById("password").innerHTML = password;
}


// for loop which adds as many characters to the password as specified by user

for (i = 0; i < passwordLength; i++) {
    addCharacter(arraySelect());
}


// check to make sure for loop is creating a random password array

console.log(newPassword)
