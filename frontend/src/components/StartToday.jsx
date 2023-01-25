import React from "react";
import styled from "styled-components";
import { device } from "./device";

const StartToday = () => {
  return (
    <Container>
      <StartTodaySection>
        <h3>Start Today!</h3>
        <a href="/#book-now">
          <button className="btn">Book Now</button>
        </a>
      </StartTodaySection>
    </Container>
  );
};

export default StartToday;

const Container = styled.section`
  background-color: rgb(17, 100, 102);
  width: 100%;
  height: 100%;
  padding: 40px 0;
`;

const StartTodaySection = styled.div`
  background-image: url("../img/stages-booknow-bg.jpeg");
  background-position: center;
  background-size: cover;
  height: 200px;

  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(209, 232, 226, 0.8);
    z-index: -1;
  }

  h3 {
    padding: 20px 0;
    /* color: rgb(53, 65, 59); */
    font-size: 3rem;

    color: rgb(255, 203, 154);
    /* text-transform: uppercase; */
    /* font-weight: 400; */
    /* letter-spacing: 1.8px; */
    /* font-size: 3.5rem; */
    text-shadow: 0 2px 6px rgba(0, 0, 0, 1);
    /* font-weight: 600; */
  }
`;
