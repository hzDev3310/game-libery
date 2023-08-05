import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


const PlatformsList = () => {
  const {setPlatform} = useGameQueryStore()
  const { data } = usePlatforms();
  const [title, setTitle] = useState("Platforms");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {title}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setTitle("Platforms");
            setPlatform(null);
          }}
        >
          
          All
        </MenuItem>
        {data?.results.map((p) => (
          <MenuItem
            onClick={() => {
              setTitle(p.name);
              setPlatform(p.id);
            }}
            key={p.id}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsList;
