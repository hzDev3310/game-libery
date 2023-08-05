import {
  Box,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchbar from "./Searchbar";
import useGameQueryStore, { useSide } from "../store";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  const { setStr, str } = useSide()
  const { setSearchText } = useGameQueryStore();
  return (
    <>
      <HStack justifyContent={"space-between"} paddingY={"10px"} paddingX={15}>
        <HStack>
          <Icon cursor={'pointer'} onClick={() => {
            if (str === 'none') setStr('block');
            if (str === 'block') setStr('none');
          }} boxSize={50} display={{ base: "block", lg: "none" }} as={BsList} />
          <Box width={20}>
            <Link to={"/"}  > <Image src={logo} boxSize={"50px"} objectFit={"cover"} /></Link>
          </Box>
        </HStack>
        <Box width={'100%'} display={{ base: "none", lg: "block" }}>
          <Searchbar searchValue={(e) => setSearchText(e)} />
        </Box>

        <ColorModeSwitch />
      </HStack>
      <Box  display={{ base: "block", lg: "none" }}>

        <Searchbar searchValue={(e) => setSearchText(e)} />
      </Box>
    </>

  );
};

export default Navbar;
