console.log('hello challenge 2');
const age = 19;

if (age >= 20) {
    console.log("You can enter this room.");
} else {
    console.log("You can't enter this room.");
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log("expression1:", expression1); // true (5 is greater than 3)
console.log("expression2:", expression2); // false (10 is not equal to '10')
console.log("expression3:", expression3); // false (true AND false)
console.log("expression4:", expression4); // true (NOT false)

const age = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (age >= 18 && hasDriverLicense) {
    canDrive = true;
}

let canRentCar = false;
if (age >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
}

let needDriver = false;
if (age < 18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
}

console.log("canDrive:", canDrive);     // true (age >= 18 and hasDriverLicense is true)
console.log("canRentCar:", canRentCar); // false (age >= 22 but hasCar is false)
console.log("needDriver:", needDriver); // false (none of the conditions met)

const role = "admin"; // You can change this value to "user", "guest", or something else

switch (role) {
    case "admin":
        console.log("You have read and write access for the data");
        break;
    case "user":
        console.log("You have only read access for the data");
        break;
    case "guest":
        console.log("You have no access for the data");
        break;
    default:
        console.log("User role is not recognized");
}

