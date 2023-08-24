import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, BurgerIcon } from './Navigation.styled';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import BurgerMenu from '../BurgerMenu/Burger';
import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from '../../constants/colors';
import UserNav from '../UserNav/UserNav';
import LogOut from '../UserNav/LogOut/LogOut';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 767 && window.innerWidth <= 1280
  );

  // const isAuth = useSelector(state => state.auth.isLoggedIn);
  const isAuth = true;

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      setIsTablet(windowWidth > 767 && windowWidth <= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIcon = isOpen => {
    return isOpen ? (
      <SvgIcon id={'icon-cross-small'} color={colors.accentColor} />
    ) : (
      <SvgIcon id={'icon-menu-hamburger'} color={colors.accentColor} />
    );
  };

  return (
    <Wrapper>
      <Nav />
      {isAuth
        ? !isMobile && <UserNav isMenuOpen={isMenuOpen} />
        : !isMobile && <AuthNav />}
      <BurgerIcon onClick={toggleMenu}>{toggleIcon(isMenuOpen)}</BurgerIcon>
      <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu}>
        {isAuth
          ? !isTablet && <UserNav isMenuOpen={isMenuOpen} />
          : !isTablet && <AuthNav />}
        <Nav isMenuOpen={isMenuOpen} />
        {isAuth && <LogOut onClick={() => {}} isMenuOpen={!isMenuOpen} />}
      </BurgerMenu>
    </Wrapper>
  );
}
