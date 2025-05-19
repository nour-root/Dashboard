import { SlOptions } from "react-icons/sl";
import { Menu, Button, Modal, Input, Select } from "@mantine/core";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

export default function Buttons({
  handleClick,
  openClick,
  handleClickEdit,
  id,
}) {
  return (
    <Menu shadow="md">
      <Menu.Target>
        <Button bg={"#eff6e0"}>
          <SlOptions className="text-black" />
        </Button>
      </Menu.Target>
      <Menu.Dropdown className="flex">
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
