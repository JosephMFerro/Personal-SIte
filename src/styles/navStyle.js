import styled from 'styled-components';

export const NavDiv = styled.div `
  height: 100%; 
  width: 160px;
  position: fixed; 
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #245b43;
  overflow-x: hidden; 
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: monospace;
  font-size: 18px;
  color: #818181;
  color: #d8eae2  !important;
  display: block;
  padding: 10px;
`;

export const LinkDiv = styled.div`
  margin: auto;
`;
