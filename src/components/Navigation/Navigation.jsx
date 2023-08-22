import React, { useState, useEffect } from 'react';
import { Wrapper, BurgerIcon } from './Navigation.styled';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import BurgerMenu from '../BurgerMenu/Burger';
import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from '../../constants/colors';
// import UserNav from '../UserNav/UserNav';
// import LogOut from '../UserNav/LogOut/LogOut';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 767 && window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      setIsTablet(windowWidth > 767 && windowWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Nav />
      {!isMobile && <AuthNav />}
      
      {/* ДЛЯ АВТОРИЗОВАНОГО КОРИСТУВАЧА */}
      {/* {!isMobile && <UserNav  isMenuOpen={isMenuOpen} />} */}
      <BurgerIcon onClick={toggleMenu}>
        {isMenuOpen ? (
          <SvgIcon id={'icon-cross-small'} color={colors.accentColor}/>
        ) : (
          <SvgIcon id={'icon-menu-hamburger'} color={colors.accentColor}/>
        )}
      </BurgerIcon>
      <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu}>
        {!isTablet && <AuthNav />}

        {/* ДЛЯ АВТОРИЗОВАНОГО КОРИСТУВАЧА */}
        {/* {!isTablet && <UserNav isMenuOpen={isMenuOpen}/>}  */}
        <Nav isMenuOpen={isMenuOpen}/>

        {/* ДЛЯ АВТОРИЗОВАНОГО КОРИСТУВАЧА */}
        {/* <LogOut onClick={() => {}} isMenuOpen={!isMenuOpen} /> */}
      </BurgerMenu>
    </Wrapper>
  );
}
