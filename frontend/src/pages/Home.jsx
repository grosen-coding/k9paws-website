import Logo from "../components/Logo";

function Home() {
  return (
    <>
      <div className="main wrapper">
        <div className="heading-container">
          <div className="heading-primary">
            <Logo />
            <h2 className="heading-primary--sub">
              Your canine education portal
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
