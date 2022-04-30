//linking JSON

    let fetchedRes = fetch("https://zandermanz.github.io/Family-Cookbook/data/recipes.json");
    const recipes = JSON.parse(fetchedRes);

//Defining Filters
    const entrees = recipes.filter(recipes => recipes.recipeCategory == "Entree");
    const desserts = recipes.filter(recipes => recipes.recipeCategory == "Dessert");
    const vegetarian = recipes.filter(recipes => recipes.vegetarian == true);

//DOM Script
    const ingredients = document.getElementById('ingredient');
    const instructions = document.getElementById('instruction');
    const container = document.getElementById('container');

//Functions
//Adds a list of ingredients to the ingredients Div
function addIngredients(ingredientArray){
    arrayToHTMLList(ingredientArray, ingredientList);
}

function addInstructions(){
    let instructionList = document.getElementById('instructionList') // sets instruction OL id
    let listItem = document.createElement('li'); //sets listItem
    listItem.textContent = 'Test Instruction'; //setting text content of li element
    instructionList.appendChild(listItem); //appending listItem to ul
}

//take recipe title and return array of recipe ingredients
//unfinished function--------------
function getRecipeIngredients(title){
    let recipe = recipes.filter(recipes =>{ 
        if(recipes.title == title) {
            console.log(recipes.recipeIngredient) //logs correct array
            return recipes.recipeIngredient} // does not
        }
    )
    console.log(recipe);
    return recipe;
}

//takes array and list ID as parameters, inserts <li> html elements for array
function arrayToHTMLList(arr, listID) {
    document.querySelector(`#${listID}`).innerHTML += arr
    .map(item => `<li>${item}</li>`)
    .join('');
}
// example code :
// arrayToHTMLList(['item 1', 'item 2'], 'myListID');
// arrayToHTMLList(recipes[0].recipeIngredient, 'instructionList');