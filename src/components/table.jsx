import { Table } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Buttons from "./button";
import { useArray } from "../arrayContext";
export default function Tables() {
  const { array, setArray } = useArray();
  const [first_name, setFirst_name] = useState("");
  const [lastName, setLast_name] = useState("");
  useEffect(() => {
    axios
      .get("MOCK_DATA.json")
      .then((res) => {
        console.log(res.data);
        setArray(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const rows = array.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <img src={element.image} alt="" />
      </Table.Td>
      <Table.Td>{element.first_name}</Table.Td>
      <Table.Td>{element.last_name}</Table.Td>
      <Table.Td>{element.gender}</Table.Td>
      <Table.Td>
        <Buttons />
      </Table.Td>
    </Table.Tr>
  ));
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="p-10 space-y-5">
      <div>
        <Modal opened={opened} onClose={close} title="Add">
          <div className="flex justify-evenly flex-wrap gap-5">
            <Input
              placeholder="first name"
              onChange={(e) => setFirst_name(e.target.value)}
            />
            <Input
              placeholder="last name"
              onChange={(e) => setLast_name(e.target.value)}
            />
            <Select
              placeholder="Gender"
              data={["Female", "Male"]}
              className="flex-1"
            />
          </div>
          <div className="flex justify-end">
            <Button color="gray" mt={10} variant="outline">
              Submit
            </Button>
          </div>
        </Modal>
        <Button bg={"#aec3b0"} onClick={open}>
          Add
        </Button>
      </div>
      <Table.ScrollContainer minWidth={"500px"} maxHeight={"400px"}>
        <Table withTableBorder={true} horizontalSpacing={"xl"}>
          <Table.Thead>
            <Table.Tr className="bg-primary font-semibold text-center">
              <Table.Th>image</Table.Th>
              <Table.Th>first name</Table.Th>
              <Table.Th>last name</Table.Th>
              <Table.Th>gender</Table.Th>
              <Table.Th>action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}
