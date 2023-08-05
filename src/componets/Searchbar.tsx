import {
  InputGroup,
  InputLeftElement,
  Input,

} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  searchValue: (value: string) => void;
}

const Searchbar = ({ searchValue }: Props) => {
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputGroup >
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant={'filled'}
        ref={ref}
        type="text"
        placeholder="Search"
        borderRadius="full"
        width={'full'}
        onInput={() => {
          navigate('/')
          searchValue(ref.current!.value.toString())
        }}
      />

    </InputGroup>
  );
};

export default Searchbar;
