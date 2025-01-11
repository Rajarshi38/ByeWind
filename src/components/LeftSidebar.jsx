import {
  Avatar,
  Circle,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ByeWind from "../assets/icons/ByeWind.svg";

const LeftSidebar = () => {
  const secondaryColor = useColorModeValue(
    "text.light.secondary",
    "text.dark.secondary"
  );
  const mutedColor = useColorModeValue("text.light.muted", "text.dark.muted");
  return (
    <VStack direction="column" align="flex-start" spacing="4">
      <Flex gap="8px" alignItems="center" padding="4px">
        <Avatar name="ByeWind" src={ByeWind} h="24px" w="24px" />
        <Text lineHeight="20px">ByeWind</Text>
      </Flex>
      <Flex direction="column">
        <Flex gap={4} padding="4px">
          <Text color={secondaryColor}>Favourites</Text>
          <Text color={mutedColor}>Recently</Text>
        </Flex>
        <VStack align="start" padding="4px">
          <Flex alignItems="center" gap={1.5}>
            <Circle size="6px" bg="rgba(28, 28, 28, 0.2)" />
            <Text>Overview</Text>
          </Flex>
          <Flex alignItems="center" gap={1.5}>
            <Circle size="6px" bg="rgba(28, 28, 28, 0.2)" />
            <Text>Projects</Text>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default LeftSidebar;
