import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  onSelectSearch: (searchString: string) => void,
}


const SearchInput = ({onSelectSearch} : Props) => {
  const searchStringRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (searchStringRef.current) {
      onSelectSearch(searchStringRef.current.value)
    } 
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray" />
        </InputLeftElement>
        <Input variant="filled" borderRadius="full" placeholder="Search games..." ref={searchStringRef} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
