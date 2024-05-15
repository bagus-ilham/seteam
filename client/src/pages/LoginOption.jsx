import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginOption.css";
import { SiEpicgames } from "react-icons/si";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoXbox } from "react-icons/io";
import { SiPlaystation } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { SiNintendonetwork } from "react-icons/si";
import { Box, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export const LoginOptions = () => {
  const navigate = useNavigate();
  const handleCredentialResponse = async (response) => {
    try {
      const res = await axios({
        url: "https://seteam.bikdev.site/login/google",
        method: "POST",
        headers: {
          google_token: response.credential,
        },
      });

      console.log(res);

      localStorage.setItem("accessToken", "Bearer " + res.data.accessToken);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("userName", res.data.userName);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "1077782272082-2v05ih31277can2pj0hac70ih16h1e6q.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      // google.accounts.id.prompt(); // also display the One Tap dialog
    };
  }, []);
  return (
    <Box>
      <Navbar></Navbar>
      <div className="loginOptionsContainer">
        <div className="optionContainerLogin">
          <div className="icon">
            <SiEpicgames className="logo"></SiEpicgames>
          </div>
          <h4>Choose how to sign in to your Epic Account</h4>

          <div className="loginOptionsName">
            <div className="logOption">
              <SiEpicgames className="epic"></SiEpicgames>
              <p className="text">SIGN IN WITH EPIC GAMES</p>
            </div>
            <div className="logOption">
              <RiFacebookCircleLine className="fb"></RiFacebookCircleLine>
              <p className="text">SIGN IN WITH FACEBOOK</p>
            </div>
            <div className="allowedOptionLogin">
              <FcGoogle className="google"></FcGoogle>
              <div id="buttonDiv">
                <p className="text">SIGN IN WITH GOOGLE</p>
              </div>
            </div>
            <div className="logOption">
              <IoLogoXbox className="xbox"></IoLogoXbox>
              <p className="text">SIGN IN WITH XBOX LIVE</p>
            </div>
            <div className="logOption">
              <SiPlaystation className="psn"></SiPlaystation>
              <p className="text">SIGN IN WITH PLAYSTATION NETWORK</p>
            </div>
            <div className="logOption">
              <SiNintendonetwork className="ninten"></SiNintendonetwork>
              <p className="text">SIGN IN WITH NINTENDO ACCOUNT</p>
            </div>
            <div className="logOption">
              <FaSteam className="steam"></FaSteam>
              <p className="text">SIGN IN WITH STEAM</p>
            </div>
            <div className="logOption">
              <BsApple className="apple"></BsApple>
              <p className="text">SIGN IN WITH APPLE</p>
            </div>
          </div>

          <p className="logFooter">
            Have an account?{" "}
            <Link to="/Login">
              <span className="underline">Sign In</span>
            </Link>
          </p>
          <p className="logFooter">
            Don't have an account?{" "}
            <Link to="/Register">
              <span className="underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </Box>
  );
};
