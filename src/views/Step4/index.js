import React, { Component } from 'react'
import { Grid, Segment, Form, Header } from 'semantic-ui-react'


class Pane4 extends Component {
  
  render() {

    const square = { width: 225, height: 225 }
    
      return (
  <div>
    <Grid stackable verticalAlign='middle' columns ='equal'>
    <Grid.Row stretched>

    <Grid.Column>
      
    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='left'>
            <Segment inverted color='blue'>
                <h2>1 year</h2>
            </Segment>
        </Grid.Column>
      </Grid.Row>
      </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
          <h4>Medit scanner tips</h4>
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
            <h4>(# of procedures/year) / 50 * 240 </h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
          <h4>Medit i500 scanner</h4>
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.CB_AV} 
                    onChange={this.CB_AV_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
          <h4>Medit scanner tips</h4>
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
            <h4>(# of procedures/year) / 50 * 240 </h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
          <h4>Medit scanner tips</h4>
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
            <h4>(# of procedures/year) / 50 * 240 </h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>



    </Grid.Column>

    <Grid.Column width={5}>
      <div>
    <Segment circular inverted color='blue' style={square}>
      <Header as='h2' inverted >
      ${this.props.Total_Increase}
        <Header.Subheader>Total projected annual increase in production</Header.Subheader>
      </Header>
      <Header as='h2' inverted >
      ${Math.round(this.props.Total_Increase / 12)}
        <Header.Subheader>Average monthly increased production</Header.Subheader>
      </Header>
    </Segment>
    </div>
    </Grid.Column>

    </Grid.Row>
    </Grid>
  </div>
        )
      }
  }

export default Pane4
