import { SlOptions } from "react-icons/sl";
import { Menu, Button, Modal, Input, Select } from "@mantine/core";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
export default function Buttons({
  handleClick,
  openClick,
  handleClickEdit,
  id,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <Menu shadow="md">
      <Menu.Target>
        <Button bg={theme ? "#124559" : "#eff6e0"}>
          <SlOptions className="text-black dark:text-white" />
        </Button>
      </Menu.Target>
      <Menu.Dropdown className="flex" bg={theme ? "#124559" : "white"}>
        <Menu.Item>
          <CiTrash
            id={id}
            onClick={handleClick}
            className="text-red-500 text-2xl"
          />
        </Menu.Item>
        <Menu.Item>
          <CiEdit
            id={id}
            onClick={(e) => {
              openClick();
              handleClickEdit(e);
            }}
            className="text-green-500 text-2xl"
          />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
