// import {Slideshow}  from "../components/Slideshow"
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Wrap>
        <AboutHeader>
          <HeaderLeft>
            <img src="../img/about-header.jpeg" alt="" />
          </HeaderLeft>

          <HeaderRight>
            <h2>About K9PAWS</h2>
            <h3>Hi! I'm Greg, Head of Behaviour & Development at K9PAWS.</h3>
            <p>
              My knowledge and skills in dog training, behaviour, and client
              counselling have been obtained via first class industry education
              and hands-on experience since 2010. I possess multiple
              certifications that attest to my passion for proficient
              reward-based training methods that are backed by scientific
              evidence. I founded the <span>PET REST</span> training method
              through intense, immersive pack hierarchy training. I operate
              K9PAWS Canine Behaviour & Training Centre in accordance with
              CAPPDT's Code of Conduct, which you can find{" "}
              <a href="https://capdt.ca/" target="_blank" rel="noreferrer">
                here.
              </a>
            </p>
            <h3>Greg Rose, CPDT-KA, CTC, CTDI</h3>
          </HeaderRight>
        </AboutHeader>
        <AboutIntro>
          <AboutIntroContent className="wrapper">
            <p>
              K9PAWS Dog Training exists to support clients and fidos learn how
              to confidently navigate puppyhood and adolescence so they can
              experience an enjoyable life together long term. We teach people
              how they can establish and maintain a high standard of welfare in
              all aspects of their dog's life based on individual needs and
              wants.
            </p>
            <p>
              Our commitment to clients and their dogs is to work honestly
              everyday with integrity and compassion. We promise to fervently
              deliver training programs and coaching that you can always trust
              to be in line with what the latest scientific evidence suggests is
              the most welfare-focused approach for raising a well-adjusted
              companion dog.
            </p>
          </AboutIntroContent>
        </AboutIntro>
        <AboutSection>
          <AboutLeft>
            <p>
              When it comes to relationship-building with your dog, the
              adolescence phase is a very vulnerable time. Statistics show that
              this development period corresponds with the peak age range at
              which dogs are relinquished to shelters
              <span>(Asher et al. 2020)</span>.
            </p>
            <p>
              Our mission is to actively combat this statistic by focusing most
              of our programs on puppy and adolescent development. We provide
              services to the community featuring opportunities for people to
              expand their knowledge and understanding of their dog's behaviour
              while strengthening their training "chops" with expert advice and
              coaching by qualified professionals.
            </p>
          </AboutLeft>
          <AboutRight>
            <img src="../img/about-section-1.jpeg" alt="" />
          </AboutRight>
        </AboutSection>
        <AboutMiddle>
          <AboutMiddleContent className="wrapper">
            <p>
              K9PAWS Dog Training exists to support clients and fidos learn how
              to confidently navigate puppyhood and adolescence so they can
              experience an enjoyable life together long term. We teach people
              how they can establish and maintain a high standard of welfare in
              all aspects of their dog's life based on individual needs and
              wants.
            </p>
            <p>
              Our commitment to clients and their dogs is to work honestly
              everyday with integrity and compassion. We promise to fervently
              deliver training programs and coaching that you can always trust
              to be in line with what the latest scientific evidence suggests is
              the most welfare-focused approach for raising a well-adjusted
              companion dog.
            </p>
          </AboutMiddleContent>
        </AboutMiddle>

        <AboutBottom>
          <AboutBottomContent>
            <BottomLeft>
              <img src="../img/about-bottom.jpeg" alt="" />
            </BottomLeft>

            <BottomRight>
              <p>
                Training can and should be enjoyable for everyone without adding
                stress or sacrificing progress. We fully support and are
                practitioners of modern training methods backed by scientific
                data. We do not deliberately employ the use of aversive training
                techniques in order to change behaviour.
              </p>
              <p>
                Knowingly causing pain or discomfort, purposefully generating
                fear, or attempting to intimidate your dog so that they will
                avoid doing a behaviour in the future out of fear for what might
                happen to them is not our style. We focus on teaching you how to
                help your dog learn what desirable behaviours they can do
                instead plus when and where to do them.
              </p>
              <p>
                We do not support the use of aversive tools such as shock
                collars, e-collars, bark collars, slip leads, prong collars,
                choke chains, or incorrectly fitted martingale collars.
                Techniques like flooding, "alpha rolling", and physical or harsh
                verbal corrections are not only unnecessary but according to a
                substantial amount of data, risks irreparable long term harm to
                your dog. We are committed to do no harm via the use of humane
                training methods while helping you build good behavioural habits
                in your developing dog.
              </p>
              <p>
                No matter what methods you may have used in the past, our
                training centre is a safe space for anyone wanting to learn how
                to effectively train their dog in a way they feel good about
                that produces long term results and is in line with the science
                behind humane dog training.
              </p>

              <TradeDiv>
                We feel so strongly that our training approach gets long term
                results with the lowest risk of negative side effects that any
                new clients who wish to learn from us and trades in a shock
                collar, e-collar, bark collar, electric fence system, prong
                collar, or choke chain will receive up to 15% off the first
                training service purchased.
              </TradeDiv>
            </BottomRight>
          </AboutBottomContent>
        </AboutBottom>
        <Banner>
          <img src="../img/banner-2.jpeg" alt="" />
        </Banner>
      </Wrap>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 100%;
  height: auto;
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

// About HEADER
const AboutHeader = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  border-bottom: 5px solid rgb(44, 53, 49);

  /* padding: 30px; */
`;

const HeaderLeft = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  left: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderRight = styled.div`
  width: 60%;
  position: absolute;
  background-color: rgb(17, 100, 102);
  padding: 120px;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);

  h2 {
    color: rgb(255, 203, 154);
    /* text-transform: uppercase; */
    font-weight: 400;
    letter-spacing: 1.8px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 1);

    font-size: 3.5rem;
  }

  h3 {
    color: rgb(209, 232, 226);
    padding: 25px 0;
    font-weight: 600;
  }

  p {
    color: rgba(209, 232, 226, 0.8);
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  }

  a {
    display: inline;
  }
`;

// About CONTENT

const AboutIntro = styled.section`
  background-color: #e2e2e2;
  width: 100%;
  height: auto;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const AboutIntroContent = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;

  p {
    color: rgba(44, 53, 49, 1);
    font-size: 1.3rem;
    padding: 20px 0;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;

// About Sections

const AboutSection = styled.section`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  width: 100%;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const AboutLeft = styled.div`
  width: 60%;
  position: absolute;
  background-color: rgb(17, 100, 102);
  padding: 120px;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);

  span {
    font-size: 1.2rem;
    font-style: italic;
  }

  p {
    color: rgba(209, 232, 226, 0.8);
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    padding: 20px 0;
  }
`;

const AboutRight = styled.div`
  width: 60%;
  height: auto;
  /* position: relative; */
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// About Middle Section

const AboutMiddle = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: auto;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const AboutMiddleContent = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;

  p {
    color: rgba(44, 53, 49, 1);
    font-size: 1.3rem;
    padding: 20px 0;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;

// About Bottom SECTION

const AboutBottom = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 5px solid rgb(44, 53, 49);
`;

const AboutBottomContent = styled.div`
  display: flex;
  width: 100%;
`;

const BottomLeft = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BottomRight = styled.div`
  width: 50%;
  padding: 120px;

  p {
    color: rgba(209, 232, 226, 0.8);
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    padding: 20px 0;
  }
`;

const TradeDiv = styled.div`
  margin-top: 55px;
  background-color: rgb(17, 100, 102);

  color: rgb(255, 203, 154);
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 20px;
`;

// Banner

const Banner = styled.div`
  height: 300px;
  width: 100%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* z-index: -1; */
    background-color: rgba(209, 232, 226, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
