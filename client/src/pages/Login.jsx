import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SiEpicgames } from "react-icons/si";
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Button,
  Image,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios({
        url: "https://seteam.bikdev.site/login",
        method: "POST",
        data: login,
      });

      localStorage.setItem("accessToken", "Bearer " + data.accessToken)
      localStorage.setItem("id", data.id)
      localStorage.setItem("email", data.email)
      localStorage.setItem("userName", data.userName)
      navigate("/");

    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
    }
  };

  return (
    <Box>
      <Navbar></Navbar>
      <Flex bgColor="#121212" minH="100vh" align="center" justify="center">
        <Flex
          flexDirection={"column"}
          height={600}
          bgColor="#202020"
          px={40}
          borderRadius={5}
          justifyContent={"center"}
          maxW={"100vh"}
        >
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Image src="../src/assets/logo.png" w={"20%"} mb={10}></Image>
          </Flex>
          <form onSubmit={handleSumbit}>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleInput}
              mb={4}
              textColor={"#F8EDFF"}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleInput}
              mb={4}
              textColor={"#F8EDFF"}
            />
            <Flex align="center" justify="end" mb={4}>
              <Link to="/forgot-password">
                <Text color="teal.500" fontSize="sm" textDecoration="underline">
                  Forgot Your Password
                </Text>
              </Link>
            </Flex>
            <Button colorScheme="teal" type="submit" width="100%" mb={6}>
              Sign In
            </Button>
            <Text
              textAlign="center"
              color="#f1f1f1"
              textDecoration="underline"
              mb={6}
            >
              Privacy Policy
            </Text>
          </form>
          <Text textAlign="center" color="#f4f4f480" fontSize="sm" mb={4}>
            Don't Have an Account ?{" "}
            <Link to="/Register">
              <Text as="span" textDecoration="underline">
                Sign Up
              </Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Footer></Footer>
    </Box>
  );
};
