import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <>
      <LogoWrap className="heading-primary--main">
        <span alt="Logo" className="logo">
          K<span className="logo--nine">9</span>PAWS
        </span>
      </LogoWrap>
    </>
  );
};

export default Logo;

const LogoWrap = styled.h1`
  // Logo
  .logo {
    font-weight: 600;
    color: #333;
    transition: all 0.4s ease;

    &--nine {
      color: rgb(17, 100, 102);
      font-size: 5rem;
      font-weight: 700;
      display: inline-block;
      position: relative;
      top: 0.9rem;
      transition: all 0.4s ease;
    }

    &--nine-med {
      font-size: 2.2rem;
      color: rgb(17, 100, 102);
    }

    &--nine-sm {
      font-size: 1.8rem;
      position: relative;
      top: 0.5rem;
      color: rgb(17, 100, 102);
    }
  }
`;
