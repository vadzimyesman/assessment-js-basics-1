/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = "Version control system. Software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = "Web-based version-control and collaboration platform for software developers."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
var gitInitDefinition = "Initializes a new Git repository."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
var gitCloneDefinition = "Creates a copy of an existing Git repository."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
var gitStatusDefinition = "Displays the state of the working directory and the staged snapshot."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
var gitAddDefinition = "Moves changes from the working directory to the staging area. This gives you the opportunity to prepare a snapshot before committing it to the official history."
var gitAddCode = "git add ."
//'Git add .' stages new files and modifications, without deletions (on the current directory and its subdirectories).

var gitAddCode1 = "git add -a"
//'Git add -a' stages all changes

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
var gitCommitDefinition = "Takes the staged snapshot and commits it to the project history. Combined with git add, this defines the basic workflow for all Git users."
var gitCommitCode = "git commit -m "initial commit" "


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
var gitPushDefinition = "It lets you move a local branch to another repository, which serves as a convenient way to publish contributions."