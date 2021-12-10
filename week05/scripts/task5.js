/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let currDate = new Date();

// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let currDay = currDate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message = "";

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (currDay > 0 && currDay < 6) {
    message = "Hang in there!";
}
else {
    message = "Woohoo! It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage = "";

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (currDay) {
    case 0:
        anotherMessage = "Sunday";
        break;
    case 1:
        anotherMessage = "Monday";
        break;
    case 2:
        anotherMessage = "Tuesday";
        break;
    case 3:
        anotherMessage = "Wednesday";
        break;
    case 4:
        anotherMessage = "Thursday";
        break;
    case 5:
        anotherMessage = "Friday";
        break;
    case 6:
        anotherMessage = "Saturday";
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = anotherMessage;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(listOfTemples) {
    for (let i = 0; i < listOfTemples.length; i++) {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = listOfTemples[i].templeName;
        article.appendChild(h3);

        let h4 = document.createElement("h4");
        h4.textContent = listOfTemples[i].location;
        article.appendChild(h4);

        h4.textContent = listOfTemples[i].dedicated;
        article.appendChild(h4);

        let img = document.createElement("img");
        img.setAttribute('src', listOfTemples[i].imageUrl);
        img.setAttribute('alt', listOfTemples[i].templeName);
        article.appendChild(img);

        document.getElementById("temples").appendChild(article);
    }
}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
// Step 7: Finally, call the output function and pass it the list of temples
fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        temples = jsonObject;
        output(temples);
    });

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    document.getElementById("temples").innerHTML = "";
}

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    reset();
    let filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'templeNameAscending':
            output(temples.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 < templeName2) 
                        return -1;
                    else if (templeName1 > templeName2) 
                        return 1;
                    else 
                        return 0;
                }));
            break;
        case 'templeNameDescending':
            output(temples.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 > templeName2) 
                        return -1;
                    else if (templeName1 < templeName2) 
                        return 1;
                    else 
                        return 0;
                }));
            break;
    }
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
