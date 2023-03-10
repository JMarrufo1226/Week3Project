console.log("Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93")
const ages = [3, 9, 23, 64, 2, 8, 28, 93]; //this command creates the specified array
console.log("1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmaticaly.");
const firstAge = ages[0]; //first element is retrieved programmaticaly
const lastAge = ages[ages.length - 1]; //last element is retrieved programmaticaly
const ageDiff = lastAge - firstAge;
console.log(ageDiff); //age difference is calculated
console.log("1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(100); // this command adds a new element towzrds the end
const firstAgex = ages[0];
const lastAgex = ages[ages.length - 1];
const ageDiffx = lastAgex - firstAgex;
console.log(ageDiffx); //age difference is calculated using new element
console.log("1c. Use a loop to iterate through the array and calculate the average age.");
let sum = 0
for (let i = 0; i < ages.length; i++) { // this for loop is used to calculate the average
    sum += ages[i];
  } 
const avgAge = sum / ages.length;
console.log(avgAge);
console.log("2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’..");
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // A simple array containing a string of names
console.log("2a. Use a loop to iterate through the array and calculate the average number of letters per name.");
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
  }
const avgLettersPerName = totalLetters / names.length;
console.log(avgLettersPerName);
console.log("2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
  }
console.log(concatenatedNames.trim());
console.log("3. How do you access the last element of any array?");
console.log("lastElement = anyArray[array.length -1]"); // this command finds the last element in the array without altering it
console.log("4. How do you access the first element in any array?");
console.log("firstElement = anyArray[0]"); // this command finds the first element in the array without altering it
console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).");
function concatenateWord(word, n) { // This function takes the stated parameters and returns the inputted word 'n' number of times
  return word.repeat(n)
}
console.log(concatenateWord('Hello', 3));
console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.");
function fullName(firstName, lastName) { // This function takes the first and second parameters and concatenates them with a space
  return firstName + " " + lastName
}
console.log(fullName('Jose', 'Marrufo'));
console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
const numbersx= [25, 25, 25, 26];
function isSumGreaterThan100(numbers) { // This function takes the sum of all the numbers in the array and returns true if it greater than 100
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}
console.log(isSumGreaterThan100(numbersx));
console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");
const numbersy = [23, 42, 67, 88, 13];
function calculateAverage(numbers) { // This function takes the values in the array and uses a for loop to find the average
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(calculateAverage(numbersy));
console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
const array1 = [15, 25, 35, 45];
const array2 = [10, 20, 30, 40];
function isFirstArrayAverageGreaterThanSecondArrayAverage(array1, array2) { // This function calcualtes the avereages of the first and second arrays, and determines if the average in the 1st array is greater than the 2nd array
  let sum1 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }
  const avg1 = sum1 / array1.length;

  let sum2 = 0;
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }
  const avg2 = sum2 / array2.length;

  return avg1 > avg2;
}
console.log(isFirstArrayAverageGreaterThanSecondArrayAverage(array1, array2));
console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50");
function willBuyDrink(isHotOutside, moneyInPocket) { // This function takes the two parameters and uses the "&&" operand to check the two conditionals. If both conditions are met, the function returns true
  return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 12.50));
console.log("13. Create a function of your own that solves a problem.");
const numbers = [3, 6, 2, 9, 1, 7];
function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMax(numbers));
// This function was created to quickly and easily find the maximun value in an array of numbers.
// I couldnt figure out how to do question 6
