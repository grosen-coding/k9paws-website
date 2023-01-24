import React from "react";
import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";
import { GiSittingDog } from "react-icons/gi";
import SectionBookNow from "../components/SectionBookNow";
import SectionBanner from "../components/SectionBanner";

const Training = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Header>
            <HeaderLeft>
              <LeftContent>
                <h2>Private Training</h2>
                <h3>
                  Dedicated individualized training, coaching, and support
                </h3>
                <p>
                  Get one-on-one attention and a customized holistic training
                  plan designed specifically around the needs and wants of both
                  you and your dog. A certified professional trainer counsels
                  you privately at our training centre how to implement the
                  training plan in daily life and works with you on perfecting
                  your own training mechanics to help speed up progress. This
                  program is a great option for taking a proactive approach with
                  your new puppy, or achieving any training goals with your teen
                  or adult. It is especially suited for clients who are
                  experiencing common or complex behaviour issues with their
                  dog.{" "}
                </p>
                <p>
                  Click the sign up button below to book an initial consultation
                  appointment to get started!
                </p>

                <Pricing>
                  <PricingLeft>
                    <div>
                      <h4>Consult</h4>
                      <h5>
                        <span>$</span>259 <span>+HST</span>
                      </h5>
                    </div>
                    <div>
                      <h4>Session</h4>
                      <h5>
                        <span>$</span>159 <span>+HST</span>
                      </h5>
                    </div>
                  </PricingLeft>
                  <PricingRight>
                    <button className="btn">
                      <a href="#book-now">Sign Up</a>
                    </button>
                  </PricingRight>
                </Pricing>
                <h6>
                  Consultation required for all new clients prior to booking
                  sessions.
                </h6>
              </LeftContent>
            </HeaderLeft>
            <HeaderRight>
              <img src="../img/training-header1.jpeg" alt="" />
            </HeaderRight>
          </Header>

          <BenefitsSection>
            <BenefitsLeft>
              <img src="../img/training-2.jpeg" alt="" />
            </BenefitsLeft>
            <BenefitsRight>
              <BenefitsContent>
                <h3>Benefits of Private Training</h3>
                <h4>Customization</h4>
                <p>
                  Unlike group classes where there is a pre-determined
                  curriculum, private training allows the flexibility and
                  freedom to work on as much or as little as you'd like with
                  your individual priorities being the goal. Private training is
                  suitable for all dogs, for any reason, whereas group classes
                  are not always the best choice for every dog or person to be
                  able to get the most out of a training session.{" "}
                </p>
                <h4>Low Distraction</h4>
                <p>
                  Contrary to popular belief, it's best to start teaching new
                  behaviours in a very low distraction environment to give you
                  and your dog the best chance of achieving the first level of
                  learning - acquisition - faster. In group classes, whether
                  it's another person or dog that is the source of distraction
                  or you and your dog who are the ones distracting others,
                  private training removes this parametre entirely allowing you
                  and Fido to concentrate and progress more rapidly in the early
                  stages with laying a solid understanding of the new
                  behaviour(s) being taught.
                </p>
                <h4>Self-Paced</h4>
                <p>
                  Pace is determined by you and your dog alone. If your dog
                  needs more time, or needs smaller incremental steps with a
                  more difficult behaviour, that's what we do! If you want to
                  schedule a training session twice a week, once a week, or once
                  every two weeks - the choice is yours. As long as you are
                  practicing outside of training sessions based on the trainer's
                  recommendations and homework, the flexibility private training
                  provides can't be beat.{" "}
                </p>
                <h4>"Tech" Support</h4>
                <p>
                  Private training programs include phone, email, or video call
                  support throughout the duration of your program and for up to
                  60 days following for questions relating to the priorities
                  established during our initial consultation.
                </p>
              </BenefitsContent>
            </BenefitsRight>
          </BenefitsSection>

          {/* Plan Cards */}
          <PlanSection>
            <PlanCards>
              <Card>
                <h2>Assess</h2>
                <p>
                  An initial assessment is completed either in person at our
                  training centre, or virtually, to gather detailed information
                  about the current situation, lifestyle, aspirations for Fido
                  and ensure our compatibility.
                </p>
              </Card>
              <GoArrowRight className="card-icon-arrow" />
              <Card>
                <h2>Plan</h2>
                <p>
                  Together we'll come up with a plan that's right for you! Our
                  in-depth discussion will allow us to determine goals and the
                  strategies we will use, align expectations, establish the time
                  investment, frequency and most efficient format for training
                  delivery.
                </p>
              </Card>
              <GoArrowRight className="card-icon-arrow" />

              <Card>
                <h2>Implement</h2>
                <p>
                  Start your program! Step by step, we will work toward
                  established goals. We'll troubleshoot any issues that arise,
                  make adjustments as needed, and sharpen your overall training
                  skills.
                </p>
              </Card>
            </PlanCards>
          </PlanSection>

          {/* Training Info Section */}
          <TrainingInfoSection>
            <InfoLeft>
              <InfoContent>
                {" "}
                <h2>Private 1-on-1</h2>
                <h3>Puppy, Teen, or Adult</h3>
                <h4>This program is designed for...</h4>
                <ul>
                  <li>Dogs of any age and temperament</li>
                  <li>Custom individual counseling and coaching</li>
                  <li>
                    A professional trainer to work directly with you and your
                    dog together during all training sessions
                  </li>
                </ul>
                <h4>Initial consultation overview...</h4>
                <ul>
                  <li>90-min appointment with you and your dog(s)</li>
                  <li>Complete wants and needs assessment</li>
                  <li>
                    Establish priorities, achievable training goals, and
                    determine management strategies to implement
                  </li>
                  <li>
                    Recording of our appointment for reference anytime and a
                    written summary/plan of our recommendations
                  </li>
                </ul>
                <h4>Training sessions overview...</h4>
                <ul>
                  <li>Reward-based training methods</li>
                  <li>Gear/equipment set up</li>
                  <li>
                    Explanations, demonstrations, counseling, and
                    trouble-shooting
                  </li>
                  <li>
                    Targeted management strategies for inside and outside the
                    house
                  </li>
                  <li>Coaching for sharper training mechanics</li>
                  <li>Exercise and enrichment</li>
                  <li>Email, phone, or video consult support</li>
                </ul>
              </InfoContent>
            </InfoLeft>
            <InfoRight>
              <img src="../img/training-3.jpeg" alt="" />
            </InfoRight>
          </TrainingInfoSection>

          {/* Options Section */}

          <OptionsSection>
            <OptionsContent>
              <OptionsLeft>
                <h3>Let's train together!</h3>
                <GiSittingDog className="icon-dog" />
              </OptionsLeft>
              <OptionsRight>
                <h3>You've Got Options!</h3>
                <h4>
                  Initial Consult <span>+</span> 4 Training Sessions{" "}
                  <span>$755</span>
                </h4>
                <h4>
                  Initial Consult <span>+</span> 6 Training Sessions{" "}
                  <span>$895</span>
                </h4>
                <h4>
                  Initial Consult <span>+</span> 8 Training Sessions{" "}
                  <span>$1125</span>
                </h4>
                <h4>
                  Initial Consult <span>+</span> 10 Training Sessions{" "}
                  <span>$1275</span>
                </h4>
                <h4>
                  Initial Consult <span>+</span> 12 Training Sessions{" "}
                  <span>$1400</span>
                </h4>
                <p>All prices subject to HST</p>

                <button className="btn">
                  <a href="#book-now">Book Now!</a>
                </button>
              </OptionsRight>
            </OptionsContent>
          </OptionsSection>

          <SectionBookNow />
        </Wrap>
      </Container>
    </>
  );
};

export default Training;

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
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 90vh;
  position: relative;
  flex-direction: row-reverse;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const HeaderLeft = styled.div`
  width: 60%;
  position: absolute;
  background-color: rgb(17, 100, 102);
  padding: 40px 60px;
  left: 0;
  bottom: 50%;
  height: 80vh;
  transform: translate(0, 50%);
  z-index: 1;
`;

const LeftContent = styled.div`
  width: 70%;
  height: 80vh;

  margin: 0 auto;
  h2 {
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
    font-style: italic;
    color: rgb(255, 203, 154);
    font-weight: 400;
  }
`;

const Pricing = styled.div`
  background-color: rgba(44, 53, 49, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  margin: 20px 0;

  p {
    font-size: 0.5rem;
  }
`;

const PricingLeft = styled.div`
  display: flex;

  h4 {
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.8px;
    color: rgb(255, 203, 154);
    text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
  }

  h5 {
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.5px;

    span {
      font-size: 1rem;
    }
  }

  div {
    padding: 5px 15px;
    color: #e2e2e2;

    &:first-of-type {
      border-right: 1px solid rgb(209, 232, 226);
    }
  }
`;

const PricingRight = styled.div`
  padding-right: 20px;

  button {
    background-color: rgb(209, 232, 226);
  }
`;

const HeaderRight = styled.div`
  width: 60%;
  height: auto;
  /* position: relative;
  left: 0;
  bottom: 0; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Benefits Section

const BenefitsSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  background-color: rgb(209, 232, 226);
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const BenefitsLeft = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BenefitsRight = styled.div`
  width: 50%;
  /* background-color: #e2e2e2; */
  padding: 60px 80px 40px;

  h3 {
    color: rgb(17, 100, 102);
    font-size: 3.5rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
  }

  p {
    color: rgba(44, 53, 49, 1);
    letter-spacing: 0.5px;
    font-size: 1.3rem;
  }
`;

const BenefitsContent = styled.div`
  width: 75%;

  h4 {
    color: rgb(255, 203, 154);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 1);
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
    padding-top: 35px;
  }
`;

// Planning Section
const PlanSection = styled.section`
  width: 100%;
  height: auto;
  padding: 40px 0;
  background-color: rgb(17, 100, 102);
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const PlanCards = styled.div`
  display: flex;
  /* width: 100%; */
  width: 100%;
  /* margin: 0 auto; */
  justify-content: center;
  align-items: center;
  gap: 20px;

  .card-icon-arrow {
    font-size: 5rem !important;
    color: rgb(209, 232, 226);
  }
`;

const Card = styled.div`
  width: 15%;
  background-color: #e2e2e2;
  padding: 15px;
  position: relative;
  min-height: 400px;
  /* height: 100%; */

  h2 {
    text-align: center;
    color: rgb(17, 100, 102);
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
    z-index: 2;
    display: block;
    background-color: rgba(44, 53, 49, 0.3);
    margin-bottom: 25px;
    font-size: 3rem;
  }

  p {
    color: rgba(44, 53, 49, 1);
    letter-spacing: 0.5px;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
  }
`;

// Training Info Section

const TrainingInfoSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  background-color: rgb(209, 232, 226);
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const InfoLeft = styled.div`
  width: 60%;
  padding: 60px 0 0;
`;

const InfoContent = styled.div`
  width: 60%;
  margin: 0 auto;
  color: rgb(44, 53, 49, 1);
  letter-spacing: 0.5px;
  font-size: 1.3rem;
  font-weight: 400;

  h2 {
    color: rgb(17, 100, 102);
    font-size: 3.5rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
  }

  h3 {
    color: rgb(255, 203, 154);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 1);
    font-size: 2.5rem;
    font-weight: 400;
    text-align: left;
    padding-top: 25px;
  }

  h4 {
    color: rgb(17, 100, 102);
    text-align: left;
    font-size: 1.6rem;
    margin-top: 30px;
    font-weight: 700;
  }
`;

const InfoRight = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Options Section

const OptionsSection = styled.section`
  width: 100%;
  height: auto;
  background-image: url("../img/options-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(209, 232, 226, 0.7);
    /* z-index: -1; */
  }
`;

const OptionsContent = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding: 30px 0;
  position: relative;
  z-index: 5;
`;

const OptionsLeft = styled.div`
  background-color: rgb(44, 53, 49);
  padding: 50px;
  width: 40%;
  display: flex;
  flex-direction: column;

  .icon-dog {
    font-size: 7rem;
    align-self: center;
    color: rgb(209, 232, 226);
    margin-top: 20px;
  }

  h3 {
    color: rgb(17, 100, 102);
    text-align: right;
    font-size: 3rem;
  }
`;

const OptionsRight = styled.div`
  background-color: rgb(17, 100, 102);
  padding: 50px;
  width: 60%;

  h3 {
    color: rgb(209, 232, 226);
    text-align: left;
    font-size: 2.2rem;
  }

  h4 {
    color: rgb(209, 232, 226);
    text-align: left;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 5px 0;
    span {
      color: rgb(255, 203, 154);
    }
  }
  p {
    font-size: 1.2rem;
    font-style: italic;
    color: rgb(209, 232, 226, 0.5);
    padding: 8px 0;
    font-weight: 400;
  }

  button {
    margin-top: 30px;
    background-color: rgb(209, 232, 226);
    color: rgb(44, 53, 49);
  }
`;
