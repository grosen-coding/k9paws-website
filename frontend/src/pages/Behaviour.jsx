import React from "react";
import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";
import SectionBookNow from "../components/SectionBookNow";

const Behaviour = () => {
  return (
    <>
      <Container>
        <Wrap>
          <BehaviourHeader>
            <HeaderLeft>
              <HeaderLeftContent>
                <h1>Behaviour Issues</h1>
                <h3>Guidance, training, coaching and support you can trust!</h3>

                <p>
                  While most of the behaviours that your dog exhibits are
                  perfectly natural for a dog, sometimes they can become
                  problematic for us humans, which can lead to stress and strain
                  on relationships. Learn more about how we categorize behaviour
                  issues and what we can do to help.
                </p>
                <p>
                  While fear is a normal and necessary emotion, there is a point
                  at which is can begin to have welfare implications. For fear
                  and aggression cases we first complete a full functional
                  analysis of your dog's behaviour with you. Then we put
                  together a holistic multimodal plan to understand & address
                  your dog's behaviour. Learn more about fear and aggression in
                  dogs below and get in touch so we can help!
                </p>
                <p>
                  Click the sign up button below to book an appointment for a
                  private consultation to get started!
                </p>

                <Pricing>
                  <PricingLeft>
                    <div>
                      <h4>Consult & Assessment</h4>
                      <h5>
                        <span>$</span>259 <span>+HST</span>
                      </h5>
                      <h6>120mins In-Home</h6>
                    </div>
                  </PricingLeft>
                  <PricingRight>
                    <button className="btn">
                      <a href="#book-now">Sign Up</a>
                    </button>
                  </PricingRight>
                </Pricing>
              </HeaderLeftContent>
            </HeaderLeft>

            <HeaderRight>
              <img src="../img/behaviour-header.jpeg" alt="" />
            </HeaderRight>
          </BehaviourHeader>

          {/* Problem Types Section */}
          <IntroSection>
            <IntroLeft></IntroLeft>
            <IntroRight>
              <RightContent>
                <h3>Common vs. Complex?</h3>
                <p>
                  At K9PAWS Canine Behaviour & Training Centre, we divide
                  behaviour issues into two categories - common and complex. One
                  consists of behaviours that we mostly just find annoying, but
                  could have some safety implications. The other consists of
                  behaviours that are either abnormal or maladaptive and can
                  have serious health and/or safety implications.
                </p>

                <h4>Common Issues</h4>
                <p>
                  They often involve what is considered species normal behaviour
                  for a dog, but conflict might occur when your dog does it
                  either when you don't want, or where you don't want. The list
                  below includes some of the most prevalent examples.
                </p>
                <h4>Complex Issues</h4>
                <p>
                  They are not only problematic for us, but also for our dog as
                  they can have significant impact on their overall health and
                  well-being. The list below includes some examples of
                  behavioural symptoms of complex issues, as well as some
                  neurological conditions and/or genetic predispositions that
                  could cause such symptoms.
                </p>

                <ExamplesWrap>
                  <ExampleCardLeft>
                    <h5>Common Behaviour Issue Examples</h5>
                    <ul>
                      <li>Excessive alert barking</li>
                      <li>Chewing the wrong items</li>
                      <li>
                        Urination (including marking) or defecation indoors
                      </li>
                      <li>Digging in the wrong spots</li>
                      <li>Begging at the table</li>
                      <li>Jumping up on people</li>
                      <li>Counter surfing in the kitchen</li>
                      <li>Bulling playmates or housemates</li>
                      <li>Resources guarding towards other dogs</li>
                      <li>Hard mouthing, nipping, or herding towards people</li>
                      <li>
                        Frustration-based reactivity (barrier frustration)
                      </li>
                      <li>Chasing after critters</li>
                    </ul>
                  </ExampleCardLeft>
                  <ExampleCardRight>
                    <h5>Complex Behaviour Issue Examples</h5>
                    <ul>
                      <li>Bite to dog or person causing injury</li>
                      <li>Conflict aggression</li>
                      <li>Instinctive/Predatory Drift</li>
                      <li>Pica</li>
                      <li>Hyperkinesis</li>
                      <li>Canine Cognitive Dysfunction</li>
                      <li>
                        Anxieties, fears & phobias like:
                        <ul className="inner-ul">
                          <li>Separation Anxiety</li>
                          <li>Noise phobia</li>
                          <li>Generalized anxiety</li>
                          <li>Fear-based reactivity (social fear)</li>
                          <li>Resource guarding towards people</li>
                        </ul>
                      </li>
                      <li>
                        Stereotypies like:
                        <ul className="inner-ul">
                          <li>Licking</li>
                          <li>Shadow or light chasing</li>
                          <li>Tail chasing/whirling</li>
                          <li>Flank sucking</li>
                          <li>Fly snapping</li>
                          <li>Pacing, spinning, whining</li>
                        </ul>
                      </li>
                    </ul>
                  </ExampleCardRight>
                </ExamplesWrap>
              </RightContent>
            </IntroRight>
          </IntroSection>

          {/* Aggression Section */}

          <AggressionSection>
            <AggressionLeft>
              <LeftContent>
                <h3>Fear & Aggression in Dogs</h3>
                <h4>Evolutionarily Adaptive</h4>
                <p>
                  Both fear and aggression play a critical role in a dog's
                  ability to survive. Without it they might find themselves in
                  dangerous situations that could result in injury or even
                  death. Fear keeps curiosity at bay and aggression may help
                  stop a dangerous situation from getting worse - both function
                  to protect the dog.
                </p>

                <h4>Nature & Nuture</h4>
                <p>
                  Domestication has done it's job and increased the tameness of
                  dogs - meaning their natural inclination for fear has been
                  diluted through generations of less fearful dogs breeding with
                  other less fearful dogs. Fear is the default emotion in all
                  animals, including us, but it is essentially on a spectrum
                  spanning low fear to high fear. Genetics contribute a huge
                  part to who a dog is, or is going to be when they grow up, but
                  the story isn't written from day one. Nurture (environmental
                  learning) always works in conjunction with nature (genetics)
                  and that is where our opportunity lies to help them develop
                  confidence with their world via pleasant experiences.
                </p>

                <h4>Psychological & Physiological Effects</h4>
                <p>
                  When a dog's fear response is ignited, it triggers a physical
                  domino effect throughout the brain and body. The part of the
                  brain responsible for conscious thought (aka the thinking
                  part) takes a back seat to the part responsible for processing
                  strong emotions and activating the physical fight-or-flight
                  response. In life there is good stress and bad stress, the
                  former helps us grow confident and resilient, while too much
                  of the later can lead to long term physical and emotional
                  problems. Chronic feelings of stress and fear leads to
                  frequent cortisol spikes which has compromising effects on the
                  immune system creating susceptibility to disease and
                  infection.
                </p>

                <h4>Recognition & Understanding</h4>
                <p>
                  Recognize that behaviour is functional and yes dogs can and do
                  make conscious choices about what behaviour to do when based
                  on historical outcomes. However, just like in people, a dog is
                  not always making a choice to perform certain behaviours when
                  they are experiencing an emotional state of panic and truly
                  believe their life may be in danger (even if we know that it's
                  not). Understanding that a dog is not choosing to behave the
                  way they do when filled with fear or anxiety is key to helping
                  them change their feelings and also their behaviour in the
                  long term.
                </p>
              </LeftContent>
            </AggressionLeft>
            <AggressionRight>
              <img src="../img/aggression.jpeg" alt="" />
            </AggressionRight>
          </AggressionSection>

          {/* Plan Section */}

          <PlanSection>
            <PlanCards>
              <Card>
                <h2>Assess</h2>
                <p>
                  A private consult is a place to start if you are seeing
                  consistent signs of fear from Fido with or without signs of
                  aggression. The trainer will observe and collection
                  information to make a holistic plan including recommending the
                  ideal training format to help you both.
                </p>
              </Card>
              <GoArrowRight className="card-icon-arrow" />
              <Card>
                <h2>Plan</h2>
                <p>
                  Book in and get prepared to start the program that was
                  recommended by the trainer following your private
                  consultation. It will be one of the following programs:
                  <span>Group Training</span>
                  <span>Day Training</span>
                  <span>One-on-One Training</span>
                </p>
              </Card>
              <GoArrowRight className="card-icon-arrow" />

              <Card>
                <h2>Implement</h2>
                <p>
                  <span>Start your program!</span>
                </p>
                <p>
                  Step by step, we will work toward established goals. We'll
                  troubleshoot any issues that arise, make adjustments as
                  needed, and sharpen your overall training skills.
                </p>
              </Card>
            </PlanCards>
          </PlanSection>

          {/* Banner Quote Section */}

          {/* Book Now Section */}
          <SectionBookNow />

          {/* Banner Section */}
          <SectionBanner2></SectionBanner2>
        </Wrap>
      </Container>
    </>
  );
};

export default Behaviour;

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

const BehaviourHeader = styled.header`
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
  position: relative;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Intro Section

const IntroSection = styled.section`
  width: 100%;
  height: 1400px;
  display: flex;
  background-color: rgb(209, 232, 226);
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const IntroLeft = styled.div`
  width: 50%;
  height: 100%;

  background-image: url("../img/behaviour-intro.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RightContent = styled.div`
  width: 75%;

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
    line-height: normal;
  }

  h4 {
    color: rgb(255, 203, 154);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 1);
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
    padding-top: 15px;
  }
`;

const IntroRight = styled.div`
  width: 60%;
  height: 100%;
  padding: 60px 80px 40px;
`;

const ExamplesWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
  min-height: 100%;
  /* height: 700px; */

  h5 {
    color: rgb(255, 203, 154);
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const ExampleCardLeft = styled.div`
  background-color: rgb(17, 100, 102);
  width: 45%;
  border: 2px solid rgba(44, 53, 49, 1);
  padding: 20px;
  /* height: 700px; */
  min-height: fit-content;

  ul {
    /* margin: 0 auto; */
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 100%; */
    /* min-height: fit-content; */

    li {
      font-size: 1.3rem;
      color: rgb(209, 232, 226);
      line-height: 1.7;
    }
  }
`;

const ExampleCardRight = styled(ExampleCardLeft)`
  background-color: rgb(53, 65, 59);

  .inner-ul li {
    line-height: normal;
  }
`;

// Aggression Section

const AggressionSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgb(209, 232, 226);
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const AggressionLeft = styled.div`
  width: 60%;
  height: 100%;

  h3 {
    color: rgb(17, 100, 102);
    font-size: 3.5rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
  }

  p {
    color: rgb(53, 65, 59);
    letter-spacing: 0.5px;
    font-size: 1.3rem;
    line-height: normal;
  }

  h4 {
    color: rgb(255, 203, 154);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 1);
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
    padding-top: 15px;
  }
`;

const LeftContent = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 60px 0 0;
`;

const AggressionRight = styled.div`
  width: 40%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    padding-bottom: 10px;

    span {
      font-style: italic;
      display: block;
      color: rgb(17, 100, 102);
      padding-top: 10px;
    }
  }
`;

// Banner Section

const SectionBanner2 = styled.section`
  height: 400px;
  width: 100vw;
  background-image: url("../img/banner-3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
`;
