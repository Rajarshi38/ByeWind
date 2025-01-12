import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SidebarIcon from "../svg/SidebarIcon";
import StarIcon from "../svg/StarIcon";
import Sun from "../svg/Sun";
import HistoryIcon from "../svg/HistoryIcon";
import Bell from "../svg/Bell";
import SearchIcon from "../svg/SearchIcon";
import InputRightIcon from "../svg/InputRightIcon";

const Header = () => {
  const borderColor = useColorModeValue(
    "rgba(28, 28, 28, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );

  const secondaryText = useColorModeValue(
    "text.light.secondary",
    "text.dark.secondary"
  );
  return (
    <Flex
      padding="20px 28px"
      borderBottom={`1px solid ${borderColor}`}
      justifyContent="space-between"
    >
      {/* left side */}
      <Flex padding="4px" gap="8px" alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Icon as={SidebarIcon} w="20px" h="20px" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Icon as={StarIcon} w="20px" h="20px" />
        </Box>
        <Breadcrumb separator={<Text color={secondaryText}>/</Text>}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color={secondaryText}>
              Dashboards
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Default</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      {/* right side */}
      <Flex gap="20px" alignItems={"center"}>
        <InputGroup
          bg="#F4F4F4"
          border="none"
          borderRadius="8px"
          size="sm"
          w="160px"
          _focusVisible={{
            outline: "none",
          }}
        >
          <InputLeftElement>
            <Icon as={SearchIcon} w="16px" h="16px" />
          </InputLeftElement>
          <Input placeholder="Search" border="none" borderRadius="8px" />
          <InputRightElement>
            <Icon as={InputRightIcon} w="20px" h="20px" />
          </InputRightElement>
        </InputGroup>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={Sun} w="20px" h="20px" />
        </Flex>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={HistoryIcon} w="20px" h="20px" />
        </Flex>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={Bell} w="20px" h="20px" />
        </Flex>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={SidebarIcon} w="20px" h="20px" />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
