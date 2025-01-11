import {
  Avatar,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ByeWind from "../../assets/icons/ByeWind.svg";
import { leftSidebarData } from "../../data/data";
import LeftSidebarField from "./SidebarField";
import SidebarInfo from "./SidebarInfo";

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
          <SidebarInfo info="Overview" />
          <SidebarInfo info="Projects" />
        </VStack>
      </Flex>
      {leftSidebarData.map((sidebarData) => (
        <Flex key={sidebarData.title} gap="4px" direction="column" w="full">
          <Text color={secondaryColor} padding="4px 12px">
            {sidebarData.title}
          </Text>
          <VStack align="start">
            {sidebarData.sections.map((section) => (
              <LeftSidebarField key={section.name} {...section} />
            ))}
          </VStack>
        </Flex>
      ))}
    </VStack>
  );
};

export default LeftSidebar;
