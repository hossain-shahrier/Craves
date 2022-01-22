import styled from "styled-components";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";


const Container = styled.div`
  min-height: 9rem;
`;

const Header = () => {
  return (
    <Container>
      <Banner />
      <Navbar />
    </Container>
  );
};

export default Header;
