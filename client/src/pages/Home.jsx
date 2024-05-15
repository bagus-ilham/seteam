import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Carausel from '../components/Carousel'
import PopularCards from '../components/PopularCards'
import AffordableCard from '../components/AffordableCard'
import CardPoster from '../components/CardPoster'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopularCards2 from '../components/PopularCards2'
import AffordableCard2 from '../components/AffordableCard2'
import AffordableCard3 from '../components/AffordableCard3'

const Home = () => {
  return (
  <Box bgColor={"#121212"}>
    <Navbar></Navbar>
    <Carausel></Carausel>
    <PopularCards></PopularCards>
    <CardPoster></CardPoster>
    <PopularCards2></PopularCards2>
    <Flex justifyContent={"center"}>
    <AffordableCard></AffordableCard>
    <AffordableCard2></AffordableCard2>
    <AffordableCard3></AffordableCard3>
    </Flex>
    <Footer></Footer>
  </Box>
  )
}

export default Home