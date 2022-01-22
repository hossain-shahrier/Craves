import styled from "styled-components";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { AiOutlineCaretDown } from "react-icons/ai";
const Container = styled.div`
  min-height: 3.2rem;
`;
const Wrapper = styled.div`
  flex: 1;
`;
// Business Info
const BusinessInfo = styled.div``;
const Phone = styled.div``;
const PhoneText = styled.span``;
const Email = styled.div``;
const EmailText = styled.span``;
// Language
const Language = styled.div`
  width: 10%;
`;
const LanguageText = styled.span``;
const Banner = () => {
  return (
    <Container className="bg-bannerColor text-white flex ">
      <Wrapper className="mx-4 flex items-center justify-center lg:justify-between">
        <BusinessInfo className="flex">
          <Phone className="flex mr-6">
            <FiPhone className="mr-1" />
            <PhoneText>+8801718295833</PhoneText>
          </Phone>
          <Email className="flex">
            <AiOutlineMail className="mr-1" />
            <EmailText className="cursor-pointer">
              <a href="mailto:info@craves.com?subject=Solution">
                info@craves.com
              </a>
            </EmailText>
          </Email>
        </BusinessInfo>

        <Language className="lg:flex items-center hidden">
          <LanguageText className="text-center mr-1">English</LanguageText>
          <AiOutlineCaretDown />
        </Language>
      </Wrapper>
    </Container>
  );
};

export default Banner;
