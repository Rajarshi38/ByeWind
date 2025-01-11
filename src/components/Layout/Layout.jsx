import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  const borderColor = useColorModeValue(
    "rgba(28, 28, 28, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "212px 1fr 280px" }}
      templateRows="100vh"
      gap={0}
    >
      {/* Left Sidebar */}
      <GridItem
        borderRight={`1px solid ${borderColor}`}
        paddingBlock="20px"
        paddingInline="16px"
      >
        <LeftSidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem>{children}</GridItem>
      {/* Right Sidebar */}
      <GridItem borderLeft={`1px solid ${borderColor}`}>
        <RightSidebar />
      </GridItem>
    </Grid>
  );
};

export default Layout;
