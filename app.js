// Chapter 35-38
// Q1 Write a function that displays current date & time in your browser.

// function timeNow(){
//     var time = new Date()
//     return time
// }

// var time = timeNow()
// document.write(time)

// Q2 Write a function that takes first & last name and then it
// greets the user using his full name.

// function fullName(fName, lName){
//     fullName = fName + " " + lName
//     return fullName
// }

// var uName = fullName(prompt("Enter Your First Name"), prompt("Enter Your Last Name"))

// document.write(uName)


// Q3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addNum(num1, num2){
//     sum = num1+ num2
//     return sum
// }

// var num1 = +prompt("Enter First Number")
// var num2 = +prompt("Enter Second Number")

// var result = addNum(num1, num2)

// document.write("The Sum of " + num1 + " and " + num2 + " is " + result)

// Q4 Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser

// function calculator(num1, num2, operator){
//     if(operator === "+"){
//         return num1 + num2
//     }
//     else if (operator === "-"){
//         return num1 - num2
//     }
//     else if (operator === "*"){
//         return num1 * num2
//     }
//     else if (operator === "/"){
//         return num1 / num2
//     }
//     else if (operator === "%"){
//         return num1 % num2
//     }
//     else(
//         document.write("Invalid Operator"))
// }


// var num1 = +prompt("Enter First Number")
// var num2 = +prompt("Enter Second Number")
// var operator = prompt("Enter Operator")

// var result = calculator(num1, num2, operator)

// document.write("The result of " + num1 + " " + operator + " " + num2 + " is = " + result)



// Q5 Write a function that squares its argument

// function square(num){
//     return num * num
// }

// var num = +prompt("Enter a number")

// var result = square(num)

// document.write("The square of " + num + " is " + result)


// Q6 Write a function that computes factorial of a number

// function factorial(num){
//     if (num === 0){
//         return 1
//     }
//     else{
//         return num * factorial(num-1)
//     }
// }

// var num = +prompt("Enter a number")

// var result = factorial(num)

// document.write("The factorial of " + num + " is " + result)


// Q7 Write a function that take start and end number as inputs
// & display counting in your browser.

// function count(start, end){
//     for (var i = start; i <= end; i++){
//         document.write(i + "<br>")
//     }
// }

// var start = +prompt("Enter start Number")
// var end = +prompt("Enter end Number")

// count(start, end)


// Q8 Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular){
    function calculateSquare(num){
        return num * num
    }

    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
}

// Q9 Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables



function areaRectangle(width, height){
    return width * height
}

var width = +prompt("Enter width of rectangle")
var height = +prompt("Enter height of rectangle")

var result = areaRectangle(width, height)

document.write("The area of rectangle is " + result)



function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }





// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

// function longestWord(str) {
//     var words = str.split(" ");
//     var maxLength = 0;
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length;
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// function toTitleCase(str) {
//     return str.replace(/\b\w/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }


// var str = 'the quick brown fox';
// document.write(toTitleCase(str)); // Outputs: The Quick Brown Fox


// function longestWord(str) {
//     var words = str.split(" ");
//     var maxLength = 0;
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length;
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }


// var str = 'Web Development Tutorial';
// document.write(longestWord(str)); // Outputs: Development


// // Q13 Write a JavaScript function that accepts two arguments, a
// // string and a letter and the function will count the number of
// // occurrences of the specified letter within the string.
// // Sample arguments : 'JSResourceS.com', 'o'


// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// var str = 'JSResourceS.com';
// document.write(countOccurrences(str, 'o')); // Outputs: 2


// // Q14 The Geometrizer



// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.write("The area is " + area);
// }

// calcCircumference(+prompt(`Enter radius for calculating Circumference`)); 

// calcArea(+prompt(`Enter radius for calculating Area`)); 


// // 1. Power function (Calculate a raised to b):

// function power(a, b) {
//     return Math.pow(a, b);
// }

// console.log(power(2, 3)); // 8

// // 2. Leap Year Function:

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return `${year} is a leap year.`;
//     } else {
//         return `${year} is not a leap year.`;
//     }
// }

// console.log(isLeapYear(2020)); // Leap year
// console.log(isLeapYear(2023)); // Not a leap year


// // 3. Area of a Triangle:


// function areaOfTriangle(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// console.log(areaOfTriangle(3, 4, 5)); // 6


// // 4. Calculate Average and Percentage:

// function average(marks) {
//     return marks.reduce((acc, mark) => acc + mark, 0) / marks.length;
// }

// function percentage(marks) {
//     const total = 300; // assuming 100 marks per subject
//     return (marks.reduce((acc, mark) => acc + mark, 0) / total) * 100;
// }

// function mainFunction(marks) {
//     const avg = average(marks);
//     const perc = percentage(marks);
//     console.log(`Average: ${avg}`);
//     console.log(`Percentage: ${perc}%`);
// }

// mainFunction([85, 90, 95]); // Output: Average and percentage


// // 5. Custom indexOf Function:

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(customIndexOf("hello", "e")); // 1
// console.log(customIndexOf("hello", "z")); // -1


// // 6. Remove Vowels:

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("Pleases read this application and give me gratuity")); 
// // Output: "Plss rd ths pplctn nd gv m grtty"


// // 7. Count Vowel Pairs using Switch:

// function countVowelPairs(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         const pair = text[i] + text[i + 1];
//         switch (pair) {
//             case "ae":
//             case "ea":
//             case "ui":
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// console.log(countVowelPairs("Pleases read this application and give me gratuity")); 
// // Output: 3


// // 8. Convert Distance to Meters, Feet, Inches, and Centimeters:

// function convertDistance(km) {
//     const meters = km * 1000;
//     const feet = km * 3280.84;
//     const inches = km * 39370.1;
//     const centimeters = km * 100000;

//     console.log(`Meters: ${meters}`);
//     console.log(`Feet: ${feet}`);
//     console.log(`Inches: ${inches}`);
//     console.log(`Centimeters: ${centimeters}`);
// }

// convertDistance(5); // Example for 5 km

// // 9. Calculate Overtime Pay:

// function overtimePay(hoursWorked) {
//     const overtimeRate = 12;
//     const overtimeHours = hoursWorked - 40;

//     if (overtimeHours > 0) {
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }

// console.log(overtimePay(45)); // Overtime pay for 5 extra hours

// // 10. Calculate Currency Notes:

// function currencyNotes(amount) {
//     let hundreds = Math.floor(amount / 100);
//     amount = amount % 100;

//     let fifties = Math.floor(amount / 50);
//     amount = amount % 50;

//     let tens = Math.floor(amount / 10);

//     console.log(`100s: ${hundreds}, 50s: ${fifties}, 10s: ${tens}`);
// }

// currencyNotes(870); // Example for 870 units
