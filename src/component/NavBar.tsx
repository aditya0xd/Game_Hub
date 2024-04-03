import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" alt="Logo" borderRadius="14px" />
        <Text>NavBar</Text>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
