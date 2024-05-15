import React, { useEffect } from "react";
import { Box, Flex, Image, Text, Button, Grid } from "@chakra-ui/react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gameSlice";
import { Link } from "react-router-dom";
import rupiah from "../utils";

const PopularCards2 = () => {
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

  return (
    <Box ml={"7.3%"} mr={"7.3%"} backgroundColor="#121212">
      <Flex
        display="flex"
        justifyContent="space-between"
        paddingX="2"
        alignItems="center"
      >
        <Flex>
          <Text color="white" m={3}>
            Most Popular
          </Text>
        </Flex>
        <Flex>
          <MdOutlineArrowBackIos
            type="button"
            color="white"
            backgroundColor="dark"
            rounded="md"
          />
          <MdOutlineArrowForwardIos
            type="button"
            color="white"
            backgroundColor="dark"
            rounded="md"
          />
        </Flex>
      </Flex>
      <Flex gap="10px" padding="20px">
        {games &&
          games
            .filter((item, i) => {
              if (i >= 12 && i < 17) {
                return item;
              }
            })
            .map((el) => {
              return (
                <Box
                  bg="#121212"
                  borderRadius="md"
                  overflow="hidden"
                  h={"30%"}
                  pr={5}
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  opacity="1"
                  _hover={{ opacity: 0.7 }}
                >
                  <Link to={"/Games/" + el.id}>
                    <Image
                      minH={230}
                      minW={110}
                      maxW={220}
                      variant="top"
                      type="button"
                      borderRadius="md"
                      src={el.background_image}
                    />
                  </Link>
                  <Box padding="4">
                    <Text textColor={"#F8EDFF"} fontSize="h6">
                      {el.name}
                    </Text>
                    <Flex gap="3" alignItems="baseline">
                      <Link to={"/Games/" + el.id}>
                        <Text textColor={"#F8EDFF"}>{rupiah(el.price)}</Text>
                      </Link>
                    </Flex>
                  </Box>
                </Box>
              );
            })}
      </Flex>
    </Box>
  );
};

export default PopularCards2;
