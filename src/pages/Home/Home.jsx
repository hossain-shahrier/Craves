import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";

// Components

// Styles
const Container = styled.section`
  height: 100%;
`;
const CustomSidebar = styled.div``;


const Home = (props) => {

  return (
    <Container className="bg-red-200">
      <CustomSidebar className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </CustomSidebar>
      <CustomSidebar>
        
      </CustomSidebar>
    </Container>
  );
};

export default Home;
