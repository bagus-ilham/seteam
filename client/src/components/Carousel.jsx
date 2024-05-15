import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gameSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const Carausel = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.data);
  const status = useSelector((state) => state.games.status);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (status === "idle") {
          await dispatch(fetchGames());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading data</div>;
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Box width="89%" margin="auto" paddingBottom="20px" bgColor={"#121212"}>
      <Flex
        display="grid"
        gridTemplateColumns="2fr 0.5fr"
        gap="20px"
        color="#fff"
        padding="30px"
      >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {games &&
            games
              .filter((item, i) => {
                if (i < 5) {
                  return item;
                }
              })
              .map((el) => {
                return (
                  <Carousel.Item interval={1000}>
                    <Link to={"/Games/" + el.id}>
                    <Image w={"100%"} src={el.background_image} alt={el.name} borderRadius={5}/>
                    </Link>
                  </Carousel.Item>
                );
              })}
        </Carousel>

        <Flex direction="column" justifyContent="space-around">
          {games &&
            games
              .filter((item, i) => {
                if (i < 5) {
                  return item;
                }
              })
              .map((el) => {
                return (
                  <Link to={"/Games/" + el.id}>
                    <Flex alignItems="center" _hover={{bgColor : "#191919"}}  p={2} borderRadius={10}>
                      <Image
                        width={"50%"}
                        src={el.imgUrl_2}
                        alt={el.name}
                        borderRadius={10}
                      />
                      <Text
                        textColor={"gray"}
                        pl={5}
                        bgColor={"transparent"}
                        _hover={{
                          bgColor: "transparent",
                          textColor: "#F8EDFF",
                        }}
                      >
                        {el.name}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carausel;
