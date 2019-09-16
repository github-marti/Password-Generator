let specialCharacters = [
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

let numericCharacters = [
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
    "0"
];

let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

let upperCase = lowerCase.toUpperCase();

let lowerCaseAlphabet = lowerCase.split('');

let upperCaseAlphabet = upperCase.split('');

console.log(specialCharacters);
console.log(numericCharacters);
console.log(lowerCaseAlphabet);
console.log(upperCaseAlphabet);
