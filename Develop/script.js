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




// Write password to the #password input
function writePassword() {
    prompt("Number of chars?");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{

}



