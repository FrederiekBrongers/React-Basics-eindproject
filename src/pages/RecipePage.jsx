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

export const RecipePage = ({ recipe }) => {
  return (
    <Center flexDir="column" gap={4} bgColor="red.300">
      <Heading mt={5}>RecipePage werkdocument</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box width={{ base: "90%", md: "45%", lg: "23%" }} p={2} m={1}>
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
                src={recipe.image} // Gebruik het image attribuut van het recept
                h={60}
                w={"100%"}
                borderRadius="2xl"
                objectFit={"cover"}
              />
              <Box p="4">
                {recipe.mealType.length > 0 && (
                  <Text
                    textTransform={"uppercase"}
                    fontSize="smaller"
                    alignItems={"flex-start"}
                  >
                    {recipe.mealType.join(", ")}
                  </Text>
                )}
                <Center flexDir="column" gap={1}>
                  <Text
                    fontWeight="bold"
                    fontSize="xl"
                    mr={2}
                    textAlign={"center"}
                  >
                    {recipe.label}
                  </Text>

                  {recipe.yield !== null && <p>Servings: {recipe.yield}</p>}

                  {recipe.dishType.length > 0 && (
                    <Tag
                      bgColor={"purple.100"}
                      boxShadow="md"
                      textAlign={"center"}
                    >
                      {recipe.dishType.join(", ")}
                    </Tag>
                  )}

                  {recipe.dietLabels.length > 0 && (
                    <>
                      <Flex>
                        <p>Diet Labels:</p>
                        <Tag
                          bgColor={"blue.100"}
                          boxShadow="md"
                          textAlign={"center"}
                        >
                          {recipe.dietLabels.join(", ")}
                        </Tag>
                      </Flex>
                    </>
                  )}

                  {recipe.healthLabels.length > 0 && (
                    <>
                      <p>Health Labels:</p>
                      <flexWrap>
                        {recipe.healthLabels.map((label, index) => (
                          <Tag
                            key={index}
                            bgColor={"orange.100"}
                            boxShadow="md"
                            textAlign={"center"}
                            m={0.5}
                          >
                            {label}
                          </Tag>
                        ))}
                      </flexWrap>
                    </>
                  )}

                  {recipe.cautions.length > 0 && (
                    <>
                      <p>Cautions:</p>
                      <Tag
                        bgColor={"green.100"}
                        boxShadow="md"
                        textAlign={"center"}
                      >
                        Allergens: {recipe.cautions.join(", ")}
                      </Tag>
                    </>
                  )}

                  {recipe.ingredientLines.length > 0 && (
                    <>
                      <p>Ingredients:</p>
                      <Tag
                        bgColor={"black.100"}
                        boxShadow="md"
                        textAlign={"center"}
                      >
                        {recipe.ingredientLines.join(", ")}
                      </Tag>
                    </>
                  )}
                </Center>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Center>
  );
};
