import Hero from "../components/Hero";
import styled from "styled-components";
import SectionsStages from "../components/SectionsStages";

function Home() {
  return (
    <>
      <Hero />

      <main>
        {/* Intro Section */}
        <SectionIntro>
          <IntroLeft></IntroLeft>
          <IntroRight>
            <IntroWrap>
              <h2>The New Standard for Dog Training</h2>
              <h3>Quality Instruction from Leading Behaviour Experts</h3>
              <div></div>
              <p>
                We specialize in puppy and adolescent dog development. Our
                programs and activities are expertly designed to provide you and
                Fido with an unmatched level of support and confidence to help
                navigate these important life stages. We'll teach you how to
                motivate your dog using effective reward-based training
                principles to build behaviour you desire.
              </p>
            </IntroWrap>
          </IntroRight>
        </SectionIntro>

        {/* Results Section */}
        <SectionResults>
          <ResultsLeft className="wrapper">
            <ResultsWrap>
              <h2>Puppy Power</h2>
              <h3>Dog Training That Gets Lasting Results</h3>
              <p>
                Our modern reward-based puppy and adolescent dog training
                programs help your pup develop lasting desirable habits in a
                safe and encouraging setting.
              </p>
              <p>
                Backed by knowledge of the latest scientific findings, a
                world-class formal education, and credible certifications,
                K9PAWS Dog Training provides specially designed training
                programs to help Fido grow up to be the best version of
                themselves.
              </p>
              <p>
                Throughout our puppy and adolescent (teen) training classes
                you'll experience the benefits that positive reinforcement
                techniques offer including trust building, clear communication,
                high motivation to train, increased confidence and sociability,
                all while establishing good habits for life.
              </p>
            </ResultsWrap>
          </ResultsLeft>
          <ResultsRight></ResultsRight>
        </SectionResults>

        {/* Methods Section */}
        <SectionMethods>
          <MethodsWrap className="wrapper">
            <h2>Why Choose Reward-Based Training Methods?</h2>
            <MethodsCards>
              <Method>
                <h3>Encourages Healthy Behaviour Development</h3>
                <p>
                  By teaching key habits and behaviours early on you increase
                  the likelihood of raising a well-adjusted and confident dog
                  who loves going anywhere with you.
                </p>
              </Method>
              <Method>
                <h3>Evidence-Based, Results-Driven.</h3>
                <p>
                  Your dog is more likely to repeat a behaviour when they
                  anticipate a pleasant outcome for themselves, whether you like
                  that behaviour or not.
                </p>
              </Method>
              <Method>
                <h3>Reduces Problematic Behaviours</h3>
                <p>
                  Dogs enjoy it! Decrease the risk of creating or exacerbating
                  stress while increasing your dog's enthusiasm and joy for
                  learning alongside you.
                </p>
              </Method>
              <Method>
                <h3>Increased Socialization Skills</h3>
                <p>
                  Reward-based socialization training with play can help Fido
                  feel optimistic and build confidence while experiencing new
                  things and practicing interaction skills.
                </p>
              </Method>
              <Method>
                <h3>Encourages Healthy Behaviour Development</h3>
                <p>
                  By teaching key habits and behaviours early on you increase
                  the likelihood of raising a well-adjusted and confident dog
                  who loves going anywhere with you.
                </p>
              </Method>
            </MethodsCards>
          </MethodsWrap>
        </SectionMethods>

        {/* Development Stages Section */}
        <SectionsStages />
      </main>
    </>
  );
}

export default Home;

const SectionIntro = styled.section`
  height: auto;
  position: relative;
  z-index: -2;
  display: flex;
  width: 100%;
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

const IntroLeft = styled.div`
  background-image: url("../img/intro-bg.jpeg");
  background-position: center;
  background-size: cover;
  z-index: -2;
  width: 45%;
`;

const IntroRight = styled.div`
  width: 55%;
  padding: 60px 0 60px 60px;
  background-color: rgb(44, 53, 49);
`;

const IntroWrap = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 4rem;
    color: #d1e8e2;
    padding: 20px 0;
  }

  h3 {
    text-transform: uppercase;
    color: rgb(17, 100, 102);
  }

  p {
    color: rgb(255, 203, 154);
    font-size: 1.4rem;
    padding: 20px 0;
  }
`;

// Results Section

const SectionResults = styled.section`
  height: auto;

  background-size: contain;
  background-repeat: no-repeat;
  /* background-position: 120%; */
  position: relative;
  width: 100%;
  /* width: 100%; */
  display: flex;
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

const ResultsRight = styled.div`
  width: 45%;
  /* height: 100%; */
  background-image: url("../img/results-bg.jpeg");
  background-position: center;
  background-size: cover;
  z-index: -2;
`;

const ResultsLeft = styled.div`
  width: 55%;
  display: flex;
  position: relative;
  /* padding: 30px 0 30px 60px; */
  margin-left: 10%;
`;

const ResultsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 60px;

  h2 {
    color: rgb(17, 100, 102);
    font-size: 4rem;
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
    letter-spacing: 0.8px;
  }
`;

// Reward-Based Methods Section

const SectionMethods = styled.section`
  /* height: 600px; */
  height: auto;
  width: 100%;
  padding-bottom: 40px;
  background-color: #e2e2e2;
  background-image: url("../img/methods-bg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(209, 232, 226, 0.7);
  }

  h2 {
    text-align: center;
    padding: 40px 0;
    color: rgb(17, 100, 102);
    font-size: 4rem;
    /* text-shadow: 0 0 2px rgba(44, 53, 49, 1); */
  }
`;

const MethodsWrap = styled.div``;

const MethodsCards = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Method = styled.div`
  width: 30%;
  border: 2px solid rgb(17, 100, 102);
  padding: 20px;
  text-align: center;
  background-color: rgba(44, 53, 49, 0.7);
  border-radius: 5px;

  h3 {
    color: rgb(255, 203, 154);

    line-height: 1.2;
    font-size: 1.5rem;
    padding: 10px 0 20px;
  }

  p {
    font-size: 1.2rem;
    color: rgb(209, 232, 226);
    letter-spacing: 0.8px;
    font-weight: 500;
  }
`;
