import styled from "styled-components";
// icons
import { BiMenuAltLeft } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdClose } from "react-icons/md";

// Components
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
// Components
const Container = styled.div`
  min-height: 5.8rem;
`;

const CustomSidebar = styled.div``;
const Logo = styled.div``;
const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;

const NavItems = styled.div``;
const NavItem = styled.span`
  :hover {
    cursor: pointer;
    color: red;
  }
`;
const NavIcons = styled.div``;
const SidebarCloseContainer = styled.div``;
const SidebarWrapper = styled.div`
  top: 0;
  left: 0;
`;
const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <Container className="flex justify-between items-center mx-5">
      <CustomSidebar className="md:hidden flex">
        <BiMenuAltLeft
          fontSize={35}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(true)}
        />
      </CustomSidebar>
      <Logo>
        <Link to="/">
          <LogoText className="text-center">Craves</LogoText>
        </Link>
      </Logo>
      <NavItems className="md:flex hidden items-center text-center">
        <NavItem className="md:mr-8 mr-5">STORE</NavItem>
        <NavItem className="md:mr-8 mr-5">COLLECTION</NavItem>
        <NavItem className="md:mr-8 mr-5">CATEGORIES</NavItem>
        <NavItem className="md:mr-8 mr-5">BLOG</NavItem>
        <NavItem className="mr-5">ABOUT US</NavItem>
      </NavItems>
      <NavIcons className="flex items-center cursor-pointer justify-center">
        <BsSearch className="mr-4 text-2xl" />
        <BsHeart className="mr-4 text-2xl" />
        <BsCart2 className="mr-4 text-2xl" />
        <BsPerson className="text-2xl" />
      </NavIcons>
      {toggleSidebar && (
        <SidebarWrapper className="fixed flex w-2/4 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <SidebarCloseContainer className="absolute w-full flex justify-end items-center p-2">
            <MdClose
              fontSize={30}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(false)}
            />
          </SidebarCloseContainer>
          <Sidebar closeToggle={setToggleSidebar} />
        </SidebarWrapper>
      )}
    </Container>
  );
};

export default Navbar;
