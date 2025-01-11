import { Grid, GridItem, useColorMode } from "@chakra-ui/react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "250px 1fr 300px" }}
      templateRows="100vh"
      gap={0}
    >
      {/* Left Sidebar */}
      <GridItem
        borderRight="1px solid rgba(28, 28, 28, 0.1)"
        paddingBlock="20px"
        paddingInline="16px"
      >
        <LeftSidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem>{children}</GridItem>
      {/* Right Sidebar */}
      <GridItem borderLeft="1px solid rgba(28, 28, 28, 0.1)">
        <RightSidebar />
      </GridItem>
    </Grid>
  );
};

export default Layout;
