import styled from "styled-components";
import Hero from "../../components/Hero/Hero";

// Components

// Styles
const Container = styled.section`
  height: 100%;
`;

const Home = (props) => {
  return (
    <Container className="">
      <Hero />
    </Container>
  );
};

export default Home;
