import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import Todolist from "./components/Todolist";
import addTodo from "./components/addTodo";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const initialTodos = [
    {
      id: 1,
      task: "do hw",
    },
    {
      id: 2,
      task: "chores",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newtodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newtodos);
  }
  return (
    <VStack p={4}>
      <IconButton
        icon={<BsFillSunFill />}
        isRound="true"
        size={"lg"}
        alignSelf="flex-end"
        mb="8"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size={"2xl"}
        bgGradient="linear(to-r,pink.500, pink.300 )"
        bgClip={"text"}
        mb={[0, "3rem !important"]}
      >
        Todo Application
      </Heading>
      <Todolist todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default App;
