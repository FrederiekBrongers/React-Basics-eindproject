import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { RecipePages } from "../pages/RecipePages";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchfield] = useState("");

  const matchedRecipes = data.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLocaleLowerCase());
  });

  const handleChange = (event) => {
    setSearchfield(event.target.value);
  };

  return (
    <>
      <label>Search for recipes</label>
      <TextInput value={searchField} onChange={handleChange}/>
      <RecipePages onClick={onClick} recipes={matchedRecipes}/>
    </>
  );
};
