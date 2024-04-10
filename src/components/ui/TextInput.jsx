import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => (
  <Input
    
    placeholder="Choose your recipe"
    borderRadius={"xl"}
    borderColor={"white"}
    color={"gray.100"}
    fontSize="1.25rem"
    textAlign="center"
    size="lg"
    width="auto"
    onChange={onChange}
  />
);