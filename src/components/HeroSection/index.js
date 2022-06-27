/** @format */

import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImgBG,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

import imgBG from "../../images/header.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <ImgBG src={imgBG} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>Sign up for a new account today and recieve $250</HeroP>
          <HeroBtnWrapper>
            <Button
              to="/signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
