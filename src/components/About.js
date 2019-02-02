import React from 'react';
import { Mono, TitleWrapper, Background, Image } from '../styles/style'
import RubyLogo from '../images/rubylogo.png'

const About = () => (
  <Background>
    <TitleWrapper>
      <Mono>Dev Point Labs Alumni</Mono>
      <Mono>Junior Fullstack Ruby on Rails / React Developer</Mono>
    </TitleWrapper>
    <Image src = {RubyLogo} />
  </Background>
)

export default About