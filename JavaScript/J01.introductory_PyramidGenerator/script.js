/* lesson 00 Preparation
Create a file named index.html in the same folder as this JavaScript file.
Within the file, add <script src="./J01.js"></script> in the <head> section.
*/


// lesson 01 introduction
// console.log("Let's build a pyramid using JavaScript basics:");
// console.log("    #    ");
// console.log("   ###   ");
// console.log("  #####  ");
// console.log(" ####### ");
// console.log("#########");


// lesson 02 declaration of variables (strings)
// let character;


// lesson 03 assign values to variables
// let character = "Hello";


// lesson 04 single quote vs double quote & immutable strings
// let character = 'Hello';


// lesson 05 console.log
// let character = 'Hello';
// console.log(character);
/* Hello */


// lesson 06 reassigning variables
// let character = 'Hello';
// character = 'World';
// console.log(character);
/* World */


// lesson 07 log variables twice
// let character = 'Hello';
// console.log(character);
/* Hello */
// character = 'World';
// console.log(character);
/* World */


// lesson 08 camel case naming convention
// let character = 'Hello';
// console.log(character);
/* Hello */
// character = "World";
// console.log(character);
/* World */
// let secondCharacter;


// lesson 09 uninitialized variables (undefined)
// let character = 'Hello';
// console.log(character);
/* Hello */
// character = "World";
// console.log(character);
/* World */
// let secondCharacter;
// console.log(secondCharacter);
/* undefined */


// lesson 10 assign to uninitialized variables
// let character = 'Hello';
// console.log(character);
/* Hello */
// character = "World";
// console.log(character);
/* World */
// let secondCharacter;
// secondCharacter = "Test";
// console.log(secondCharacter);
/* Test */


// lesson 11 assign the value of a variable to another variable
// let character = 'Hello';
// console.log(character);
/* Hello */
// character = "World";
// let secondCharacter;
// secondCharacter = character;
// console.log(secondCharacter);
/* World */


// lesson 12 organize codes
// let character = 'Hello';


// lesson 13 review variables declaration and assignment
// let character = 'Hello';
// let profession = "teacher";
// let age;
// console.log(profession);
/* teacher */
// console.log(age);
/* undefined */


// lesson 14 organize codes
// let character = 'Hello';


// lesson 15 number variables
// let character = 'Hello';
// let count = 8;


// lesson 16 number variables math operations (+, -, *, /, %)
// let character = 'Hello';
// let count = 8;
// console.log(count + 1);
/* 9 */


// lesson 17 organize codes
// let character = 'Hello';
// let count = 8;


// lesson 18 data structure array
// let character = 'Hello';
// let count = 8;
// let rows = [];


// lesson 19 declare an array
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];


// lesson 20 array indexing
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows[0]);
/* Naomi */


// lesson 21 array is mutable
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows[0]);
/* Naomi */
// rows[2] = 10;
// console.log(rows);
/* ["Naomi", "Quincy", 10] */


// lseeon 22 array length and last one
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows[0]);
/* Naomi */
// rows[2] = 10;
// console.log(rows[rows.length - 1]);
/* 10 */


// lesson 23 organize codes
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows);
/* ["Naomi", "Quincy", "CamperChan"] */


//lesson 24 review array declaration
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// let cities = ["London", "New York", "Mumbai"];
// console.log(cities);
/* ["London", "New York", "Mumbai"] */
// cities[cities.length - 1] = "Mexico City";
// console.log(cities);
/* ["London", "New York", "Mexico City"] */
// console.log(rows);
/* ["Naomi", "Quincy", "CamperChan"] */


// lesson 25 organize codes
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows);
/* ["Naomi", "Quincy", "CamperChan"] */


// lesson 26 array method .push()
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp");
// console.log(rows);
/* ["Naomi", "Quincy", "CamperChan", "freeCodeCamp"] */


// lesson 27 array method .pop() and it's return value (value removed)
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp");
/* ["Naomi", "Quincy", "CamperChan", "freeCodeCamp"] */
// let popped = rows.pop();
// console.log(popped);
/* "freeCodeCamp" */
// console.log(rows);


// lesson 28 array method .push() return value (new length)
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// let pushed = rows.push("freeCodeCamp");
// console.log(pushed)
/* 4 */
// let popped = rows.pop();
// console.log(popped);
/* "freeCodeCamp" */
// console.log(rows);
/* ["Naomi", "Quincy", "CamperChan"] */


// sesson 29 organize codes
// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// let pushed = rows.push("freeCodeCamp");


// lesson 30 organize codes
// let character = "Hello";
// let count = 8;
// let rows = [];


// lesson 31 declare variables by const (change value not allowed)
// const character = "Hello";
// const count = 8;
// const rows = [];


// lesson 32 change character value
// const character = "#";
// const count = 8;
// const rows = [];


// lesson 33 for loop syntax
// const character = "#";
// const count = 8;
// const rows = [];
// for ("iterator"; "condition"; "iteration") {logic;}


// lesson 34 for loop 1 iterator
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; "condition"; "iteration") {}


// lesson 35 for loop 2 condition (boolean expression)
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; "iteration") {}


// lesson 36 for loop 3 iteration (what to do with the iterator after each run)
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {}


// lesson 37 for loop 4 logic (print i)
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     console.log(i);
// }
/* 0, 1, 2, 3, 4, 5, 6, 7 */


// lesson 38 logic (array.push())
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);
// }
/* (8)[0, 1, 2, 3, 4, 5, 6, 7] */


// lesson 39 prepare to see what loop is doing now
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);
// }
// let result = "";


// lesson 40 prepare to see what loop is doing now
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);
// }
// let result = "";
// console.log(result)


// lesson 41 for of loop syntax and iterate
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);
// }
// let result = "";
// for (const row of rows) { }
// console.log(result)


// lesson 42 for of loop and logic (add to result)
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);
// }
// let result = "";
// for (const row of rows) {
//     result = result + row
// }
// console.log(result)
/* 01234567 */


// lesson 43 for of loop and logic (add special character (newline))
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);
// }
// let result = "";
// for (const row of rows) {
//     result = result + "\n" + row
// }
// console.log(result)
/* 0 1 2 3 4 5 6 7 垂直排列(有換行符號的關係) */


// lesson 44 change iterator from i to character
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character);
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);
/* # # # # # # # # 垂直排列 */


// lesson 45 strings methods (.repeat())
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i));
// }
/* # # # # # # # # 垂直排列 */
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);
/*

#
##
###
####
#####
######
#######
(0-7)
*/


// lesson 46 index off-by-one error
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1));
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);
/*
#
##
###
####
#####
######
#######
########
(1-8)
*/


// lesson 47 function declaration
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(){}
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 48 function call
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() { }
// padRow();
/* undefined */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


//lesson 49 function call return value
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() {
// }
// const call =padRow();
/* undefined */
// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//   result = result + "\n" + row;
// }
// console.log(result);


//lesson 50 function statement
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() { }
// const call = padRow();
// console.log(call);
/* undefined */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 51 function return
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() {
//     return "Hello!"
// }
// const call = padRow();
// console.log(call);
/* Hello! */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 52 function parameter hard-coded
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     return "Hello!";
// }
// const call = padRow();
// console.log(call);
/* Hello! */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 53 function parameter variable
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     return name;
// }
// const call = padRow();
// console.log(call);
/* undefined */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 54 function parameter pass and call
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     return name;
// }
// const call = padRow("kaisda");
// console.log(call);
/* kaisda */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 55 review function
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     return name;
// }
// function addTwoNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }
// const sum = addTwoNumbers(5, 10);
// console.log(sum);
/* 15 */
// const call = padRow("Kaisda");
// console.log(call);
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


//lesson 56 organize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     return name;
// }
// const call = padRow();
// console.log(call);
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 57 variable scope (global scope)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     return character + name;
// }
// const call = padRow("CamperChan");
// console.log(call);
/* #CamperChan */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 58 variable scope (local scope)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     const test = "Testing";
//     console.log(test);
//     return character + name;
// }
// const call = padRow("CamperChan");
// console.log(call);
/* 
Testing
#CamperChan 
*/
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 59 variable scope (local scope and return variable )
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     const test = "Testing";
//     return test;
// }
// const call = padRow("CamperChan");
// console.log(call);
/* Testing */
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 60 return in function (means code after return will not be executed)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(name) {
//     const test = "Testing";
//     console.log("This works!");
//     return test;
//     console.log("This works!");     // this line will not be executed
// }
// const call = padRow("CamperChan");
// console.log(call);
/*
This works!
Testing
*/
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 61 organize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() {
//     const test = "Testing";
//     return test;
// }
// const call = padRow();
// console.log(call);
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 62 organize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() {

// }
// const call = padRow();
// console.log(call);
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 63 organize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow() {}
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 64 more function parameter
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) { }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 65 function return parameter
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return character.repeat(rowNumber)
// }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 66 call function in for loop
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return character.repeat(rowNumber)
// }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow());
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 67 place parameter in function
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return character.repeat(rowNumber)
// }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count));
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);
/*
#
##
###
####
#####
######
#######
########
*/


// lesson 68 add " " in the beginning and the end of character
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " " +  character.repeat(rowNumber) + " ";
// }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);
/*
 
 #
 ##
 ###
 ####
 #####
 ######
 #######
 ########
*/


// lesson 69 change " " to " ".repeat(rowCount - rowNumber)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 70 change character to character.repeat(2 * rowNumber - 1)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 71 fix i = i + 1 to i+=1
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 0; i < count; i+=1) {
//     rows.push(padRow(i + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 72 fix i+=1 to  i++
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 0; i < count; i++) {
//     rows.push(padRow(i + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 73 change i in for loop start from 1 but the result diagam is missing the first row
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 1; i < count; i++) {
//     rows.push(padRow(i + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 74 change parameter in padRow in row.push from i + 1 to i to fix the missing first row
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 1; i < count; i++) {
//     rows.push(padRow(i, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 75 change i < count to i <= count in for loop condition
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + row + "\n" ;
// }
// console.log(result);


// lesson 76 adding single line comment for the for loop
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 77 adding multi line comment for the for loop
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 78 if loop syntax (true)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// if (true) {
//    console.log("Condition is true");  // condition is true so this line is shown and executed
//     }

// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 79 if loop syntax (false)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// if (false) {
//    console.log("Condition is true"); // condition is false so this line is not shown and not executed
//     }

// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 80 if loop syntax ("false" instead of false)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// if ("false") {
//     console.log("Condition is true");  // condition is not a boolean but a string so this line is shown and executed
// }

// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 81 truly value and falsy value (false , 0 , "", null, undefined, NaN)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// }

// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 82 else if
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 < 10){
//     console.log("5 is less than 10");
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 83 else
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);



// lesson 84 comment if statement and declare two variables
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 85 while loop
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(continueLoop) {
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 86  infinite loop & increment operator
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(continueLoop) {
//      done++ ;
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 87  equality operator
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(continueLoop) {
//      done++ ;
//      if (done == count){};
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 88  strict equality operator
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(continueLoop) {
//      done++ ;
//      if (done == count){};
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 89  strict equality operator
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(continueLoop) {
//      done++ ;
//      if (done == count){
//          continueLoop = false;
//      };
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 90  add while loop with loop row.push() and use calling padRow() function with done and count as parameters
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(continueLoop) {
//      done++ ;
//      rows.push(padRow(done, count))
//      if (done == count){
//          continueLoop = false;
//      };
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 91  change while condition with strict equality operator
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(done !== count) {
//      done++ ;
//      rows.push(padRow(done, count))
//      if (done == count){
//          continueLoop = false;
//      };
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 92  remove if statement in while loop because it's been done in while condition and is not needed now
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let continueLoop = false;
// let done = 0;
// while(done !== count) {
//      done++ ;
//      rows.push(padRow(done, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 93  remove continueLoop because is not needed now
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let done = 0;
// while(done !== count) {
//      done++ ;
//      rows.push(padRow(done, count))

// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 94  change while condition with  (done <= count)
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let done = 0;
// while (done <= count) {
//     done++;
//     rows.push(padRow(done, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 95  change while condition with  (rows.length < count) because of off-by-one error
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let done = 0;
// while (rows.length < count) {
//     done++;
//     rows.push(padRow(done, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 96  change padRow parameter with  (rows.length + 1, count) because of off-by-one error
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// let done = 0;
// while (rows.length < count) {
//     done++;
//     rows.push(padRow(rows.length + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 97  remove done
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 98 organize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/

// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }

// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 99 try something else like upside-down or inverted pyramid
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
// for (let i = count,false,false) {
//
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 100 try upside-down 1
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
// for (let i = count;i > 0;false) {
//
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 101 try upside-down 2
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
// for (let i = count,i > 0,i = i - 1) {
//
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 102 try upside-down 3
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
// for (let i = count,i > 0,i = i - 1) {
//      rows.push(padRow(i, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 103 try upside-down 4
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
// for (let i = count,i > 0,i -=1) {
//      rows.push(padRow(i, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 104 try upside-down 5
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 105 organize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 106 another of upside-down with new array method
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 107 array method (.unshift() vs .push())
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 108 array method (.shift() vs .pop())
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 109 oganize codes
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
/*
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count))
// }
*/
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/

// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 110 inverted pyramid 1 use first for loop previous
// const character = "#";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count));
// }

// /*while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }*/

// /*for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }*/

// let result = ""

// for (const row of rows) {
//     result = result + row + "\n";
// }

// console.log(result);


// lesson 111 inverted pyramid 2 change for loop with .unshift() instead of .push
// const character = "#";
// const count = 8;
// const rows = [];
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     rows.unshifted(padRow(i, count))
// }
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 112 add a toggle between .push() and .unshift()
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     rows.unshifted(padRow(i, count))
// }
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 113 add if to check if inverted is true
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     if (inverted){
//      }
//      rows.unshift(padRow(i, count));
//   }
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 114 add work in if statement 
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     if (inverted){
//     rows.unshift(padRow(i, count));
//     }
//   }
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 115 add else statement 
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     if (inverted){
//     rows.unshift(padRow(i, count));
//     } else {}
//   }
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 116 add work in else statement 
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;
// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// // TODO: use a different type of loop
// for (let i = 1; i <= count; i++) {
//     if (inverted){
//     rows.unshift(padRow(i, count));
//     } else {
//         rows.push(padRow(i, count));}
//   }
/*
// if ("") {
//     console.log("Condition is true");  // condition is falsy value so this line is not shown and not executed
// } else if (5 > 10){
//     console.log("5 is less than 10");
// } else {
//      console.log("This is the else block");
// }
*/
/*
// while (rows.length < count) {
//     rows.length;
//     rows.push(padRow(rows.length + 1, count))
// }
*/
/*
// for (let i = count,i > 0, i--) {
//      rows.push(padRow(i, count))
// }
*/
// const numbers = [1, 2, 3]
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted)
// console.log(numbers)
// let result = ""
// for (const row of rows) {
//     result = result + "\n" + row;
// }
// console.log(result);


// lesson 117 oginal code
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;

// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }


// for (let i = 1; i <= count; i++) {
//     if (inverted) {
//         rows.unshift(padRow(i, count));
//     } else {
//         rows.push(padRow(i, count));
//     }
// }



// let result = ""

// for (const row of rows) {
//     result = result + "\n" + row;
// }

// console.log(result);




// lesson experiment more with different values
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}



let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);



