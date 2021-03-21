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


function userInput()
{
    var passLen = prompt("Password length? (8-128)");
    var hasUpper = prompt("Uppercase? (Yes or No)");
    var hasSpecial = prompt("Include special characters? (Yes or No)");
    console.log(generateString())
}


// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to 'generateBtn'
generateBtn.addEventListener("click", userInput);


function passwordBluePrint()
{


var test = ['1','2','3','4','1','2','3','4'];
var returnArr = [];
var genNum;
var position = 1;

do  
{

genNum = Math.floor(Math.random()* 8)+1;

if (test[genNum-1] !== null )
{
console.log("if", genNum);
returnArr.push(genNum);
test[genNum-1] = null;
}

}
while(returnArr.length < 8);
return returnArr;
}

console.log(passwordBluePrint());


function generateString()
{
    
var random_string = '';
var random_ascii;

//lower case
var ascii_low = 97; 
var ascii_high = 122;

//upper case
var ascii_upper_low = 65;
var ascii_upper_high = 90;

//numbers
var ascii_number_low = 49;
var ascii_number_high = 57;

//special_characters
var ascii_special_low = 33;
var ascii_special_high = 47;
var allUsed = false;


switch (math.floor((math.random()) * 4))
{

}





random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
random_string = String.fromCharCode(random_ascii)

return random_string

}

function caseUpper()
{

}

function caseLower()
{

}

function numberGen()
{

}

function symGen()
{

}