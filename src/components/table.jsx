import { Table } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Buttons from "./button";
import { useArray } from "../arrayContext";

export default function Tables() {
  const [opened, { open, close }] = useDisclosure(false);
  const { array, setArray } = useArray();
  const [userIdd, setUserIdd] = useState(null);
  const [state, setState] = useState(false);
  const [item, setItem] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });
  useEffect(() => {
    const storedData = localStorage.getItem("data");

    if (storedData) {
      setArray(JSON.parse(storedData));
    } else {
      axios
        .get("MOCK_DATA.json")
        .then((res) => {
          setArray(res.data);
          localStorage.setItem("data", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function handleSubmitAdd(e) {
    e.preventDefault();
    if (userIdd !== null) {
      setArray((prev) => {
        const newArray = prev.map((p) => (p.id === item.id ? item : p));
        Update(newArray);
        return newArray;
      });
      setUserIdd(null);
      setItem({});
    } else {
      const maxId = array.length > 0 ? Math.max(...array.map((e) => e.id)) : 0;
      let newId = maxId + 1;
      const newItem = {
        id: newId,
        ...item,
      };
      setArray((prev) => {
        const newArray = [...prev, newItem];
        Update(newArray);
        return newArray;
      });
      setItem({});
    }
  }
  function handleDelete(e) {
    const id = e.target.getAttribute("id");
    if (id) {
      setArray((prev) => {
        const newArr = prev.filter((p) => p.id !== Number(id));
        Update(newArr);
        return newArr;
      });
    } else return;
  }

  function Update(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  function handleEdited(e) {
    const idItem = e.target.getAttribute("id");
    let itemSelect = array.find((x) => x.id === Number(idItem));

    if (idItem) {
      setItem(itemSelect);
      setUserIdd(item.id);
      setState(true);
    } else {
      setItem({});
      setState(false);
    }
  }

  const rows = array.map((element, i) => (
    <Table.Tr key={i + 1}>
      <Table.Td>
        <img src={element.image} alt="" />
      </Table.Td>
      <Table.Td>{element.first_name}</Table.Td>
      <Table.Td>{element.last_name}</Table.Td>
      <Table.Td>{element.gender}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>
        <Buttons
          handleClick={handleDelete}
          handleClickEdit={handleEdited}
          openClick={open}
          id={element.id}
        />
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="p-10 space-y-5">
      <div>
        <Modal
          opened={opened}
          onClose={() => {
            setState(false);
            close();
          }}
          title={state ? "Edit" : "Add"}
        >
          <form onSubmit={handleSubmitAdd}>
            <div className="flex justify-between flex-wrap gap-5">
              <Input
                type="text"
                value={item.first_name || ""}
                placeholder="first name"
                onChange={(e) =>
                  setItem((prev) => ({
                    ...prev,
                    first_name: e.target.value,
                  }))
                }
              />
              <Input
                type="text"
                value={item.last_name || ""}
                placeholder="last name"
                onChange={(e) =>
                  setItem((prev) => ({ ...prev, last_name: e.target.value }))
                }
              />
              <Input
                value={item.email || ""}
                className="flex-1/1"
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setItem((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Select
                value={item.gender || ""}
                onChange={(e) => setItem((prev) => ({ ...prev, gender: e }))}
                placeholder="Gender"
                data={["Female", "Male"]}
                className="flex-1"
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  close();
                  setState(false);
                }}
                type="submit"
                color="gray"
                mt={10}
                variant="outline"
              >
                {state ? "Edit" : "Submit"}
              </Button>
            </div>
          </form>
        </Modal>
        <Button
          bg={"#aec3b0"}
          onClick={() => {
            open();
            setState(false);
          }}
        >
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
              <Table.Th>Email</Table.Th>
              <Table.Th>action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}
