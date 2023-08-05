import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";


const OrderList = () => {
  const {setOrder}=useGameQueryStore()
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const menuOptions = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Sort By: {selectedOption || "Select Option"}
      </MenuButton>
      <MenuList>
        {menuOptions.map((o) => (
          <MenuItem
            onClick={() => {
              setSelectedOption(o.label);
              setOrder(o.value);
            }}
            key={o.value}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderList;
