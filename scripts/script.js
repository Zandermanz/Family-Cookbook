//linking JSON
    //loads JSON data and returns it
    async function loadData(){
        let response = await fetch("../data/recipes.json");
        return await response.json();
    }

    //Unfinished - Another idea to load JSON
    function loadJSON(){
        fetch("../data/recipes.json")
        .then(function(response){
            //console.log(response);
            return response.json
        })
        
        .then(function(data){ //takes returned response.json as data parameter
            //console.log(data);
            return data;
        })
    }

    //used loadJSON method, returns undefined
    let JSONrecipes = loadJSON();
    
    //loads data into recipes using loadData instead
    const data = loadData();
    

//Defining Filters
    // const entrees = recipes.filter(recipes => recipes.recipeCategory == "Entree");
    // const desserts = recipes.filter(recipes => recipes.recipeCategory == "Dessert");
    // const vegetarian = recipes.filter(recipes => recipes.vegetarian == true);

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