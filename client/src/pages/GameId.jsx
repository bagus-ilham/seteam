import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GameId.css";
import { AiFillWindows, AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameById } from "../redux/gameByIdSlice";
import rupiah from "../utils";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const GameId = () => {
  const { id } = useParams();
  //   const dispatch = useDispatch();
  //   const games = useSelector((state) => state.gameById.data);
  //   const status = useSelector((state) => state.gameById.status);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         if (status === "idle") {
  //           await dispatch(fetchGameById(id));
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [status, dispatch]);

  //   if (status === "loading") {
  //     return <div>Loading...</div>;
  //   }

  //   if (status === "failed") {
  //     return <div>Error loading data</div>;
  //   }

  const [games, setGames] = useState({});

  const fetchData = async () => {
    try {
        const response = await axios.get(`https://seteam.bikdev.site/${id}`)

        setGames(response.data)
    } catch (error) {
        console.log(error);
    }
  }

  const handleBuy = async () => {
    try {
      const { data } = await axios.get(`https://seteam.bikdev.site/payment/${id}`, {
        headers: {
          "Authorization": `${localStorage.getItem("accessToken")}` 
        },
      });
      console.log(data);
      // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
      window.snap.pay(data.transactionToken, {
        onSuccess: function(result){
          /* You may add your own implementation here */
          alert("payment success!"); console.log(result);
        },
        onPending: function(result){
          /* You may add your own implementation here */
          alert("wating your payment!"); console.log(result);
        },
        onError: function(result){
          /* You may add your own implementation here */
          alert("payment failed!"); console.log(result);
        },
        onClose: function(){
          /* You may add your own implementation here */
          alert('you closed the popup without finishing the payment');
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className="rmaincontainer">
      <Navbar></Navbar>
      <div className="rcontainer">
        <div className="rLine"></div>
        <p className="rmaintitle">{games.name}</p>
        <div className="roverviewDiv">
          <p className="roverview">Overview</p>
          <p className="rrgap">Add Ons</p>
          <p className="rrgap">Achievements</p>
        </div>
        <div className="rmainDiv">
          <div className="rleftmainDiv">
            <div id="rgametrailer" className="rgamevideo">
              <Flex mt={10}>
                <Image src={games.background_image} maxH={304}></Image>
                <Flex flexDirection={"column"} ml={3}>
                  <Image src={games.imgUrl_2} m={"auto"} maxH={101}></Image>
                  <Image src={games.imgUrl_3} m={"auto"} maxH={101}></Image>
                  <Image src={games.imgUrl_4} m={"auto"} maxH={101}></Image>
                </Flex>
              </Flex>
            </div>
            <div className="rdescriptionDiv">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                obcaecati repellendus praesentium et eaque officia cupiditate
                voluptas, beatae deleniti iste inventore, consequatur
                reprehenderit, fugit rem fuga aut mollitia animi quam!
              </p>
            </div>
            <div className="rgenrefeature">
              <div className="rgenre">
                <div className="rgfleftgap">
                  <p className="rrgf">Genre</p>
                  <span className="rgfdetails">
                    <p>{games.genre}</p>
                  </span>
                </div>
              </div>
              <div className="rfeature">
                <div className="rgfleftgap">
                  <p className="rrgf">Features</p>
                  <span className="rgfdetails">
                    <p>Controller Support,</p>
                    <p>Single Player,</p>
                    <p>Multiplayer,</p>
                  </span>
                  <span className="rgfdetails">
                    <p>Online,</p>
                    <p>Co-op</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="ropenworld">
              <p className="rdestitle">{games.name}</p>
              <p className="rdesdes">
                Includes {games.name} story mode and online
                <br />
                <br />
                In {games.name} video game, Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Unde reprehenderit accusantium
                voluptas facere nihil, natus maxime ipsum. Nisi corrupti numquam
                corporis eligendi, at odit enim nemo accusantium! Expedita, hic
                officiis.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
                illo? Porro consequuntur voluptates exercitationem accusamus
                adipisci? Corporis quae assumenda vitae. Magnam ex beatae dolor,
                asperiores commodi recusandae! Eum, consequatur veniam! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Tempore
                aliquam quam magni eius ut iure quisquam vel? Fuga aut
                provident, nulla consequatur sed, omnis quia numquam blanditiis,
                quidem temporibus aliquid? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellendus iusto officia quas
                blanditiis, temporibus ex veritatis velit alias nesciunt
                necessitatibus suscipit officiis aspernatur sapiente nulla
                aperiam! Maxime iure minus harum. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Iusto necessitatibus dolor
                debitis veritatis a repellendus adipisci ut recusandae ex
                consectetur distinctio commodi, accusantium deserunt saepe natus
                est libero asperiores quasi.
              </p>
            </div>
            <div className="rfollowDiv">
              <p className="rfollow">Follow Us</p>
              <div className="rfollowicons">
                <div>
                  <AiFillFacebook className="riconshover" />
                  <BsInstagram className="riconshover" />
                  <BsTwitter className="riconshover" />
                  <BsYoutube className="riconshover" />
                </div>
              </div>
            </div>

            <p className="rspecification">Windows Specifications</p>
            <div className="rspecificationDiv">
              <div className="rspecDetails">
                <div>
                  <div>
                    <p>Minimum</p>
                    <span className="rrspeciSpan">
                      <p>OS</p>
                      <p>Windows 7 - Service Pack 1</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Processor</p>
                      <p>Intel(R) Core(TM) i5-2500K / AMD FX-6300</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Memory</p>
                      <p>8 GB</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Graphics</p>
                      <p>Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Storage</p>
                      <p>150 GB</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Others</p>
                      <p>Sound Card: DirectX Compatible</p>
                    </span>
                  </div>
                  <div>
                    <p>Recommended</p>
                    <span className="rrspeciSpan">
                      <p>OS</p>
                      <p>Windows 10 - April 2020 Update</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Processor</p>
                      <p>Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Memory</p>
                      <p>16 GB</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Graphics</p>
                      <p>Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Storage</p>
                      <p>150 GB</p>
                    </span>
                    <span className="rrspeciSpan">
                      <p>Others</p>
                      <p>Sound Card: DirectX Compatible</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rrightmainDiv">
            <div className="ralldetailprice">
              <p className="rrbasegame">BASE GAME</p>
              <div className="rdpap">
                <p id="rcalculation" className="rbuyprice">
                  {rupiah(games.price)}
                </p>
              </div>
              <p className="rsaledate">Sale ends in 4/7/2022 at 8:30 PM</p>
            </div>
            <button id="raddcart" onClick={handleBuy}>
              Buy Game
            </button>
            <br />
            <div>
              <span className="rcompanypublisher">
                <p className="rleftlight">Developer</p>
                <p className="rrightlight">UBISOFT</p>
              </span>
              <div className="rrLine" />
              <span className="rcompanypublisher">
                <p className="rleftlight">Publisher</p>
                <p className="rrightlight">UBISOFT</p>
              </span>
              <div className="rrLine" />
              <span className="rcompanypublisher">
                <p className="rleftlight">Rating</p>
                <p className="rrightlight">{games.rating}</p>
              </span>
              <div className="rrLine" />
              <span className="rcompanypublisher">
                <p className="rleftlight">Release Date</p>
                <p className="rrightlight">{games.released}</p>
              </span>
              <div className="rrLine" />
              <span className="rcompanypublisher">
                <p className="rleftlight">Platform</p>
                <AiFillWindows className="rwindowlight" />
              </span>
              <div className="rrLine" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
