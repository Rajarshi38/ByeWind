import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import {
  activitiesData,
  contactsData,
  notificationData,
} from "../../data/data";

const NotificationSection = ({ notificationData }) => {
  const secondaryColor = useColorModeValue(
    "text.light.secondary",
    "text.dark.secondary"
  );
  return (
    <>
      <Text fontWeight="bold" mb={2} padding="8px 4px">
        Notifications
      </Text>
      <Flex direction="column" gap="8px">
        {notificationData.map((notification) => (
          <Flex key={notification.id} gap="8px" padding="4px">
            <Icon as={notification.icon} w="24px" h="24px"></Icon>
            <Flex align="start" direction="column">
              <Text noOfLines={1} lineHeight="18px">
                {notification.data}
              </Text>
              <Text color={secondaryColor} fontSize="xs" lineHeight="18px">
                {notification.time}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

const ActivitiesSection = ({ activities }) => {
  const secondaryColor = useColorModeValue(
    "text.light.secondary",
    "text.dark.secondary"
  );
  return (
    <>
      <Text fontWeight="bold" mb={2} padding="8px 4px">
        Activities
      </Text>
      <VStack align="start" spacing="0" gap="8px">
        {activities.map((activity, index) => (
          <Box key={index} padding="4px">
            <Flex align="start">
              <Flex direction="column">
                <Avatar
                  h="24px"
                  w="24px"
                  src={activity.user.avatar}
                  mr={"8px"}
                />
                {index < activities.length - 1 && (
                  <Divider
                    orientation="vertical"
                    ml={3}
                    mt={"8px"}
                    h="14px"
                    borderColor="rgba(28, 28, 28, 0.1)"
                  />
                )}
              </Flex>
              <Box>
                <Text noOfLines={1}>{activity.activity}</Text>
                <Text fontSize="xs" color={secondaryColor}>
                  {activity.time}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </>
  );
};

const ContactsSection = ({ contacts }) => {
  return (
    <>
      <Text fontWeight="bold" mb={2} padding="8px 4px">
        Contacts
      </Text>
      <VStack align="start" spacing={4}>
        {contacts.map((contact, index) => (
          <Flex key={index} align="center" padding="4px" gap="8px">
            <Avatar w="24px" h="24px" src={contact.avatar} />
            <Text>{contact.name}</Text>
          </Flex>
        ))}
      </VStack>
    </>
  );
};

const RightSidebar = () => {
  return (
    <VStack padding="20px" align="start" gap="24px">
      <Box>
        <NotificationSection notificationData={notificationData} />
      </Box>
      <Box>
        <ActivitiesSection activities={activitiesData} />
      </Box>
      <Box>
        <ContactsSection contacts={contactsData} />
      </Box>
    </VStack>
  );
};
export default RightSidebar;
