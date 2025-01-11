import {
  Avatar,
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ByeWind from "../assets/icons/ByeWind.svg";
import { leftSidebarData } from "../../data/data";
import RightArrow from "../svg/RightArrow";

const SidebarField = ({ name, isSelected, isExpandable, ...rest }) => {
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

const LeftSidebar = () => {
  const secondaryColor = useColorModeValue(
    "text.light.secondary",
    "text.dark.secondary"
  );
  const mutedColor = useColorModeValue("text.light.muted", "text.dark.muted");
  return (
    <VStack direction="column" align="flex-start" spacing="2" w="full">
      <Flex gap="8px" alignItems="center" padding="4px 8px">
        <Avatar name="ByeWind" src={ByeWind} h="24px" w="24px" />
        <Text lineHeight="20px">ByeWind</Text>
      </Flex>
      <Flex direction="column">
        <Flex gap={4} padding="4px">
          <Text padding="4px 8px" color={secondaryColor}>
            Favourites
          </Text>
          <Text padding="4px 8px" color={mutedColor}>
            Recently
          </Text>
        </Flex>
        <VStack align="start" padding="4px" w="full">
          <Flex alignItems="center" gap={1.5} padding="4px 8px">
            <Circle size="6px" bg="rgba(28, 28, 28, 0.2)" />
            <Text>Overview</Text>
          </Flex>
          <Flex alignItems="center" gap={1.5} padding="4px 8px">
            <Circle size="6px" bg="rgba(28, 28, 28, 0.2)" />
            <Text>Projects</Text>
          </Flex>
        </VStack>
      </Flex>
      {leftSidebarData.map((sidebarData) => (
        <Flex key={sidebarData.title} gap="4px" direction="column" w="full">
          <Text color={secondaryColor} padding="4px 12px">
            {sidebarData.title}
          </Text>
          <VStack align="start">
            {sidebarData.sections.map((section) => (
              <SidebarField key={section.name} {...section} />
            ))}
          </VStack>
        </Flex>
      ))}
    </VStack>
  );
};

export default LeftSidebar;
