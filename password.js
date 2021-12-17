const { fail } = require('assert');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to password validator tool!")


reader.question("Please type in the password you want to validate, make sure it is at least 10 symbols long: ", function(input){
	//let tokens = []
	
	tokens = input;
    if (tokens.length>=10){
        console.log("Your password met the requirements.")
    } else {
        console.log("Your password did not meet the requirements, please make sure your password is at least 10 charecters long and try again.")
    }
	

    console.log(`Here is your current password: ${tokens}`)


	

	
	reader.close()


});



