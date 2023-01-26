import React from "react";
import styled from "styled-components";

const SectionBanner = ({ imgUrl }) => {
  return (
    <>
      <Container></Container>
    </>
  );
};
export default SectionBanner;

const Container = styled.div`
  height: 400px;
  width: 100%;
  background-image: url("../img/banner-1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 70%;
`;
