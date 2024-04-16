import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ onChange, value }) => {
  

  return (
    <>
      <label>Search for recipes</label>
      <TextInput value={value} onChange={onChange}/>
    </>
  );
};



