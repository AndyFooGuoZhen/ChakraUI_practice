import { VStack, Button, Center, HStack } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack h={"100vh"} mx="auto" justifyContent={"center"} align="center">
      <HStack>
        <Button onClick={toggleColorMode}>Toggle Dark/Light Mode</Button>
        <Button _hover={{ bg: darken("primary", 20) }} bg={"primary"}>
          Hello
        </Button>
        <Button _hover={{ bg: darken("primary", 20) }} bg={"secondary"}>
          Bye
        </Button>
      </HStack>
    </VStack>
  );
}

export default App;
