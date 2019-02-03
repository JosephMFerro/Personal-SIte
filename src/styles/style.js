import styled from 'styled-components'

export const Mono = styled.p`
  font-size: ${props => props.large ? '30px' : props.small ? '10px' : '18px' };
  font-family: monospace;
`;

export const TitleWrapper = styled.div`
  color: #3d9970;
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
  width: 30%;
  height: auto;
  padding: 60px;
  opacity: 0.6;
  z-index: 3;
`;

export const GridWrapper = styled.div `
  height: 300px;
  width: 300px;
  opacity: 0.5;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px;
`;