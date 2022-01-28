import styled from "styled-components";
import Button from "../Button/Button";

const Container = styled.div`
  max-width: 100%;
  background-image: url("https://cdn.shopify.com/s/files/1/0328/0961/5495/files/slide1_bbf97104-9367-4953-b6c5-22e773684299_1950x.jpg?v=1610513372");
  background-size: cover;
`;
const Wrapper = styled.div``;
const Description = styled.div`
  @media (max-width: 1020px) {
    top: 30%;
    right: 50%;
  }
`;
const Title = styled.span`
  font-size: 1.2rem;
  @media (max-width: 1020px) {
    font-size: 1rem;
  }
`;
const Subtitle = styled.span`
  font-size: 3rem;
  font-weight: 500;
  @media (max-width: 1020px) {
    font-size: 2rem;
  }
`;
const Hero = () => {
  return (
    <Container className="w-full lg:h-600 h-64 ">
      <Wrapper className="flex h-full items-center w-full ml-20 md:ml-24">
        <Description className="flex items-start flex-col">
          <Title className="mb-5">HOT PRODUCT</Title>
          <Subtitle className="text-secColor mb-3 ">Koppel 22cm</Subtitle>
          <Subtitle className="text-secColor mb-5"> Wall Clock</Subtitle>
          <Button text="SHOP NOW" type="bordered" />
        </Description>
      </Wrapper>
    </Container>
  );
};

export default Hero;
