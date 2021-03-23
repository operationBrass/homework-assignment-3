// generate (button) ID assinged to varible

// function writePassword() (not immediately run)
// assign output of function generatePassword() to varible password;
// assign element with ID password to passwordText varible
// set the value of passwordText to the password varible. 

// Add event listener to generate button

// user is prompt for questions 
//store user answers / validate user answers
//prompt disapear. 


// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#clipboard");
// Add event listener to 'generateBtn'
generateBtn.addEventListener("click", userInput);



function userInput()
{
var userChoice = []; 

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

    if (userChoice.length < 1)
    { 
        alert("No password criteria selected.");
    }
    else
    {
        console.log("ending first step", userChoice)
        writePassword(passwordBluePrint(userChoice,passLen))
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


if (passLen % 2 != 0)
    {
        max_limit = (passLen - 1) / userChoice.length;
    }
else
    {
         max_limit = passLen / userChoice.length;
    }

let returnArr = [];
let countEntries = [0,0,0,0];
let genNum = 0;

switch (userChoice.length)
{
    case 1:
        for(i=0; i< passLen; i++)
        {
        returnArr.push(charGen(userChoice[0]));
        }

        break;

    case 2:  
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
        
        case 3:  
        do
        {
            genNum = Math.floor(Math.random()*3)+1;
            if (countEntries[genNum] != max_limit) 
            {
                returnArr.push(charGen(userChoice[genNum]));
            countEntries[genNum] = countEntries[genNum]+1;
            }
        }
        while (returnArr.length < passLen);
 
        break;

   case 4:  
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


