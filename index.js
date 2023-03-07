// let bonusPoints = 50;

// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints)

//initialize the count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function


// function iggyAzealia() {
//     console.log(42);
// }
// iggyAzealia();

//Create a function that logs out the sum of all the lap times

// let lap1 = 34;
// let lap2 = 33; // <===  THIS IS WHAT IS KNOWN AS GLOBAL SCOPE
// let lap3 = 36;

// function sumOfLaps() {
//     console.log(lap1 + lap2 + lap3); // <=== THIS IS WHAT IS KNOWN AS FUNCTION SCOPE
// }

// sumOfLaps();  // <=== THIS IS WHAT IS KNOWN AS BLOCK SCOPE


// 5. Create a function that increments the lapsCompleted variable with one
// Run it three times
// let lapsCompleted = 0;

// function incrementLaps() {
//     lapsCompleted = lapsCompleted + 1;
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()
// console.log(lapsCompleted)

// 6. document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0 ✅
// listen for clicks on the increment button ✅
// increment the count variable when the button is clicked ✅
// change the count-el in the HTML to reflect the new count

// let taylorSwift = document.getElementById('count')
// let count = 0;

// function mileyCyrus() {
//     count = count + 1;
//     taylorSwift.innerText = count

// }

// let saveButton = document.getElementById('count')

// function gucciMane() {
//     count = count - 1;
//     saveButton.innerText = count;
// }

// Create two variables, name and greeting. The name should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that concatenates the two strings
// Log myGreeting to the console

// 1. Grab the save-el paragraph and store it in a variable called saveEl ✅
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "✅
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0;
let resetEl = document.getElementById('reset-btn')
let minusEl = document.getElementById('decrement-btn')

function increment() {
    count += 1
    countEl.textContent = count;
}

function save() {
    let countStr = count + ' - '
    saveEl.textContent += countStr
}

function reset() {
    count = 0
    countEl.textContent = count;
}

function decrement() {
    count -= 1
    countEl.textContent = count;
}