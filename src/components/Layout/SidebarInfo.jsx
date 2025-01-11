import { Circle, Flex, Text } from "@chakra-ui/react";

const SidebarInfo = ({ info }) => {
  return (
    <Flex alignItems="center" gap={1.5} padding="4px 8px">
      <Circle size="6px" bg="rgba(28, 28, 28, 0.2)" />
      <Text>{info}</Text>
    </Flex>
  );
};

export default SidebarInfo;
