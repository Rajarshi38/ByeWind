import { Box, Flex, Grid, GridItem, Text, Icon } from "@chakra-ui/react";
import ArrowRise from "../svg/ArrowRise";
import { stats } from "../../data/data";
import ArrowFall from "../svg/ArrowFall";

const StatsCard = (props) => {
  return (
    <Flex
      padding={6}
      backgroundColor="rgba(227, 245, 255, 1)"
      borderRadius="16px"
      direction="column"
      flex="1"
      gap="8px"
      flexWrap="wrap"
    >
      <Text fontWeight="bold">{props.title}</Text>
      <Flex justify="space-between">
        <Text fontSize="lg">{props.value}</Text>
        <Box display="flex" alignItems="center">
          <Text fontSize="xs">{props.stat.value}</Text>
          <Icon as={props.stat.type === "profit" ? ArrowRise : ArrowFall} />
        </Box>
      </Flex>
    </Flex>
  );
};

const StatsCards = ({ statsData }) => {
  console.log(statsData);
  return statsData.map((stats) => <StatsCard key={stats.id} {...stats} />);
};

const Ecommerce = () => {
  return (
    <Box padding="20px 28px">
      <Text fontWeight="bold" mb={4} padding="4px 8px">
        eCommerce
      </Text>
      <Grid templateColumns="repeat(3,1fr)">
        <GridItem colSpan={1.5} display="flex" gap="28px">
          <StatsCards statsData={stats} />
        </GridItem>
        <GridItem colSpan={1.5}></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </Grid>
    </Box>
  );
};

export default Ecommerce;
