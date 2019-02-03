import React from 'react';
import { Image } from 'semantic-ui-react';
import { GridWrapper } from '../styles/style';

class ProjectGrid extends React.Component {
  render () {
    return (
      <GridWrapper>
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </div>
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </div>
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </div>
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </div>
      </GridWrapper>
    )
  }
}

export default ProjectGrid;