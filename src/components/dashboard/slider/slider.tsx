import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5%",
        background: "rgba(255, 255, 255, 0.920)",
        opacity: 0.8,
        width: "45px",
        height: "90px",
        marginRight: "25px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5%",
        background: "rgba(255, 255, 255, 0.920)",
        opacity: 0.8,
        width: "45px",
        height: "90px",
        marginLeft: "25px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Box m={5}>
        <Typography variant="h1" textAlign="center">
          Slider
        </Typography>
      </Box>
      <Box width="95%" my={5} mx={5}>
        <Slider {...settings}>
          <Box height={300}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src="src/assets/images/photos/slider_1.jpg"
              alt=""
            />
          </Box>
          <Box height={300}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src="src/assets/images/photos/slider_2.jpg"
              alt=""
            />
          </Box>
          <Box height={300}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src="src/assets/images/photos/slider_3.jpg"
              alt=""
            />
          </Box>
          <Box height={300}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src="src/assets/images/photos/slider_6.jpg"
              alt=""
            />
          </Box>
          <Box height={300}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src="src/assets/images/photos/slider_4.jpg"
              alt=""
            />
          </Box>
          <Box height={300}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover", objectPosition: "top" }}
              src="src/assets/images/photos/slider_5.jpg"
              alt=""
            />
          </Box>
        </Slider>
      </Box>
    </motion.div>
  );
}
