import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleCard from "../components/SingleCard";
import SortDropdown from "../components/SortDropDown";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../redux/gameSlice';
import { Link } from "react-router-dom";

const AllGame = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.data);
  const status = useSelector((state) => state.games.status);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (status === 'idle') {
          await dispatch(fetchGames());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading data</div>;
  }

  console.log(games);

  return (
    <Box bgColor={"#121212"}>
      <Navbar></Navbar>
      <Box w={"90%"}>
        <Flex justifyContent={"center"}>
          <Text textColor={"#F8EDFF"} mt={50} fontSize={"200%"}>
            Games Available on Game Se-Team
          </Text>
        </Flex>
        <SortDropdown/>
        <Flex ml={"10%"} flexWrap={"wrap"}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>

          {games && games.map((item) => {
            return (
              <Flex flexDirection={"row"}>
                <Link  to={"/Games/" + item.id}>
                <SingleCard data={item} />
                </Link>

              </Flex>
            )
          })}
          </div>
        </Flex>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default AllGame;
