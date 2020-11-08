import React, { Component } from 'react'
import { Divider, Grid, Segment, Form, Header, Button } from 'semantic-ui-react'
import CurrencyFormat from 'react-currency-format';



class Pane4 extends Component {

  I5C_handleChange = (e) => {
    this.props.I5C_change(e.target.value);
}

  handleRangeChange = (e) => {
  this.props.handleRangeChange(e.target.value);
}

  handleTabChange = (e) => {
  this.props.handleTabChange(e.target.value);
}
  render() {

    const square = { width: 300, height: 300 }
    const smallSquare = { width: 200, height: 200 }
    
      return (
  <div className="margins">

    <h2>Step 4: Estimated total cost of ownership</h2>
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
            <h4><CurrencyFormat value={this.props.Annual_tip_cost} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} /></h4>
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
              <CurrencyFormat value={this.props.I5C} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.I5C_change(floatValue);
                }}/>
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
            <h2><CurrencyFormat value={this.props.Total_annual_cost} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} /></h2>
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
            <h4><CurrencyFormat value={this.props.Annual_tip_cost * 5} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} /></h4>
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
              <CurrencyFormat value={this.props.I5C} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.I5C_change(floatValue);
                }}/>
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
            <h2><CurrencyFormat value={(this.props.Annual_tip_cost * 5) + this.props.I5C * 1} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} /></h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider section />

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
                  <h2><CurrencyFormat value={(this.props.Total_savings_increase * 5) - ((this.props.Annual_tip_cost * 5) + this.props.I5C * 1)} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} /></h2>
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


<Divider section />


<p>The calculator will assist you in determining your potential return on investment and total cost of ownership for Medit i500 scanner based on your practice workflow. The benchmarks are based on the average procedures, fees, cost savings for practices in the US market. 
Contact DentCore by calling <a href="tel:844-292-8023">844-292-8023</a> or email us at <a href="mailto:info@dentcore.com"> info@dentcore.com </a>to discuss purchasing. Product details available at <a href="https://www.dentcore.com"target="_blank">https://www.dentcore.com</a>.</p>



    </Grid.Column>

    <Grid.Column width={5}>
      <div>
    <Segment circular inverted color='blue' style={square}>
      <Header as='h2' inverted >
      <CurrencyFormat value={this.props.Total_savings_increase} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Total projected 1 year savings and increased production</Header.Subheader>
      </Header>
      <Header as='h2' inverted >
      <CurrencyFormat value={Math.round(this.props.Total_savings_increase / 12)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Per month</Header.Subheader>
      </Header>
    </Segment>
    </div>
    </Grid.Column>

    </Grid.Row>
    </Grid>

    <div className="emptySpace"></div>
    
    <div className='footer'>
      <Button
        className="footerButtonBack"
        content="< Back"
        onClick={this.handleRangeChange}
        value={2}
        color="blue"
        size='big'
      />
      {/* <Button
        className="footerButtonContinue"
        content="Continue >"
        onClick={this.handleRangeChange}
        value={3}
        color="blue"
        size='big'
      /> */}
    </div>
  </div>
        )
      }
  }

export default Pane4
