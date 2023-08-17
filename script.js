console.log('I am linked now!');
let name = "Batoul Ghosn";
alert(name);
var age = 19;
const lastName = "Ghosn";
let DOB = "03/05/2004";
console.log("age" + age);
console.log("lastName" + lastName);
console.log("Date of Birth" + DOB);
console.log("text:" + " 'This is a text'");
console.log("boolean:" + " 'true' ");
console.log("boolean:" + " 'false' ");
console.log("integer:" + "'1215'");
console.log("text:" + "'999'");
console.log("Object:" + "'{}'");
console.log("Array:" + "'[]'");
console.log(typeof null);
console.log(typeof undefined);

const stringVar = "Hello, world!";
const numberVar = 42;
const booleanVar = true;
const arrayVar = [1, 2, 3];
const objectVar = { key: "value" };
let undefinedVar;

console.log("stringVar:", stringVar, "(Type:", typeof stringVar + ")");
console.log("numberVar:", numberVar, "(Type:", typeof numberVar + ")");
console.log("booleanVar:", booleanVar, "(Type:", typeof booleanVar + ")");
console.log("arrayVar:", arrayVar, "(Type:", typeof arrayVar + ")");
console.log("objectVar:", objectVar, "(Type:", typeof objectVar + ")");
console.log("undefinedVar:", undefinedVar, "(Type:", typeof undefinedVar + ")");


// Using double quotations
const myTextDouble = "This is a string using double quotations.";

// Using single quotations
const myTextSingle = 'This is a string using single quotations.';

// Using backticks (template literals)
const myTextBacktick = `This is a string using backticks.`;

console.log(myTextDouble);
console.log(myTextSingle);
console.log(myTextBacktick);

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
    'This is my text using single quotations ${counter} times';
const doubleQuote =
    'This is my text using double quotations ${counter} times';
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log("backtick:", backtick);
console.log("singleQuote:", singleQuote);
console.log("doubleQuote:", doubleQuote);
console.log("tryThisAlso:", tryThisAlso);
console.log("Single quotations are simple string delimiters.They do not support string interpolation.");
console.log('They are also used to create string literals.They do not support string interpolation.');
console.log("Backsitcks" + " are used to create literals.They do support string interpolation.");

const firstName = "David";
const lastName2 = "Patterson";

const result = firstName + " " + lastName2;

console.log(result);

// Strict Equality (===)
console.log(5 === 5);        // true (number === number)
console.log("5" === 5);      // false (string !== number)
console.log(true === true);  // true (boolean === boolean)

// Strict Inequality (!==)
console.log(10 !== 5);       // true (number !== number)
console.log("10" !== 10);    // true (string !== number)
console.log(true !== false); // true (boolean !== boolean)

// Loose Equality (==)
console.log(7 == 7);         // true (number == number)
console.log("7" == 7);       // true (string == number)
console.log(true == 1);      // true (boolean == number)

// Loose Inequality (!=)
console.log(3 != 9);         // true (number != number)
console.log("3" != 3);       // false (string == number)
console.log(false != 0);     // false (boolean == number)

// Greater Than (>)
console.log(10 > 5);     // true (number > number)
console.log("7" > 5);    // true (string > number)
console.log(false > 0);  // false (boolean > number)

// Greater Than or Equals (>=)
console.log(7 >= 7);     // true (number >= number)
console.log("7" >= 7);   // true (string >= number)
console.log(true >= 1);  // true (boolean >= number)

// Less Than (<)
console.log(3 < 9);      // true (number < number)
console.log("3" < 9);    // true (string < number)
console.log(false < 1);  // true (boolean < number)

// Less Than or Equals (<=)
console.log(5 <= 5);     // true (number <= number)
console.log("5" <= 5);   // true (string <= number)
console.log(true <= 1);  // true (boolean <= number)

const result0 = 5 + 3 * 2;
console.log(result0); // Expected output: 11

const result1 = 10 / 2 + 3;
console.log(result1); // Expected output: 8

const result2 = 10 / (2 + 3);
console.log(result2); // Expected output: 2

console.log("Comparison between result1 and result2:");

// Comparison Explanation
console.log(`result1 (${result1}) > result2 (${result2}):`, result1 > result2);
console.log(`result1 (${result1}) >= result2 (${result2}):`, result1 >= result2);
console.log(`result1 (${result1}) < result2 (${result2}):`, result1 < result2);
console.log(`result1 (${result1}) <= result2 (${result2}):`, result1 <= result2);
console.log(`result1 (${result1}) === result2 (${result2}):`, result1 === result2);
console.log(`result1 (${result1}) !== result2 (${result2}):`, result1 !== result2);

