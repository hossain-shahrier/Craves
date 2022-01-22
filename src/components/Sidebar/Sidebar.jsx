import styled from "styled-components";
import { Link } from "react-router-dom";
// icons
import { BiStore } from "react-icons/bi";
import { BiCollection } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

const Container = styled.div`
  z-index: 999;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const SidebarMenuContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const SidebarMenu = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  :hover {
    cursor: pointer;
    color: red;
  }
`;
const SidebarMenuText = styled.span``;
const SidebarProfile = styled.div``;
const SidebarFooter = styled.div``;
// Business Info
const BusinessInfo = styled.div``;
const Phone = styled.div``;
const PhoneText = styled.span``;
const Email = styled.div``;
const EmailText = styled.span``;

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <Container className="flex md:hidden justify-between bg-white h-full min-w-210 hide-scrollbar">
      <Wrapper className="flex justify-between flex-col m-6">
        <Link to="/" className=" text-3xl" onClick={() => handleCloseSidebar()}>
          Craves
        </Link>
        <SidebarMenuContainer className="">
          <span className="text-2xl text-gray-700 font-bold w-full">Menu</span>
          <SidebarMenu className="flex items-center cursor-pointer">
            <BiStore className="mr-2 text-2xl text-gray-700 font-bold" />
            <SidebarMenuText>STORE</SidebarMenuText>
          </SidebarMenu>
          <SidebarMenu className="flex items-center cursor-pointer">
            <BiCollection className="mr-2 text-2xl text-gray-700 font-bold" />
            <SidebarMenuText>COLLECTION</SidebarMenuText>
          </SidebarMenu>
          <SidebarMenu className="flex items-center cursor-pointer">
            <BiCategory className="mr-2 text-2xl text-gray-700 font-bold" />
            <SidebarMenuText>CATEGORIES</SidebarMenuText>
          </SidebarMenu>
          <SidebarMenu className="flex items-center cursor-pointer">
            <BiPencil className="mr-2 text-2xl text-gray-700 font-bold" />
            <SidebarMenuText>BLOG</SidebarMenuText>
          </SidebarMenu>
          <SidebarMenu className="flex items-center cursor-pointer">
            <AiOutlineQuestionCircle className="mr-2 text-2xl text-gray-700 font-bold" />
            <SidebarMenuText>ABOUT US</SidebarMenuText>
          </SidebarMenu>
        </SidebarMenuContainer>
        <SidebarProfile className="flex items-center border-t-2 cursor-pointer. py-3">
          <BsPerson className="mr-2 text-2xl text-gray-700 font-bold" />
          <SidebarMenuText>Login/Register</SidebarMenuText>
        </SidebarProfile>
        <SidebarFooter className="flex flex-col border-t-2 border-b-2 py-3">
          <span className="mb-5 text-gray-700 font-bold">Need help?</span>
          <BusinessInfo className="flex flex-col">
            <Phone className="flex mb-2 text-gray-500">
              <FiPhone className="mr-1" />
              <PhoneText>+8801718295833</PhoneText>
            </Phone>
            <Email className="flex text-gray-500">
              <AiOutlineMail className="mr-1" />
              <EmailText className="cursor-pointer">
                <a href="mailto:info@craves.com?subject=Solution">
                  info@craves.com
                </a>
              </EmailText>
            </Email>
          </BusinessInfo>
        </SidebarFooter>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
