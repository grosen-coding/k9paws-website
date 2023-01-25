import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { FaPaw } from "react-icons/fa";
import { device } from "../components/device";

const Hero = () => {
  return (
    <>
      <Main className="main wrapper">
        <div className="heading-container">
          <div className="heading-primary">
            <Logo />
            <h2 className="heading-primary--sub">
              Your canine education portal
            </h2>
          </div>
          <FaPaw className="paw1" />
          <FaPaw className="paw2" />
          <FaPaw className="paw3" />
          <FaPaw className="paw4" />
          <FaPaw className="paw6" />
          <FaPaw className="paw7" />
          <FaPaw className="paw8" />
          <FaPaw className="paw9" />
          {/* <FaArrowAltCircleDown className="arrow-down" /> */}
        </div>
      </Main>
    </>
  );
};

export default Hero;

const Main = styled.header`
  background-image: url("./img/hero-bg.jpeg");
  background-size: cover;
  background-position: bottom bottom;
  background-repeat: no-repeat;
  background-color: rgba(209, 232, 226, 0.2);
  /* background-attachment: fixed; */
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid rgb(44, 53, 49);
  position: relative;
  z-index: 1;
  /* perspective: 1000; */

  @media ${device.mobileL} {
    background-size: contain;
    background-position: bottom;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(209, 232, 226, 0.2);
    z-index: -1;
  }

  .heading-container {
    width: 100vw;
    height: 100%;
    position: relative;

    .paw1 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: -5%;
      left: 42%;
      transform: rotate(185deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 4.1s;
    }

    .paw2 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 5%;
      left: 52%;
      transform: rotate(165deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 3.8s;
    }

    .paw3 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 15%;
      left: 40%;
      transform: rotate(195deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 3.5s;
    }

    .paw4 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 25%;
      left: 50%;
      transform: rotate(195deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 3.2s;
    }

    .paw6 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 40%;
      left: 44%;
      transform: rotate(165deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 2.9s;
    }
    .paw7 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 52%;
      left: 52%;
      transform: rotate(180deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 2.6s;
    }
    .paw8 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 67%;
      left: 43%;
      opacity: 0;
      transform: rotate(165deg) translateY(100%);
      animation: paw 1s;
      animation-delay: 2.3s;
    }
    .paw9 {
      color: rgb(44, 53, 49, 0.7);
      font-size: 5rem;
      position: absolute;
      bottom: 75%;
      left: 52%;
      transform: rotate(185deg) translateY(100%);
      opacity: 0;
      animation: paw 1s;
      animation-delay: 2s;
    }

    /* .arrow-down {
      position: absolute;
      bottom: 5%;
      font-size: 4rem;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, 100%);
      color: rgb(44, 53, 49, 0.8);
      animation: arrowDown 1s forwards infinite;
      animation-delay: 4.8s;
    } */
  }
  .heading-primary {
    cursor: default;
    position: absolute;
    width: 100%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;

    &--main {
      text-transform: uppercase;
      font-size: 6rem;
      font-weight: 600;
      letter-spacing: 1.5rem;
      margin-bottom: 5rem;
      animation: scaleIn 1.3s;
      backface-visibility: hidden;
    }

    &--sub {
      font-size: 2.2rem;
      font-weight: 400;
      letter-spacing: 1rem;
      animation: moveFromBottom 1s forwards;
      animation-delay: 1s;
      text-transform: lowercase;
      opacity: 0;
      color: rgb(17, 100, 102);
      /* text-shadow: 0 0 3px rgba(0, 0, 0); */
    }
  }
`;
