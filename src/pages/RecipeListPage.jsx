import { Card, CardBody, Center, Heading, Box, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";
import { RecipeCardImage } from "../components/RecipeCard/RecipeCardImage";
import { RecipeCardText } from "../components/RecipeCard/RecipeCardText";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const handleCardClick = (recipe) => {
    onSelectRecipe(recipe);
  };

  const [searchField, setSearchfield] = useState("");

  // const matchedRecipes = data.filter((recipe) => {
  //   return recipe.label.toLowerCase().includes(searchField.toLocaleLowerCase());
  // });

  const handleChange = (event) => {
    setSearchfield(event.target.value);
    console.log("event.target.value:", searchField);
  };

  return (
    <Center flexDir="column" gap={4} bgColor="red.300">
      <Heading mt={5}>Our best recipes</Heading>
      <TextInput value={searchField} onChange={handleChange} />
      <Flex flexWrap="wrap" justifyContent="center">
        {data.hits.map((hit, index) => (
          <Box
            key={index}
            width={{ base: "90%", md: "45%", lg: "23%" }}
            p={2}
            m={1}
            onClick={() => handleCardClick(hit.recipe)}
          >
            <Card
              size={"md"}
              border={"solid"}
              borderColor="gray.400"
              borderRadius="2xl"
              bgColor="gray.200"
              h="100%"
            >
              <CardBody cursor="pointer">
                <RecipeCardImage src={hit.recipe.image} />
                {console.log(hit.recipe.mealType.length > 0)}
                <RecipeCardText
                  label={hit.recipe.label}
                  mealTypes={hit.recipe.mealType}
                  dishTypes={hit.recipe.dishType}
                  healthLabels={hit.recipe.healthLabels}
                  dietLabels={hit.recipe.dietLabels}
                  cautions={hit.recipe.cautions}
                />

              
              </CardBody>
            </Card>
          </Box>
        ))}
      </Flex>
    </Center>
  );
};
