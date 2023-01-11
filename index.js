// Create a program that accepts 2 number inputs from a user and adds it together, then print out the result
let numberOne = Number(prompt("Enter the first number:"));
let numberTwo = Number(prompt("Enter the second number:"));
let addNumber = numberOne + numberTwo ;
alert (`The sum of the two numbers is ${addNumber}`);
/*create a program that takes 2 name inputs e.g firstname & lastname
adds the first 4 characters of the firstname with the first character of the lastname and print out this statement: Your CapacityBay userId is "UserId"
*/
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
// First Name part of the UserId
let firstNamePart = firstName.slice(0,4).toLowerCase();
// Last Name part of the UserId
let lastNamePart = lastName.slice(0,1).toLowerCase();
let UserId = firstNamePart + lastNamePart;
alert (` Your CapacityBay userId is ${UserId} `);