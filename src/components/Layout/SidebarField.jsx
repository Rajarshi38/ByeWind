import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import RightArrow from "../svg/RightArrow";

const LeftSidebarField = ({ name, isSelected, isExpandable, ...rest }) => {
  const indicatorColor = useColorModeValue(
    "rgba(28, 28, 28, 1)",
    "rgba(198, 199, 248, 1)"
  );
  return (
    <Box w="full">
      <HStack
        align="center"
        paddingBlock="4px"
        backgroundColor={isSelected ? "#f4f4f4" : "transparent"}
        w="full"
        padding="4px 8px"
        borderRadius="8px"
        position="relative"
        cursor="pointer"
        _hover={{
          backgroundColor: "#f4f4f4",
        }}
      >
        {isSelected && ( // Conditionally render the indicator
          <Box
            w="4px"
            h="16px"
            position="absolute"
            bg={indicatorColor}
            mr={2}
            borderRadius="lg"
            left="2px"
          />
        )}
        <RightArrow
          width={"5px"}
          height={"9px"}
          visibility={!isExpandable ? "hidden" : "visible"}
          transform={rest.isExpanded ? "rotate(90deg)" : ""}
        />
        <Icon as={rest.icon} />
        <Text>{name}</Text>
      </HStack>
      {rest.subTabs && rest.subTabs.length ? (
        <Flex direction="column" w="full" ml="34px">
          {rest.subTabs.map((tab) => (
            <Box key={tab} padding="4px 8px">
              <Text>{tab}</Text>
            </Box>
          ))}
        </Flex>
      ) : null}
    </Box>
  );
};

export default LeftSidebarField;
