import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class ProjectGrid extends React.Component {
  render () {
    return (
      <Grid style = {{position: 'absolute'}}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProjectGrid;