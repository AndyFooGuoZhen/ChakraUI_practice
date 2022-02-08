import React, { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function Todolist({ todos, deleteTodo }) {
  return (
    <VStack
      divider={<StackDivider />}
      p={4}
      borderWidth="2px"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.task}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default Todolist;
