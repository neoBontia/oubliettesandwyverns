/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInformation = {"name" : "Neo Adam Bontia", "photo" : "images/mypicture.jpg", "favoriteFoods" : ["Hamburger", "Mangoes", "Rambutan"], 
                     "hobbies" : ["video games", "reading", "sports"], "placesLived" : [saoPaulo = {"place" : "Sao Paulo", "length" : "2 years"}, 
                                                                                        santaRosa = {"place" : "Santa Rosa", "length" : "10 years"},
                                                                                        cabuyao = { "place": "Cabuyao", "length": "6 years" },
                                                                                        cavite = { "place": "Cavite", "length": "2 years" }]};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = myInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", myInformation.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", myInformation.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
function makeListForFavoriteFoods(item) {
    const listElement = document.getElementById("favorite-foods");
    listElement.innerHTML += `<li>${item}</li>`;
}

myInformation.favoriteFoods.forEach(makeListForFavoriteFoods)

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

function makeListForHobbies(item) {
    const listElement = document.getElementById("hobbies");
    listElement.innerHTML += `<li>${item}</li>`;
}

myInformation.hobbies.forEach(makeListForHobbies)

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
function makeListForPlacesLived(item) {
    const listElement = document.getElementById("places-lived");
    listElement.innerHTML += `<dt>${item.place}</dt>`;
    listElement.innerHTML += `<dd>${item.length}</dd>`;
}

myInformation.placesLived.forEach(makeListForPlacesLived)
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
