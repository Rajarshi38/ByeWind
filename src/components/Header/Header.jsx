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
          <Icon as={SidebarIcon} />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Icon as={StarIcon} />
        </Box>
        <Breadcrumb>
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
      <Flex gap="8px" alignItems={"center"}>
        <InputGroup
          bg="rgba(28, 28, 28, 0.05)"
          border="none"
          borderRadius="8px"
          size="sm"
        >
          <InputLeftElement>
            <Icon as={SearchIcon} w="16px" h="16px" />
          </InputLeftElement>
          <Input placeholder="Search" border="none" />
          <InputRightElement>
            <Icon as={InputRightIcon} w="20px" h="20px" />
          </InputRightElement>
        </InputGroup>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={Sun} />
        </Flex>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={HistoryIcon} />
        </Flex>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={Bell} />
        </Flex>
        <Flex as="button" justify="center" alignItems="center">
          <Icon as={SidebarIcon} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
