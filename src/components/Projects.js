import React from 'react';
import { Background, TitleWrapper, Mono, GridWrapper } from '../styles/style';
import ProjectGrid from './ProjectGrid';

const Projects = () => (
  <Background>
    <TitleWrapper>
      <Mono>Projects</Mono>
    </TitleWrapper>
    <ProjectGrid />
  </Background>
)

export default Projects;