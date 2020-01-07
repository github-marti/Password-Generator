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


// functions for selecting an array from the user's selected character groups
// and for adding a new character to the password array

function arraySelect() {
    let selectedArray = charArray[Math.floor(Math.random() * charArray.length)];
    return selectedArray;
}

function addCharacter(array) {
    let newChar = array[Math.floor(Math.random() * array.length)];
    newPassword.push(newChar);
}


// function that copies password to clipboard

function copyPassword() {
    let copiedText = document.getElementById("password");
    copiedText.select();
    copiedText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}


// function creates random password based on user input and then prints it to textarea

function printPassword() {

    // create empty arrays for accepting user character choices and making the new password

    charArray = [];
    newPassword = [];


    // create prompt to ask user for password length and then assign it to a variable

    let passwordLength = document.getElementById('length').value;


    // show prompt again if password is not between 8 and 128 characters lomg

    if (passwordLength < 8 || passwordLength > 128) {
        document.getElementById('length').setAttribute('style', 'border:2px solid red');
        document.getElementById('length-label').setAttribute('style', 'color:red');
        return;
    } else {
        document.getElementById('length').setAttribute('style', 'border:1px solid #ced4da');
        document.getElementById('length-label').setAttribute('style', 'color:black');
    }

    let specialCharConfirm = document.getElementById('special').checked;
    let numericCharConfirm = document.getElementById('numbers').checked;
    let lowerCaseConfirm = document.getElementById('lower').checked;
    let upperCaseConfirm = document.getElementById('upper').checked;

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


    // return an error message if user did not choose at least one character set

    if (!specialCharConfirm && !numericCharConfirm && !lowerCaseConfirm && !upperCaseConfirm) {
        document.getElementById('characters').setAttribute('style', 'color:red');
        return;
    } else {
        document.getElementById('characters').setAttribute('style', 'color:black')
    }


    // make sure arrays are pushing to charArray

    console.log(charArray);

    
    // select random array and then select random character from that array to create
    // password of the length chosen by user

    for (i = 0; i < passwordLength; i++) {
        addCharacter(arraySelect());
    }


    // join password array into a string and print it into the textarea

    let password = newPassword.join('');
    document.getElementById("password").value = password;


    // make the copy button active

    document.getElementById("copy").disabled = false;
}


