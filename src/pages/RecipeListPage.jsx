import {
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Box,
  Text,
  Tag,
  Flex,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const handleCardClick = (recipe) => {
    onSelectRecipe(recipe);
  };

  return (
    <Center flexDir="column" gap={4} bgColor="red.300">
      <Heading mt={5}>Our best recipes</Heading>
      <TextInput />
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
                <Image
                  src={hit.recipe.image}
                  h={60}
                  w={"100%"}
                  borderRadius="2xl"
                  objectFit={"cover"}
                />
                <Box p="4">
                  <Center flexDir="column" gap={1}>
                    {hit.recipe.mealType.length > 0 && (
                      <Text
                        textTransform={"uppercase"}
                        fontSize="smaller"
                        textAlign={"center"}
                      >
                        {hit.recipe.mealType.join(", ")}
                      </Text>
                    )}
                    <Text
                      fontWeight="bold"
                      fontSize="xl"
                      mb={2}
                      textAlign={"center"}
                    >
                      {hit.recipe.label}
                    </Text>
                    {hit.recipe.dishType.length > 0 && (
                      <Flex mb={2}>
                        <p>Dish:&nbsp;</p>
                        <Text as="i" textAlign={"center"}>
                          {hit.recipe.dishType.join(", ")}
                        </Text>
                      </Flex>
                    )}
                    <Flex>
                      {hit.recipe.healthLabels.includes("Vegetarian") && (                      
                          <Tag bgColor={"orange.100"} boxShadow="md" mr={1}>
                            Vegetarian
                          </Tag>                        
                      )}
                      {hit.recipe.healthLabels.includes("Vegan") && (
                        <Tag bgColor={"orange.100"} boxShadow="md">
                          Vegan
                        </Tag>
                      )}
                    </Flex>

                    {hit.recipe.dietLabels.length > 0 && (
                      <Box textAlign={"center"} mt={3}>
                        <p>Diet Label(s):</p>
                        <Tag
                          bgColor={"blue.100"}
                          boxShadow="md"
                          textAlign={"center"}
                        >
                          {hit.recipe.dietLabels.join(", ")}
                        </Tag>
                      </Box>
                    )}

                    {hit.recipe.cautions.length > 0 && (
                      <Box mt={3} textAlign={"center"}>
                        <p>Allergens: &nbsp;</p>
                        <Tag
                          bgColor={"green.100"}
                          boxShadow="md"
                          textAlign={"center"}
                        >
                          {hit.recipe.cautions.join(", ")}
                        </Tag>
                      </Box>
                    )}
                  </Center>
                </Box>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Flex>
    </Center>
  );
};
