import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(1); //vul tussen de haakjes iets willekeurigs in om RecipePage weer te geven

  return (
        <div>
          {selectedRecipe ? (
            <RecipePage recipe={selectedRecipe} />
          ) : (
            <RecipeListPage />
          )}
        </div>
      );

};
