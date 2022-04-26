
//Defining Filters
    const entrees = data.recipes.filter(recipes => recipes.recipeCategory == "Entree");
    const desserts = data.recipes.filter(recipes => recipes.recipeCategory == "Dessert");
    const vegetarian = data.recipes.filter(recipes => recipes.vegetarian == true);

//DOM Script
    const ingredients = document.getElementById('ingredient');
    const instructions = document.getElementById('instruction');
    const container = document.getElementById('container');


//functions

//Adds a list of ingredients to the ingredients Div
function addIngredients(){
    let ingredientList = document.getElementById('ingredientList'); //sets ingredient UL id
    let listItem = document.createElement('li'); //setting list item as new li element
    listItem.textContent = 'Test Ingredient'; //setting text content of li element
    ingredientList.appendChild(listItem); //appending listItem to ul
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
    let recipe = data.recipes.filter(recipes =>{ 
        if(recipes.title == title) {
            console.log(recipes.recipeIngredient) //logs correct array
            return recipes.recipeIngredient} // does not
        }
    )
    console.log(recipe);
    return recipe;
}