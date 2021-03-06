import { Mono, TitleWrapper, Background, Image } from '../styles/style'
import React from 'react';
import JoePic from '../images/JOE_FERRO_DPL.jpg';
import Particle from './Particle';
 
class Home extends React.Component{
  
    render(){
        return (
          <Background>
            <Particle />
            <TitleWrapper>
              <Mono>Joe Ferro</Mono>
              <Mono>Junior Web Developer</Mono>
            </TitleWrapper>
            <Image src = {JoePic}/>
          </Background>
        );
    };
}

export default Home;