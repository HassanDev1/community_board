import { GridItem, SimpleGrid, VStack, Flex } from "@chakra-ui/react";
import BoardCards from "./BoardCards";
import NavBar from "./Navbar";
import { data } from "../utils/data";
const DashBoard = () => {
  return (
    <Flex width='100vw' alignItems='center' justifyContent='center' gap='2'>
      <VStack>
        <NavBar />

        <SimpleGrid columns={3} columnGap='10' rowGap='10'>
          {data.events.map((item, ind) => (
            <GridItem
              colSpan={{ base: 3, lg: 1 }}
              display='flex'
              justifyContent='right'
              key={ind}
            >
              <BoardCards item={item} />
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default DashBoard;
