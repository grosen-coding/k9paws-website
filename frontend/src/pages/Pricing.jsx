import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <Container>
      <Wrap>
        <PricingHeader>
          <HeaderLeft>
            <HeaderLeftContent>
              <h1>Programs & Bundles</h1>
              <h3>Everything From a Single-Class to Multi-Class Bundles!</h3>

              <p>
                Here you'll find summary information with pricing and quick
                access links to read more in-depth about our programs that
                interest you. Whether it's a single drop-in class, a multi-class
                course that builds from one week to the next, or a multi-course
                bundle that'll get you more high quality training time with us
                for less - there's something for everyone and every budget.
              </p>
              <p>
                Please email us directly if you have any questions about bundles
                or would like our assistance in choosing the best one for you
                and your dog.
              </p>

              <button className="btn btn-reverse">Show Me the Bundles!</button>
              <p></p>
              <button className="btn btn-reverse">
                <a href="#pricing">Check Out Individual Pricing</a>
              </button>
            </HeaderLeftContent>
          </HeaderLeft>

          <HeaderRight>
            <img src="../img/behaviour-header.jpeg" alt="" />
          </HeaderRight>
        </PricingHeader>

        {/* Prices Section */}
        <Prices>
          <Cards className="wrapper" id="pricing">
            <PriceCard>
              <PriceContent>
                <PriceTitle>
                  <h3>Life Skills Level 1</h3>
                  <h4>Puppy or Teen Group Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Tuesday &/or Thursday Evenings</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>Full Course</h5>
                  <p>
                    <span>$</span>
                    <strong>380</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>8-Week Course</span>
                  </p>
                </PriceDetails>
                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard>

            <PriceCard2>
              <PriceContent>
                <PriceTitle>
                  <h3>Socialization</h3>
                  <h4>Teen Group Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Wednesday Evenings & Saturday Afternoons</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>Drop In</h5>
                  <p>
                    <span>$</span>
                    <strong>30</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>Reservations Required</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard2>

            <PriceCard3>
              <PriceContent>
                <PriceTitle>
                  <h3>Life Skills 2 & 3</h3>
                  <h4>All Ages Program Group</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>
                    <strong>Level 2:</strong> Tuesday & Thursday Evenings
                  </h5>
                  <h5>
                    <strong>Level 3:</strong> Thursday Evenings & Sunday
                    Mornings
                  </h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>Monthly Subscription</h5>
                  <p>
                    <span>$</span>
                    <strong>149</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>Reservations Required</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard3>

            <PriceCard4>
              <PriceContent>
                <PriceTitle>
                  <h3>Puppy ABC Workshops</h3>
                  <h4>Puppy Group Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Sunday Mornings</h5>
                  <h5>3 Hot Topic Choices</h5>
                  <h5>Rotating Schedule</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>Course</h5>
                  <p>
                    <span>$</span>
                    <strong>199</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>2 Week Courses</span>
                  </p>
                </PriceDetails>
                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard4>

            <PriceCard5>
              <PriceContent>
                <PriceTitle>
                  <h3>Cornerstone Workshops</h3>
                  <h4>Teen & Adult Group Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Saturday Afternoons</h5>
                  <h5>3 Hot Topic Choices</h5>
                  <h5>Rotating Schedule</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>Course</h5>
                  <p>
                    <span>$</span>
                    <strong>249</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>4 Week Courses</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard5>

            <PriceCard6>
              <PriceContent>
                <PriceTitle>
                  <h3>Teen Confidence Workshops</h3>
                  <h4>Teen Group Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Sunday Afternoons</h5>
                  <h5>3 Hot Topic Choices</h5>
                  <h5>Rotating Schedule</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>Course</h5>
                  <p>
                    <span>$</span>
                    <strong>349</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>6 Week Courses</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard6>

            <PriceCard7>
              <PriceContent>
                <PriceTitle>
                  <h3>Preparing for a New Dog</h3>
                  <h4>All Ages Private Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>In-Home or In-Centre</h5>
                  <h5>Selection Assistance</h5>
                  <h5>Rotating Schedule</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <h5>
                    2 Hours <span>In-Home</span>
                  </h5>
                  <p>
                    <span>$</span>
                    <strong>159*</strong> <span>+HST</span>
                  </p>
                  <p>
                    <span>*$129 for In-Centre</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard7>

            <PriceCard8>
              <PriceContent>
                <PriceTitle>
                  <h3>Socialization</h3>
                  <h4>Puppy Group Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Monday Evenings</h5>
                  <h5>Wednesday Evenings</h5>
                  <h5>Saturday Mornings</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <div className="details-extras">
                    <div className="details-extras--left">
                      <h5>Drop In</h5>
                      <p>
                        <span>$</span>
                        <strong>15</strong> <span>+HST</span>
                      </p>
                    </div>
                    <div className="details-extras--right">
                      <h5>Unlimited</h5>
                      <p>
                        <span>$</span>
                        <strong>199*</strong> <span>+HST</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    <span>Reservations Required</span>
                  </p>
                  <p>
                    <span>Up to 20 weeks of age</span>
                  </p>
                  <p>
                    <span>*One per scheduled day</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard8>

            <PriceCard9>
              <PriceContent>
                <PriceTitle>
                  <h3>1-on-1 Coaching</h3>
                  <h4>All Ages Private Group</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>By Appointment Only</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <div className="details-extras">
                    <div className="details-extras--left">
                      <h5>Consult</h5>
                      <p>
                        <span>$</span>
                        <strong>169</strong> <span>+HST</span>
                      </p>
                    </div>
                    <div className="details-extras--right">
                      <h5>Session*</h5>
                      <p>
                        <span>$</span>
                        <strong>129*</strong> <span>+HST</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    <span>Consult Required</span>
                  </p>
                  <p>
                    <span>*Value increases with volume</span>
                  </p>
                </PriceDetails>
                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard9>

            <PriceCard10>
              <PriceContent>
                <PriceTitle>
                  <h3>Day Training</h3>
                  <h4>Puppy or Teen Semi-Private Program</h4>
                </PriceTitle>

                <PriceInfo>
                  <h5>Mondays Daytime</h5>
                  <h5>Wednesdays Daytime</h5>
                  <h5>Fridays Daytime</h5>
                  <Link to="/teen-social">Read More!</Link>
                </PriceInfo>

                <PriceDetails>
                  <div className="details-extras">
                    <div className="details-extras--left">
                      <h5>Consult</h5>
                      <p>
                        <span>$</span>
                        <strong>129</strong> <span>+HST</span>
                      </p>
                    </div>
                    <div className="details-extras--right">
                      <h5>Session</h5>
                      <p>
                        <span>$</span>
                        <strong>99*</strong> <span>+HST</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    <span>Consult Required</span>
                  </p>
                  <p>
                    <span>*Value increases with volume</span>
                  </p>
                </PriceDetails>

                <Link to="/login">
                  <button className="btn">Get Started!</button>
                </Link>
              </PriceContent>
            </PriceCard10>
          </Cards>
        </Prices>
      </Wrap>
    </Container>
  );
};

export default Pricing;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 40px 0; */
  position: relative;
  /* border-bottom: 5px solid rgb(44, 53, 49); */

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(44, 53, 49, 1);
  }
`;

const Wrap = styled.div`
  padding-top: 80px;
  /* width: 100%; */
  width: 100%;
  height: 100%;
`;

const PricingHeader = styled.header`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const HeaderLeft = styled.div`
  width: 60%;
  position: absolute;
  background-color: rgb(17, 100, 102);
  padding: 40px 60px;
  left: 0;
  top: 50%;
  height: 80vh;
  transform: translate(0, -50%);
  z-index: 1;
`;

const HeaderLeftContent = styled.div`
  width: 70%;
  height: auto;

  margin: 0 auto;
  h1 {
    color: rgb(255, 203, 154);
    /* text-transform: uppercase; */
    font-weight: 400;
    letter-spacing: 1.8px;
    font-size: 3.5rem;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
  }

  h3 {
    color: rgb(209, 232, 226);
    padding: 25px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    color: rgba(209, 232, 226, 0.8);
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    padding: 10px 0;
    line-height: 1.3;
  }

  h6 {
    font-size: 1rem;
    /* font-style: italic; */
    color: rgb(255, 203, 154);
    font-weight: 400;
  }

  button {
    margin-top: 50px;
  }
`;

const HeaderRight = styled.div`
  width: 60%;
  height: auto;
  position: relative;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Prices Section

const Prices = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 0;
`;

const Cards = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const PriceCard = styled.div`
  background-image: url("../img/life-skills-card.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 500px;
  height: 600px;
  border: 5px solid rgb(17, 100, 102);
  letter-spacing: normal;
`;

const PriceContent = styled.div`
  background: rgba(44, 53, 49, 0.8);
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;

  h3 {
    color: rgb(255, 203, 154);
    font-size: 2rem;
    line-height: normal;
  }

  h4 {
    text-align: left;
    color: rgb(209, 232, 226);
    font-size: 1.4rem;
    line-height: normal;
  }

  h5 {
    color: rgba(209, 232, 226, 0.6);
    font-weight: 400;
    /* text-transform: uppercase; */
    letter-spacing: 0.1;
    font-size: 1.5rem;
    line-height: normal;

    color: #e2e2e2;
  }

  p {
    color: rgba(209, 232, 226, 0.8);
    font-size: 1.7rem;
    letter-spacing: 0.5px;
    /* padding: 10px 0; */
    line-height: 1.3;
    font-weight: 400;

    span {
      font-size: 1rem;
      font-style: normal;
    }

    strong {
      color: rgb(255, 203, 154);
      font-size: 2.4rem;
    }
  }

  button {
    width: 70%;
    margin: 0 auto;
  }
`;

const PriceCard2 = styled(PriceCard)`
  background-image: url("../img/dogs-social.jpeg");
`;

const PriceCard3 = styled(PriceCard)`
  background-image: url("../img/life-skills.jpeg");
`;
const PriceCard4 = styled(PriceCard)`
  background-image: url("../img/puppy-abc.jpeg");
`;
const PriceCard5 = styled(PriceCard)`
  background-image: url("../img/cornerstone.jpeg");
`;
const PriceCard6 = styled(PriceCard)`
  background-image: url("../img/teen-confidence.jpeg");
`;
const PriceCard7 = styled(PriceCard)`
  background-image: url("../img/new-dog.jpeg");
`;
const PriceCard8 = styled(PriceCard)`
  background-image: url("../img/life-skills.jpeg");
`;
const PriceCard9 = styled(PriceCard)`
  background-image: url("../img/life-skills.jpeg");
`;
const PriceCard10 = styled(PriceCard)`
  background-image: url("../img/life-skills.jpeg");
`;

const PriceTitle = styled.div``;

const PriceInfo = styled.div`
  a {
    color: rgb(209, 232, 226);
    font-style: italic;
    display: inline-block;
    text-decoration: underline;
    /* border-bottom: 1px solid rgb(209, 232, 226); */
    margin-top: 20px;

    &:hover {
      font-weight: 600;
    }
  }
`;

const PriceDetails = styled.div`
  .details-extras {
    display: flex;

    &--left {
      padding-right: 30px;
      border-right: 2px solid rgba(209, 232, 226, 0.5);
    }

    &--right {
      padding-left: 30px;
    }
  }

  p {
    span {
      font-size: 1rem;
      /* font-style: italic; */
      font-weight: 200;
      line-height: normal;
    }
  }
`;
