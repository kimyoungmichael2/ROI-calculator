import React, { Component } from 'react'
import { Grid, Segment, Form, Header, Divider, Button } from 'semantic-ui-react'
import CurrencyFormat from 'react-currency-format';



class Pane3 extends Component {

  CB_AV_handleChange = (e) => {
      this.props.CB_AV_change(e.target.value);
  }

  IMP_AV_handleChange = (e) => {
      this.props.IMP_AV_change(e.target.value);
  }

  NG_AV_handleChange = (e) => {
      this.props.NG_AV_change(e.target.value);
  }

  VN_AV_handleChange = (e) => {
      this.props.VN_AV_change(e.target.value);
  }

  OT_AV_handleChange = (e) => {
      this.props.OT_AV_change(e.target.value);
  }
  
  handleRangeChange = (e) => {
    this.props.handleRangeChange(e.target.value);
  }
  
  handleTabChange = (e) => {
    this.props.handleTabChange(e.target.value);
  }

  render() {

    const square = { width: 225, height: 225 }
    
      return (
  <div className="margins">

    <h2>Step 3: Projected increase in production</h2>
    <p>Please insert your inputs in the boxes as they apply.</p>

    <Grid stackable verticalAlign='middle' columns ='equal'>
    <Grid.Row stretched>

    <Grid.Column>

    <Divider section />
      
    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4></h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Annual volume</h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Revenue</h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>% Increase</h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Crown &amp; bridge restorations</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.CB_AV} 
                    onChange={this.CB_AV_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.CB_AV * this.props.CB_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
              </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
                <h4>
                   {Math.round(((this.props.CB_AP + this.props.CB_AV * this.props.CB_APF) - this.props.CB_AP) / this.props.CB_AP * 100)}%
                </h4>
             </Form.Field>
           </Form>   
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Implant restorations</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.IMP_AV} 
                    onChange={this.IMP_AV_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.IMP_AV * this.props.IMP_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
                <h4>
                   {Math.round(((this.props.IMP_AP + this.props.IMP_AV * this.props.IMP_APF) - this.props.IMP_AP) / this.props.IMP_AP * 100)}%
                </h4>
             </Form.Field>
           </Form>   
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Night guards/Sleep appliances</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.NG_AV} 
                    onChange={this.NG_AV_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.NG_AV * this.props.NG_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
                <h4>
                   {Math.round(((this.props.NG_AP + this.props.NG_AV * this.props.NG_APF) - this.props.NG_AP) / this.props.NG_AP * 100)}%
                </h4>
             </Form.Field>
           </Form>   
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Veneers</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.VN_AV} 
                    onChange={this.VN_AV_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.VN_AV * this.props.VN_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
                <h4>
                   {Math.round(((this.props.VN_AP + this.props.VN_AV * this.props.VN_APF) - this.props.VN_AP) / this.props.VN_AP * 100)}%
                </h4>
             </Form.Field>
           </Form>    
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Orthodontics</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.OT_AV} 
                    onChange={this.OT_AV_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.OT_AV * this.props.OT_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
                <h4>
                   {Math.round(((this.props.OT_AP + this.props.OT_AV * this.props.OT_APF) - this.props.OT_AP) / this.props.OT_AP * 100)}%
                </h4>
             </Form.Field>
           </Form>     
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
      <CurrencyFormat value={this.props.Total_Increase} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Total projected annual increase in production</Header.Subheader>
      </Header>
      <Header as='h2' inverted >
      <CurrencyFormat value={Math.round(this.props.Total_Increase / 12)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Average monthly increased production</Header.Subheader>
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
        value={1}
        color="blue"
        size='big'
      />
      <Button
        className="footerButtonContinue"
        content="Continue >"
        onClick={this.handleRangeChange}
        value={3}
        color="blue"
        size='big'
      />
    </div>

  </div>
        )
      }
  }

export default Pane3
