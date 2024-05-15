import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Image, Text } from "@chakra-ui/react";

const SingleCardMyGame = ({data}) => {
  const { Game } = data;
  return (
    <Box
      className="container"
      backgroundColor="#121212"
      textAlign="left"
      textDecoration="none"
      fontFamily="Brutal, sans-serif"
      m={5}
      w={"20%"}
    >
      <Link>
        <Box
          className="aimg"
          width="100%"
          height="72%"
        >
          <Image src={Game.background_image} alt="err" width="100%" height="100%" />
        </Box>
      </Link>
      <Box className="atitle">
        <Text textColor={"#F8EDFF"} mt={2}>{Game.name}</Text>
        <Box height="15%" display="flex">
          <Text className="aprice" textColor={"#F8EDFF"}>
            {data.status}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SingleCardMyGame