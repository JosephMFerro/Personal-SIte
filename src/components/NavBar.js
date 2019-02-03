import React from 'react';
import { NavDiv, Link, LinkDiv } from '../styles/navStyle';

const NavBar = () => (
  <NavDiv>
    <LinkDiv>
      <Link href = '/'>[] home</Link>
      <Link href = '/about'>[] about</Link>
      <Link href = '/projects'>[] projects</Link>
      <Link href = 'null'>[] languages</Link>
      <Link href = 'null'>[] contact</Link>
    </LinkDiv>
  </NavDiv>
)

export default NavBar;