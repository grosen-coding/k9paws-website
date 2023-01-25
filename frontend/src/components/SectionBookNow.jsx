import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./device";

const SectionBookNow = () => {
  return (
    <>
      <Container id="book-now">
        <Wrap className="wrapper">
          <h2>Get Started!</h2>
          <h3>
            Follow our guide below to set up your account, get booked in, and
            begin tracking your progress.
          </h3>
          <CardWrap>
            <GetStartedCard>
              <h2>1</h2>
              <h3>Create Account</h3>
              <ul>
                <li>
                  Sign up for an account on our client portal by{" "}
                  <Link to="/register" className="card-link">
                    clicking here.
                  </Link>
                </li>
                <li>
                  Complete the <span>New Customer Registration Form</span>.
                </li>
                <li>
                  More than one dog? You can set up a different profile for each
                  in your account.
                </li>
                <li>
                  From the <span>Home</span> page of your account, start a{" "}
                  <span>New Booking Request</span>.
                </li>
              </ul>
            </GetStartedCard>

            <GetStartedCard>
              <h2>2</h2>
              <h3>Submit Booking</h3>
              <ul>
                <li>
                  Select your dog's profile, then click{" "}
                  <span>Start Booking</span>.
                </li>
                <li>
                  Under the <span>Booking Category</span> drop-down menu, choose
                  your training type.
                </li>
                <li>Click on the course or consultation you wish to book.</li>
                <li>
                  In the <span>Class Notes</span> section, answer a few more
                  questions and indicate if yoi want to purchase a{" "}
                  <span>Training Program Bundle</span>, then <span>Submit</span>
                  .
                </li>
              </ul>
            </GetStartedCard>

            <GetStartedCard>
              <h2>3</h2>
              <h3>Get Confirmation</h3>
              <ul>
                <li>
                  Your <span>Booking Request</span> will be received and
                  approved by our team.
                </li>
                <li>Payment is processed.</li>
                <li>
                  Receive your booking confirmation and any additional prep info
                  by email.
                </li>
                <li>
                  Our team will contact you directly if there is anything
                  preventing approval of a booking request.
                </li>
              </ul>
            </GetStartedCard>
          </CardWrap>
          <p>
            Once your account is created, this is now your portal for everything
            for your K9PAWS training.
          </p>
          <p>
            It's easy to book your pup in for courses, make or cancel
            reservations, communicate directly with us, process secure payments,
            receive written report cards with photos or videos and more.
          </p>
        </Wrap>
      </Container>
    </>
  );
};

export default SectionBookNow;

const Container = styled.section`
  width: 100%;
  height: auto;
  background-color: rgb(53, 65, 59);
  padding-bottom: 40px;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const Wrap = styled.div`
  h2 {
    text-align: center;
    padding: 20px 0;
    font-size: 4rem;
    color: rgb(209, 232, 226);
    font-weight: 500;
  }
  h3 {
    color: rgb(255, 203, 154);
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 40px;
  }

  p {
    text-align: center;
    color: rgb(209, 232, 226, 0.7);
    letter-spacing: 0.5px;
    font-size: 1.3rem;
    font-style: italic;
  }
`;

const CardWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 40px;
  gap: 40px;

  @media ${device.mobileL} {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const GetStartedCard = styled.div`
  width: 22%;
  background-color: #e2e2e2;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid #3e6d74; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 1);

  @media ${device.mobileL} {
    width: 100%;
  }

  .card-link {
    display: inline-block;
    text-decoration: underline;
  }

  h2 {
    color: rgb(53, 65, 59);
    padding: 10px;
    font-size: 6rem;
    font-weight: 600;
  }

  h3 {
    position: relative;
    display: block;
    color: rgb(53, 65, 59) !important;
    padding: 5px;
    width: 100%;
    margin: -10px auto 0;

    &:after {
      content: "";
      background-color: rgb(62, 109, 116, 0.2);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 20px;

    li {
      font-size: 1.4rem;
      line-height: 1.1;
      font-weight: 600;
      color: rgb(53, 65, 59, 0.7);

      padding: 10px 0;
      span {
        color: #3e6d74;
        font-weight: 800;
      }
    }
  }
`;
