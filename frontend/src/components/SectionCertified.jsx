import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../components/device";

const SectionCertified = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Left>
            <h2>Leading Certified Dog Trainers</h2>
            <p>
              At K9PAWS Dog Training, we believe science and facts are just as
              important as kindness and professionalism when it comes to dog
              training.
            </p>
            <p>
              This team always comes prepared to deliver an elevated experience.
              Backed by first-class industry education, years of hands-on
              mentored experience, and credible certifications.
            </p>
            <p>
              The dog training industry is not regulated, so this means anyone
              can hire out their services to work with your dog. Our team
              believes you and your dog deserve better. Through our work we
              continuously strive to eliminate misinformation, confusion, and
              any potentially harmful or outdated teachings.
            </p>
            <p>
              Feel good about putting your trust in the hands of educated,
              experienced, and credentialed professionals.
            </p>
            <Link to="/about">
              <button className="btn">More About Us!</button>
            </Link>
          </Left>
          <Right>
            <img src="../img/certified-bg.jpeg" alt="" />
          </Right>
        </Wrap>
      </Container>
    </>
  );
};

export default SectionCertified;

const Container = styled.section`
  width: 100%;
  height: auto;
  /* padding: 40px 0; */
  position: relative;
  border-bottom: 5px solid rgb(44, 53, 49);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(44, 53, 49, 0.4);
  }
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  position: relative;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;

  padding: 60px;

  @media ${device.mobileL} {
    width: 100%;
    padding: 25px 15px;
    margin: 0;
    text-align: center;
  }

  h2 {
    color: rgb(17, 100, 102);
    font-size: 4rem;
    line-height: 1.2;
  }

  h3 {
    color: rgb(255, 203, 154);
    text-transform: uppercase;
  }

  p {
    color: rgb(44, 53, 49);
    font-size: 1.4rem;
    padding: 20px 0;
    font-weight: 600;
    letter-spacing: 0.5px;

    @media ${device.mobileL} {
      text-align: justify;
    }
  }

  button {
    width: 40%;
    margin: 20px auto;
  }
`;

const Right = styled.div`
  width: 50%;

  @media ${device.mobileL} {
    width: 100%;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;
