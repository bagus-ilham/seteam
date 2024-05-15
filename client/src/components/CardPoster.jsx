import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gameSlice";
import { Link } from "react-router-dom";
import rupiah from "../utils";

export const CardPoster = () => {
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
    <Box mx={"2.5%"}>
      <Box width="90%" padding="20px" margin="auto" backgroundColor="#121212">
        <Box display="flex" gap="5">
          {games &&
            games
              .filter((item, i) => {
                if (i >= 10 && i < 12) {
                  return item;
                }
              })
              .map((el) => {
                return (
                  <Box
                    id="poster1Udit"
                    bg="#121212"
                    color="gray"
                    transition="all 0.3s ease-in-out"
                    cursor="pointer"
                    opacity="1"
                    _hover={{ opacity: 0.7 }}
                    display={["none", "none", "none", "block"]}
                    mr={10}
                  >
                    <Link to={"/Games/" + el.id}>
                    <Image
                      src={el.background_image}
                      minH={310}
                      maxH={360}
                      alt="Poster"
                      borderRadius={8}
                    />
                    </Link>
                    <Box>
                      <Text textColor={"#F8EDFF"} fontSize="h5" pt={3}>{el.name}</Text>
                      <Text textColor={"#F8EDFF"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugit saepe quasi labore numquam placeat ex in quo
                        cum animi, consequuntur magnam mollitia quas veritatis
                        excepturi, veniam quaerat aliquam magni nihil?
                      </Text>
                      <Text textColor={"#F8EDFF"} fontSize="sm" >
                        {rupiah(el.price)}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
        </Box>
      </Box>
    </Box>
  );
};

export default CardPoster;
