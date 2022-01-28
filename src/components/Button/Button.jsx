import styled from "styled-components";

// Icon
import { BsArrowRight } from "react-icons/bs";
const Container = styled.div``;
const BorderedContainer = styled.div``;
const ButtonText = styled.span`
  transition: all 0.3s ease-in-out;
`;
const Button = ({ text, type }) => {
  if (type === "bordered") {
    return (
      <BorderedContainer className="cursor-pointer border-2 px-4 py-3 md:px-10 md:py-5 border-slate-800">
        <ButtonText className="flex items-center hover:translate-x-0.5 hover:text-gray-700">
          {text}
          <BsArrowRight className="ml-3 " />
        </ButtonText>
      </BorderedContainer>
    );
  }
  if (type === "filled") {
    return (
      <Container className="flex justify-center items-center">
        <ButtonText className="text-white text-lg">{text}</ButtonText>
      </Container>
    );
  }
  return (
    <Container>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default Button;
