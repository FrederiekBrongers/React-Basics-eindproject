import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
        <div>
          {selectedRecipe ? (
            <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
          ) : (
            <RecipeListPage onSelectRecipe={handleSelectRecipe} />
          )}
        </div>
      );

};
