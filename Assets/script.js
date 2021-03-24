
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#clipboard");
// Add event listener to 'generateBtn'
generateBtn.addEventListener("click", userInput);


// prompt user for choices, count choices, process password or return to user if criteria not satisfied.
function userInput()
{
var userChoice = []; 
// check for out of range number or invalid chararacters
var passLen = parseInt(prompt("Password length? (8-128)"));
if (isNaN(passLen) || passLen < 8 || passLen > 128) {
alert("Invalid selection, between 8-128");
}

else
{

var hasLower = confirm("Include Lowercase?");

if (hasLower)
    {
        userChoice.push(1);
    }

    var hasUpper = confirm("Uppercase?");   
    if (hasUpper)
    {
        userChoice.push(2);
    }


    var hasNumbers = confirm('Numbers?');
    if (hasNumbers)
    {
        userChoice.push(3);
    }


    var hasSpecial = confirm("Special characters?");
    if (hasSpecial)
    {
        userChoice.push(4);
    }

    //if no choices selected alert user and end.
    if (userChoice.length < 1)
    { 
        alert("No password criteria selected.");
    }
    else // we pas the user choice array and required password length to writepassword()
    {
        writePassword(passwordBluePrint(userChoice,passLen)) //pass the returned array from passwordblue print to the writepassword function.
    }
}
}


// Write password to the #password input
function writePassword(pass) {

    var passwordText = document.querySelector("#password");
    passwordText.value = pass;

}

function passwordBluePrint(userChoice,passLen)
{

// This always ensures all the user criteria is included in every minimum length password
let max_limit;


if (passLen % 2 != 0) //checking if password length is odd number
    {
        max_limit = (passLen + 1) / userChoice.length;
    }
else
    {
         max_limit = passLen / userChoice.length;
    }

let returnArr = [];
let countEntries = [0,0,0,0];
let genNum = 0;

switch (userChoice.length) // process the password creation depending on number of choices
{
    case 1:
        for(i=0; i< passLen; i++)
        {
        returnArr.push(charGen(userChoice[0]));
        }

        break;

    case 2:  //select a random number = to number of choices this will then process that character type.
        do
        {
            genNum = Math.floor(Math.random()*2);
            if (countEntries[genNum] != max_limit) 
            {
            returnArr.push(charGen(userChoice[genNum]));
            countEntries[genNum] = countEntries[genNum]+1;
            }
        }
        while (returnArr.length < passLen);

        break;
        
        case 3:  //select a random number = to number of choices this will then process that character type.
        do
        {
            genNum = Math.floor(Math.random()*3);
            if (countEntries[genNum] != max_limit) 
            {
                returnArr.push(charGen(userChoice[genNum]));
            countEntries[genNum] = countEntries[genNum]+1;
            }
        }
        while (returnArr.length < passLen);
 
        break;

   case 4:  //select a random number = to number of choices this will then process that character type.
        do
        {
            genNum = Math.floor(Math.random()*4);
            if (countEntries[genNum] != max_limit) 
            {
                returnArr.push(charGen(userChoice[genNum]));
            countEntries[genNum] = countEntries[genNum]+1;
            }
    
        }
        while (returnArr.length < passLen);
}
 return returnArr.join("");
}

//randomly choose a character from the charID given. 
function charGen(charID)
{
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

switch (charID)
{
    case 1: return lowerChar.charAt(Math.floor(Math.random()*lowerChar.length));
    case 2: return upperChar.charAt(Math.floor(Math.random()*upperChar.length));
    case 3: return numberChar.charAt(Math.floor(Math.random()*numberChar.length));
    case 4: return specialChar.charAt(Math.floor(Math.random()*specialChar.length));
}

}


// copy to clipboard event listener 

copyBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('#password');
    copyTextarea.focus();
    copyTextarea.select();
    document.execCommand('copy');
  });


