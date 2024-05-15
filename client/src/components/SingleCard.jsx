import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import rupiah from "../utils";

const SingleCard = ({ data }) => {
  console.log(data);
  return (
    <Box
      backgroundColor="#191919"
      textAlign="left"
      textDecoration="none"
      fontFamily="Brutal, sans-serif"
      maxH={320}
      m={3}
      p={3}
      borderRadius={10}
      transition="all 0.3s ease-in-out"
      cursor="pointer"
      opacity="1"
      _hover={{ opacity: 0.7 }}
    >
        <Box>
          <Image
            src={data.background_image}
            alt={data.name}
            width="100%"
            minHeight="200"
            objectFit={"cover"}
            borderRadius={10}
          />
        </Box>
      <Box>
        <Flex flexDir={"column"} justifyContent={"space-between"} minH={110}>
        <Text mt={2} textAlign={"center"} textColor={"#F8EDFF"}>
          {data.name}
        </Text>
        <Flex justifyContent={"space-between"}>
            
        <Text ml={2} textColor={"#F8EDFF"}>{rupiah(data.price)}</Text>
        <Text mr={2} textColor={"#F8EDFF"} fontSize={15}>View More...</Text>
            </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default SingleCard;
