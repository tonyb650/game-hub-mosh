import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <FaSearch color="gray" />
      </InputLeftElement>
      <Input variant="outline" borderRadius="full" placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
