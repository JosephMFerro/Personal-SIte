import styled from 'styled-components'

export const Mono = styled.p`
  font-size: ${props => props.large ? '30px' : props.small ? '10px' : '18px' };
  font-family: monospace;
`;

export const TitleWrapper = styled.div`
  color: white;
  margin-left: 200px;
`;

export const Background = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  height: 70%;
  padding: 60px;
  opacity: 0.5;
`;

export const GridWrapper = styled.div `
  height: 70%;
  width: 60%;
  opacity: 0.5;
  float: right;
  display: inline-block;
`;