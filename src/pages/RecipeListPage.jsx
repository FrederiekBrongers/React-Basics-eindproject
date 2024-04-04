import {
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Box,
  Text,
  Tag,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.ingredients[0].text); //1/2 cup honey

  return (
    <Center flexDir="column" gap={4} bgColor="red.300">
      <Heading mt={5}>Your Recipe App</Heading>
      {data.hits.map((hit, index) => (
        <Card
          key={{ index }}
          size={"md"}
          border={"solid"}
          borderColor="gray.400"
          borderRadius="2xl"
          bgColor="gray.200"
        >
          <CardBody>
            <Image
              src={hit.recipe.image}
              h={60}
              w={"md"}
              borderRadius="2xl"
              objectFit={"cover"}
            ></Image>
            <Box p="4">
              <Center mb={4}>
                <Text fontWeight="semibold" fontSize="xl" mr={2}>
                  {hit.recipe.label}
                </Text>
              </Center>
              <Center flexDir="column" gap={4}>
                {hit.recipe.dietLabels.length > 0 && (
                  <Tag bgColor={"blue.100"} boxShadow="md">
                    {hit.recipe.dietLabels.join(", ")}
                  </Tag>
                )}
                {hit.recipe.cautions.length > 0 && (
                  <Tag bgColor={"green.100"} boxShadow="md">
                    Allergens: {hit.recipe.cautions.join(", ")}
                  </Tag>
                )}
                {hit.recipe.mealType.length > 0 && (
                  <Tag bgColor={"pink.100"} boxShadow="md">
                    {hit.recipe.mealType.join(", ")}
                  </Tag>
                )}
                {hit.recipe.dishType.length > 0 && (
                  <Tag bgColor={"purple.100"} boxShadow="md">
                    {hit.recipe.dishType.join(", ")}
                  </Tag>
                )}
                {hit.recipe.healthLabels.includes("Vegan") && (
                  <Tag bgColor={"orange.100"} boxShadow="md">
                    Vegan
                  </Tag>
                )}
                {hit.recipe.healthLabels.includes("Vegetarian") && (
                  <Tag bgColor={"orange.100"} boxShadow="md">
                    Vegetarian
                  </Tag>
                )}
              </Center>
            </Box>
          </CardBody>
        </Card>
      ))}
    </Center>
  );
};

{
  /* <p>{data.hits[0].recipe.ingredients[0].text}</p> */
}
{
  /* <p>{data.hits[0].recipe.ingredientLines[0]}</p>
      <p>{data.hits[0].recipe.ingredients[0].quantity}</p> */
}
