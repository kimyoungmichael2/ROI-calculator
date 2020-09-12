import React from 'react'
import { Grid, Segment, Conatiner } from 'semantic-ui-react'

const Pane1 = () => (
    <div>
  <Grid stackable columns='equal'>
  <Grid.Row stretched>
      <Grid.Column textAlign='right'>
        <container></container>
        <h4>Crown &amp; bridge restorations</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Annual procedures</h4>
        <h4></h4>
        <h4></h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Average patient fee</h4>
        <h4>2</h4>
        <h4>3</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Annual production</h4>
        <h4>2</h4>
        <h4>3</h4>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Segment>Approximate annual production</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default Pane1
