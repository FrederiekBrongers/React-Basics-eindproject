import { RecipePage } from "./RecipePage";

export const RecipePages = ({recipes, onClick}) => {
    return (
        recipes.map((recipe) => (
            <RecipePage key={recipe.hit} recipe={recipe} onClick={onClick}></RecipePage>
        ))
    )
}