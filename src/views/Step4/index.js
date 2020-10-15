import React, { Component } from 'react'
import { Divider, Grid, Segment, Form, Header } from 'semantic-ui-react'


class Pane4 extends Component {

  I5C_handleChange = (e) => {
    this.props.I5C_change(e.target.value);
}

  
  render() {

    const square = { width: 300, height: 300 }
    const smallSquare = { width: 200, height: 200 }
    
      return (
  <div className="margins">

    <h1>Step 4: Estimated total cost of ownership</h1>
    <p>Please insert your inputs in the boxes as they apply.</p>

    <Grid stackable verticalAlign='middle' columns ='equal'>
    <Grid.Row stretched>

    <Grid.Column>

    <Divider section />
      
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
            <h4>${this.props.Annual_tip_cost}</h4>
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
                    value={this.props.I5C} 
                    onChange={this.I5C_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
          <h4>Total 1st year cost of ownership</h4>
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
            <h2>${this.props.Total_annual_cost}</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>

{/* 
    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
        <Divider section />
        </Grid.Column>
      </Grid.Row>
    </Grid>
       */}

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='left'>
            <Segment inverted color='blue'>
                <h2>5 year</h2>
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
            <h4>${this.props.Annual_tip_cost * 5}</h4>
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
                    value={this.props.I5C} 
                    onChange={this.I5C_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
          <h4>Estimated total 5 year cost of ownership</h4>
        </Grid.Column>
        <Grid.Column floated='right' width={3}>
            <h2>${(this.props.Annual_tip_cost * 5) + this.props.I5C * 1}</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    {/* <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='left'>
            <Segment.Group horizontal>
              <Segment textAlign='center' inverted padded='very' color='blue'>
                  <h2>{Math.round(((this.props.Annual_tip_cost * 5) + this.props.I5C * 1) / (this.props.Total_savings_increase / 12) * 10) / 10}</h2>
                  <p>Payback period on 5 year total cost (in months)</p>
              </Segment>
              <Segment textAlign='center' inverted padded='very' color='blue'>
                  <h2>${(this.props.Total_savings_increase * 5) - ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1)}</h2>
                  <p>5 year net profit</p>
              </Segment>
              <Segment textAlign='center' inverted padded='very' color='blue'>
                  <h2>{Math.round(((this.props.Total_savings_increase * 5) - ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1))
                   / 
                   ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1)
                   *
                   100)}%</h2>
                   <p>5 year return on investment (ROI)</p>
              </Segment>
            </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      </Grid> */}

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column>
              <Segment textAlign='center' inverted padded='very' color='blue'>
                  <h2>{Math.round(((this.props.Annual_tip_cost * 5) + this.props.I5C * 1) / (this.props.Total_savings_increase / 12) * 10) / 10}</h2>
                  <p>Payback period on 5 year total cost (in months)</p>
              </Segment>        
        </Grid.Column>
        <Grid.Column>
              <Segment textAlign='center' inverted padded='very' color='blue'>
                  <h2>${(this.props.Total_savings_increase * 5) - ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1)}</h2>
                  <p>5 year net profit</p>
              </Segment>        
        </Grid.Column>
        <Grid.Column>
              <Segment textAlign='center' inverted padded='very' color='blue'>
                  <h2>{Math.round(((this.props.Total_savings_increase * 5) - ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1))
                   / 
                   ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1)
                   *
                   100)}%</h2>
                   <p>5 year return on investment (ROI)</p>
              </Segment>        
        </Grid.Column>
      </Grid.Row>
    </Grid>



    {/* <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right' floated='right'>
        <Divider section />
        </Grid.Column>
      </Grid.Row>
    </Grid> */}




    </Grid.Column>

    <Grid.Column width={5}>
      <div>
    <Segment circular inverted color='blue' style={square}>
      <Header as='h2' inverted >
      ${this.props.Total_savings_increase}
        <Header.Subheader>Total projected 1 year savings and increased production</Header.Subheader>
      </Header>
      <Header as='h2' inverted >
      ${Math.round(this.props.Total_savings_increase / 12)}
        <Header.Subheader>Per month</Header.Subheader>
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
