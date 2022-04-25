const entrees = data.recipes.filter(recipes => recipes.recipeCategory == "Entree");
const desserts = data.recipes.filter(recipes => recipes.recipeCategory == "Dessert");

const vegetarian = data.recipes.filter(recipes => recipes.vegetarian == true);