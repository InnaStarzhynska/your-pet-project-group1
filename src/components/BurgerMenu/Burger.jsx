import React from 'react';
import {BurgerMenuContainer} from  "./Burger.styled";


export default function BurgerMenu({ isOpen, children }) {
    return (
      <BurgerMenuContainer $isOpen={isOpen}>
        {children}
      </BurgerMenuContainer>
    )
  }