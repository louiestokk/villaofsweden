import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@mui/styles";
import img1 from "../assets/IMG-0889.jpg";
import img2 from "../assets/IMG-0891.jpg";
import img3 from "../assets/IMG-0901.jpg";
import img4 from "../assets/IMG-0907.jpg";
import img5 from "../assets/IMG-0915.jpg";
import img6 from "../assets/IMG-0925.jpg";
import img7 from "../assets/IMG-0939 2.jpg";
import img8 from "../assets/IMG-0944.jpg";
import img9 from "../assets/IMG-1076.jpg";
import img10 from "../assets/IMG-1112.jpg";
import img11 from "../assets/IMG-1192.jpg";
import img12 from "../assets/IMG-1244.jpg";
import img13 from "../assets/IMG-1281.jpg";
import img14 from "../assets/IMG-1294.jpg";
import img15 from "../assets/IMG-1453.jpg";
const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%"
  },
  image: {},
  container: {
    width: "100%",
    height: "100%"
  },
  image: {
    objectFit: "center",
    backgroundPosition: "center"
  }
});
const CarouselComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel autoPlay={true}>
        <div className={classes.container}>
          <img src={img1} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img2} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img3} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img4} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img5} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img6} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img7} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img8} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img9} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img10} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img11} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img12} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img13} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img14} className={classes.image} />
        </div>
        <div className={classes.container}>
          <img src={img15} className={classes.image} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
