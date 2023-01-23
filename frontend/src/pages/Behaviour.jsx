import React from "react";
import styled from "styled-components";

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
  height: 100%;
  display: flex;
  background-color: rgb(209, 232, 226);
`;

const IntroLeft = styled.div`
  width: 50%;
  height: 100%;

  background-image: url("../img/behaviour-intro.jpeg");
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
  height: 100%;
`;

const ExampleCardLeft = styled.div`
  background-color: rgb(17, 100, 102);
  width: 45%;
  border: 2px solid rgba(44, 53, 49, 1);
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;

  min-height: 700px;

  ul {
    /* margin: 0 auto; */
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    li {
      font-size: 1.3rem;
      color: rgb(209, 232, 226);
      /* line-height: 1.5; */
    }
  }

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

const ExampleCardRight = styled.div`
  background-color: rgb(53, 65, 59);
  width: 45%;
  border: 2px solid rgba(44, 53, 49, 1);
  padding: 20px;

  ul {
    margin: 0 auto;
    padding-left: 15px;
    height: 100%;

    .inner-ul {
      /* line-height: normal; */
    }

    li {
      font-size: 1.3rem;
      color: rgb(209, 232, 226);
    }
  }

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
