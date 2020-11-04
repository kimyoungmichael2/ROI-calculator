import React, { Component } from 'react'
import { Grid, Segment, Form, Header, Divider, Button} from 'semantic-ui-react'
import CurrencyFormat from 'react-currency-format';


class Pane1 extends Component {
    
  CB_APR_handleChange = (e) => {
      this.props.CB_APR_change(e.target.value);
  }

  CB_APF_handleChange = (e) => {
      this.props.CB_APF_change(e.target.value);
  }

  IMP_APR_handleChange = (e) => {
      this.props.IMP_APR_change(e.target.value);
  }

  IMP_APF_handleChange = (e) => {
      this.props.IMP_APF_change(e.target.value);
  }
  
  NG_APR_handleChange = (e) => {
    this.props.NG_APR_change(e.target.value);
  }

  NG_APF_handleChange = (e) => {
      this.props.NG_APF_change(e.target.value);
  }

  VN_APR_handleChange = (e) => {
      this.props.VN_APR_change(e.target.value);
  }

  VN_APF_handleChange = (e) => {
      this.props.VN_APF_change(e.target.value);
  }

  OT_APR_handleChange = (e) => {
      this.props.OT_APR_change(e.target.value);
  }

  OT_APF_handleChange = (e) => {
      this.props.OT_APF_change(e.target.value);
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

    <h2>Step 1: Dental Procedures</h2>
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
          <h4>Annual procedures</h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Average patient fee</h4>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Annual production</h4>
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
                    value={this.props.CB_APR} 
                    onChange={this.CB_APR_handleChange} 
                    />             
              </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
                <CurrencyFormat value={this.props.CB_APF} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                    const {formattedValue, value, floatValue} = values;
                      this.props.CB_APF_change(floatValue);
                  }}/>
              </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
               <h4><CurrencyFormat value={this.props.CB_APR * this.props.CB_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
                    value={this.props.IMP_APR} 
                    onChange={this.IMP_APR_handleChange} 
                    />
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
                <CurrencyFormat value={this.props.IMP_APF} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                    const {formattedValue, value, floatValue} = values;
                      this.props.IMP_APF_change(floatValue);
                  }}/>           
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.IMP_APR * this.props.IMP_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
                    value={this.props.NG_APR} 
                    onChange={this.NG_APR_handleChange} 
                    />
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
           <Form.Field>          
                <CurrencyFormat value={this.props.NG_APF} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                    const {formattedValue, value, floatValue} = values;
                      this.props.NG_APF_change(floatValue);
                  }}/>    
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.NG_APR * this.props.NG_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
                    value={this.props.VN_APR} 
                    onChange={this.VN_APR_handleChange} 
                    />
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
                <CurrencyFormat value={this.props.VN_APF} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                    const {formattedValue, value, floatValue} = values;
                      this.props.VN_APF_change(floatValue);
                  }}/>    
             </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.VN_APR * this.props.VN_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
                    value={this.props.OT_APR} 
                    onChange={this.OT_APR_handleChange} 
                    />
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
           <Form.Field>     
                <CurrencyFormat value={this.props.OT_APF} thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                    const {formattedValue, value, floatValue} = values;
                      this.props.OT_APF_change(floatValue);
                  }}/>  
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4><CurrencyFormat value={this.props.OT_APR * this.props.OT_APF} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
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
      <CurrencyFormat value={this.props.Step1_Total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <Header.Subheader>Approximate annual production</Header.Subheader>
      </Header>
    </Segment>
    </div>
    </Grid.Column>

    </Grid.Row>
    </Grid>

    <div className="emptySpace"></div>
    
    <div className='footer'>
      <Button
        className="footerButtonContinue"
        content="Continue >"
        onClick={this.handleRangeChange}
        value={1}
        color="blue"
        size='big'
      />
    </div>
  </div>
        )
      }
  }

export default Pane1
