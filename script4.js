// Array Creation
const fiveNumbers = [7, 12, 25, 8, 3];

// Object Creation
const personalInfo = {
    name: "Fraclin",
    age: 30,
    height: 175,
    location: "NYC",
    nationality: "american"
};

// Challenge 4 - Done with step 2

// New Array with Spread
const nextThreeNumbers = [15, 20, 30];
const allNumbers = [fiveNumbers, nextThreeNumbers];

// New Object with Spread
const additionalInfo = {
    occupation: "Software Engineer",
    hobby: "Playing Guitar",
    education: "Masters certficate in Computer Science"
};
const fullInfo = { ...personalInfo, ...additionalInfo };


// Destructuring Arrays
const [firstNum, secondNum, thirdNum] = fiveNumbers;

// Destructuring Objects
const { name, location, nationality } = personalInfo;


// Challenge 4 - Bonus steps completed

// Nested Destructuring
const personalInfoWithContact = {
    ...personalInfo,
    contactInfo: {
        email: "john@example.com",
        phone: "123-456-7890"
    }
};

const { contactInfo: { email, phone } } = personalInfoWithContact;

console.log("Nested Destructuring:");
console.log("Email:", email);
console.log("Phone:", phone);

// Rest with Destructuring
const [firstNumRest, secondNumRest, ...restOfNumbers] = fiveNumbers;

console.log("\nRest with Destructuring:");
console.log("First Number (Rest):", firstNumRest);
console.log("Second Number (Rest):", secondNumRest);
console.log("Rest of Numbers:", restOfNumbers);

// Merging and Overwriting with Spread
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 5, c: 6, d: 7 };
const mergedObjects = { ...object1, ...object2 };

console.log("\nMerging and Overwriting with Spread:");
console.log("Merged Objects:", mergedObjects);

// Commit: "Challenge 4 - Bonus steps completed".



