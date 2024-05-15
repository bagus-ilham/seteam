import React, { useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gameSlice";
import { Link } from "react-router-dom";

const AffordableCard2 = () => {
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
    <Box width="20%" padding="0px 3px" mx={10} backgroundColor="#121212">
      
        <Text textAlign={"center"} color="white" mt={3}>
          Action
        </Text>
      <Box>
        {games &&
          games
            .filter((item, i) => {
              if (i >= 20 && i < 23) {
                return item;
              }
            })
            .map((el) => {
              return (
                <Flex
                  flexDirection={"column"}
                  alignContent={"center"}
                  bg="#121212"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <Flex width={"100%"} alignItems={"center"}>
                  <Link to={"/Games/" + el.id}>
                  <Image
                    w={"70%"}
                    minH={130}
                    variant="top"
                    type="button"
                    borderRadius="md"
                    src={el.background_image}
                    m={"0 auto"}
                  />
                  </Link>
                  </Flex>
                  <Text
                    textAlign={"center"}
                    textColor={"#F8EDFF"}
                    fontSize="h6"
                    p={2}
                  >
                    {el.name}
                  </Text>
                </Flex>
              );
            })}
      </Box>
    </Box>
  );
};

export default AffordableCard2;
