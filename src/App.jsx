import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';
import { data } from './utils/data';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(); //vul tussen de haakjes iets willekeurigs in om RecipePage weer te geven

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
