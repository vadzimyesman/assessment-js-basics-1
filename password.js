const { fail } = require('assert');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to password validator tool!")
console.log("Your password has to start with any number or any letter!")



reader.question("It must to be at least 10 symbols long, contain at least one number, one upper and lower case letters: ", function(input){
	//let tokens = []
	
	tokens = input;
    if (tokens.length>=10){
        //console.log("Your password met 1st constraint.")


        var i=0;
        var character='';
        var numbers = []
        var loweCaseLetters = []
        var upperCaseLerrers = []

        while (i < tokens.length){
            character = tokens.charAt(i);
            if (!isNaN(character) && character!==" "){
                //console.log(`Symbol ${tokens[i]} is a number`);
                numbers.push(character)
            }else {
                if (character == character.toUpperCase() && character.match(/[A-Z]/i)) {
                //console.log(`Symbol ${tokens[i]} is an upper case letter`);
                upperCaseLerrers.push(character)
                }
                if (character == character.toLowerCase() && character.match(/[a-z]/i)){
                //console.log(`Symbol ${tokens[i]} is a lower case letter`);
                loweCaseLetters.push(character)
                }

        }
        i++;
        }


        if(numbers.length!==0 && upperCaseLerrers.length!==0 && loweCaseLetters !==0 ){
            console.log("Your password did meet all the requirements, good job")
            console.log(`Here is you current password ${tokens}`)
            console.log(`it contains ${numbers.length} numbers , ${upperCaseLerrers.length} upper case letters and ${loweCaseLetters.length} lower case letters`)
        }
        
        

    } else {
        console.log("Your password did not meet the requirements, please make sure your password is at least 10 charecters long and try again.")
    }


	

    


	

	
	reader.close()


});



