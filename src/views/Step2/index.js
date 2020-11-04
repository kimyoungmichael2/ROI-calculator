import React, { Component } from 'react'
import { Grid, Segment, Form, Header, Divider, Button } from 'semantic-ui-react'
import CurrencyFormat from 'react-currency-format';



class Pane2 extends Component {

  CB_PUC_handleChange = (e) => {
      this.props.CB_PUC_change(e.target.value);
  }

  IMP_PUC_handleChange = (e) => {
      this.props.IMP_PUC_change(e.target.value);
  }

  NG_PUC_handleChange = (e) => {
      this.props.NG_PUC_change(e.target.value);
  }

  VN_PUC_handleChange = (e) => {
      this.props.VN_PUC_change(e.target.value);
  }

  OT_PUC_handleChange = (e) => {
      this.props.OT_PUC_change(e.target.value);
  }

  RE_PUC_handleChange = (e) => {
      this.props.RE_PUC_change(e.target.value);
  }

  RE_AV_handleChange = (e) => {
      this.props.RE_AV_change(e.target.value);
  }

  STR_SAV_handleChange = (e) => {
      this.props.STR_SAV_change(e.target.value);
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

    <h2>Step 2: Projected Savings</h2>
    <p>Includes conventional impression costs, lab discounts, shipping.</p>
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
          <h4>Per unit cost</h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Annual volume</h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Savings</h4>
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
              <CurrencyFormat value={this.props.CB_PUC} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.CB_PUC_change(floatValue);
                }}/>
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4>{this.props.CB_APR}</h4>
              </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.CB_PUC * this.props.CB_APR} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
              <CurrencyFormat value={this.props.IMP_PUC} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.IMP_PUC_change(floatValue);
                }}/>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4>{this.props.IMP_APR}</h4>         
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.IMP_PUC * this.props.IMP_APR} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
              <CurrencyFormat value={this.props.NG_PUC} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.NG_PUC_change(floatValue);
                }}/>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4>{this.props.NG_APR}</h4>         
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.NG_PUC * this.props.NG_APR} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
              <CurrencyFormat value={this.props.VN_PUC} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.VN_PUC_change(floatValue);
                }}/>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4>{this.props.VN_APR}</h4>         
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.VN_PUC * this.props.VN_APR} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
              <CurrencyFormat value={this.props.OT_PUC} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.OT_PUC_change(floatValue);
                }}/>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4>{this.props.OT_APR}</h4>         
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.OT_PUC * this.props.OT_APR} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
             </Form.Field>
           </Form>     
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Remakes per year</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
              <CurrencyFormat value={this.props.RE_PUC} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.RE_PUC_change(floatValue);
                }}/>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
             <input type = 'number' 
                    value={this.props.RE_AV} 
                    onChange={this.RE_AV_handleChange} 
                    />    
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.RE_PUC * this.props.RE_AV} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
             </Form.Field>
           </Form>     
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable columns='equal'>
    <Grid.Row stretched>
        <Grid.Column textAlign='right'>
          <h4>Annual storage savings from moving to digital models</h4>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={3}>    
           </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
              <CurrencyFormat value={this.props.STR_SAV} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                  const {formattedValue, value, floatValue} = values;
                    this.props.STR_SAV_change(floatValue);
                }}/>            
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
      <CurrencyFormat value={this.props.Total_Savings} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Total projected annual savings</Header.Subheader>
      </Header>
      <Header as='h2' inverted >
      <CurrencyFormat value={Math.round(this.props.Total_Savings / 12)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Average monthly savings</Header.Subheader>
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
        value={0}
        color="blue"
        size='big'
      />
      <Button
        className="footerButtonContinue"
        content="Continue >"
        onClick={this.handleRangeChange}
        value={2}
        color="blue"
        size='big'
      />
    </div>

  </div>
        )
      }
  }

export default Pane2
