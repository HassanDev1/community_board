import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  CardFooter,
} from "@chakra-ui/react";

const BoardCards = ({ item }) => {
  return (
    <Box display='flex'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={item.img} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{item.title}</Heading>
            <Text>{item.desc}</Text>
            <Text color='blue.600' fontSize='l'>
              Location: {item.location}
            </Text>
            <Text color='blue.600' fontSize='sm'>
              Posted: {item.date_posted}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Learn more...
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default BoardCards;
