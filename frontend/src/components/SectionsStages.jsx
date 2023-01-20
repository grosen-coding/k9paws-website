import React from "react";
import styled from "styled-components";

const SectionsStages = () => {
  return (
    <>
      <DevelopmentStages>
        <Wrap className="wrapper">
          <h2>Programs By Development Stage</h2>

          <CardsWrap>
            <DevelopmentCard className="card-puppy">
              <h3>Puppy</h3>
              <h4>
                Age Range: <span>8 - 20 weeks</span>
              </h4>
              <div></div>
              <ul>
                <li>Preparation</li>
                <li>Pack Socialization</li>
                <li>Puppy Group Training</li>
                <li>Private Training</li>
                <li>Specialty Workshops</li>
                <li>Online Webinars</li>
              </ul>
            </DevelopmentCard>
            <DevelopmentCard className="card-teen">
              <h3>Teen</h3>
              <h4>
                Age Range: <span>5 - 24 months</span>
              </h4>
              <div></div>

              <ul>
                <li>Preparation</li>
                <li>Intro to the World</li>
                <li>Puppy Group Training</li>
                <li>Private Training</li>
                <li>Specialty Workshops</li>
                <li>Online Webinars</li>
              </ul>
            </DevelopmentCard>
            <DevelopmentCard className="card-adult">
              <h3>Adult/Rescue</h3>
              <h4>
                Age Range: <span>2+ years</span>
              </h4>
              <div></div>

              <ul>
                <li>Rescue Education</li>
                <li>Pack Socialization</li>
                <li>Hierarchy Training</li>
                <li>Private Training</li>
                <li>Specialty Workshops</li>
                <li>Online Webinars</li>
              </ul>
            </DevelopmentCard>
          </CardsWrap>

          <StartToday>
            <h2>Start Today!</h2>
            <a href="#book-now">
              <button className="btn">Book Now</button>
            </a>
          </StartToday>
        </Wrap>
      </DevelopmentStages>
    </>
  );
};

export default SectionsStages;

const DevelopmentStages = styled.section`
  width: 100%;
  height: auto;
  background-color: rgb(53, 65, 59);
  padding-bottom: 40px;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const Wrap = styled.div`
  h2 {
    text-align: center;
    padding: 40px 0;
    font-size: 4rem;
    color: rgb(209, 232, 226);
    font-weight: 500;
  }
`;

const CardsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DevelopmentCard = styled.div`
  width: 30%;
  margin: 25px;
  border: 2px solid #3e6d74;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  align-items: center;
  /* background-color: rgb(209, 232, 226, 0.5); */
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(209, 232, 226, 0.7);
    z-index: 0;
  }

  &.card-puppy {
    background-image: url("../img/puppy-card-bg.jpeg");
    /* height: 100%; */
    /* width: 100%; */
    background-position: center;
    background-size: cover;
  }

  &.card-teen {
    background-image: url("../img/teen-card-bg.jpeg");
    /* height: 100%; */
    /* width: 100%; */
    background-position: center;
    background-size: cover;
    position: relative;
  }
  &.card-adult {
    background-image: url("../img/adult-card-bg.jpeg");
    /* height: 100%; */
    /* width: 100%; */
    background-position: top;
    background-size: cover;
    position: relative;
  }

  div {
    width: 70%;
    height: 2px;
    background-color: rgb(217, 176, 140);
    margin-bottom: 20px;
    z-index: 2;
  }

  h3 {
    color: rgb(53, 65, 59);
    font-size: 2.5rem;
    z-index: 2;
  }

  h4 {
    color: rgb(17, 100, 102);
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 10px;
    z-index: 2;
  }

  ul {
    text-align: center;
    z-index: 2;

    li {
      color: rgb(53, 65, 59);
      font-size: 1.5rem;
      line-height: 1.8;
      font-weight: 600;
    }
  }
`;

const StartToday = styled.div`
  background-image: url("../img/stages-booknow-bg.jpeg");
  background-position: center;
  background-size: cover;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  margin: 50px auto;
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

  h2 {
    padding: 10px 0;
    color: rgb(53, 65, 59);
    font-size: 3rem;
    font-weight: 600;
  }
`;
