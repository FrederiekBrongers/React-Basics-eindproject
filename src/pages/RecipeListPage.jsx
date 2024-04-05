import { Card, CardBody, Center, Heading, Image, Box, Text, Tag, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
// import { useBreakpointValue } from "@chakra-ui/react";

export const RecipeListPage = () => {

  // const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  return (
    <Center flexDir="column" gap={4} bgColor="red.300">
      <Heading mt={5}>RecipeListPage</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {data.hits.map((hit, index) => (
          <Box key={index} width={{ base: "90%", md: "45%", lg: "23%" }} p={2} m={1}>
            <Card
              size={"md"}
              border={"solid"}
              borderColor="gray.400"
              borderRadius="2xl"
              bgColor="gray.200"
              h="100%"
            >
              <CardBody>
                <Image
                  src={hit.recipe.image}
                  h={60}
                  w={"100%"}
                  borderRadius="2xl"
                  objectFit={"cover"}
                />
                <Box p="4">
                  <Center mb={4}>
                    <Text fontWeight="bold" fontSize="xl" mr={2} textAlign={"center"}>
                      {hit.recipe.label}
                    </Text>
                  </Center>
                  <Center flexDir="column" gap={2}>
                    {hit.recipe.dietLabels.length > 0 && (
                      <Tag bgColor={"blue.100"} boxShadow="md" textAlign={"center"}>
                        {hit.recipe.dietLabels.join(", ")}
                      </Tag>
                    )}
                    {hit.recipe.cautions.length > 0 && (
                      <Tag bgColor={"green.100"} boxShadow="md" textAlign={"center"}>
                        Allergens: {hit.recipe.cautions.join(", ")}
                      </Tag>
                    )}
                    {hit.recipe.mealType.length > 0 && (
                      <Tag bgColor={"pink.100"} boxShadow="md" textAlign={"center"}>
                        {hit.recipe.mealType.join(", ")}
                      </Tag>
                    )}
                    {hit.recipe.dishType.length > 0 && (
                      <Tag bgColor={"purple.100"} boxShadow="md" textAlign={"center"}>
                        {hit.recipe.dishType.join(", ")}
                      </Tag>
                    )}
                    {hit.recipe.healthLabels.includes("Vegan") && (
                      <Tag bgColor={"orange.100"} boxShadow="md" textAlign={"center"}>
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
          </Box>
        ))}
      </Flex>
    </Center>
  );
};



