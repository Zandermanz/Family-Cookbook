
//Defining Filters
    const entrees = data.recipes.filter(recipes => recipes.recipeCategory == "Entree");
    const desserts = data.recipes.filter(recipes => recipes.recipeCategory == "Dessert");
    const vegetarian = data.recipes.filter(recipes => recipes.vegetarian == true);

//DOM Script
const ingredients = document.querySelector('#ingredients');
const instructions = document.querySelector('#instructions');

//functions
function addIngredients(){
    //function exists to add a list of ingredients to the ingredients Div
    const ingredients = document.querySelector('#ingredients');
    const p = document.createElement('p');
    p.textContent = `Test Ingredients`;
    ingredients.appendChild(p)
}

function addInstructions(){

}