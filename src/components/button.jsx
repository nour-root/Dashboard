import { SlOptions } from "react-icons/sl";
import { Menu, Button } from "@mantine/core";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

export default function Buttons() {
  return (
    <Menu shadow="md">
      <Menu.Target>
        <Button bg={"#eff6e0"}>
          <SlOptions className="text-black" />
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="flex">
        <Menu.Item>
          <CiTrash className="text-red-500 text-2xl" />
        </Menu.Item>
        <Menu.Item>
          <CiEdit className="text-green-500 text-2xl" />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
