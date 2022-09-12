declare module "@salesforce/apex/Spoonacular.getRecipe" {
  export default function getRecipe(param: {recipeId: any}): Promise<any>;
}
declare module "@salesforce/apex/Spoonacular.getRecipeByIngredients" {
  export default function getRecipeByIngredients(param: {ingredients: any}): Promise<any>;
}
