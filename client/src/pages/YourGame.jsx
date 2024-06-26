import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleCardMyGame from "../components/SingleCardMyGame";
import axios from "axios";

const YourGame = () => {

  const [games, setGames] = useState(null);

  const fetchData = async () => {
    try {
        const response = await axios.get(`https://seteam.bikdev.site/game`, {
          headers: {
            "Authorization": `${localStorage.getItem("accessToken")}` 
          },
        })

        setGames(response.data)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(games);
  return (
    <Box bgColor={"#121212"} >
      <Navbar></Navbar>
      <Box w={"90%"} h={"80vh"}>
        <Flex justifyContent={"center"}>
          <Text textColor={"#F8EDFF"} mt={50} fontSize={"200%"}>
            Your Game
          </Text>
        </Flex>
        <Flex ml={"10%"}>
          {games && games.map((item) => {
            return (
              <SingleCardMyGame data={item} />
            )
          })}
        </Flex>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default YourGame;
