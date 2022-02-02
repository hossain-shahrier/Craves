import styled from "styled-components";
import Hero from "../../components/Hero/Hero";
import SemiHero from "../../components/SemiHero/SemiHero";

// Components

// Styles
const Container = styled.section`
  height: 100%;
`;

const Home = (props) => {
  return (
    <Container className="">
      <Hero />
      <SemiHero />
    </Container>
  );
};

export default Home;
