import React, { Component } from 'react'
import { Grid, Segment, Form } from 'semantic-ui-react'


class Pane1 extends Component {
  
  toCurrency(number) {
    const formatter = new Intl.NumberFormat("sv-SE", {
      style: "decimal",
      currency: "USD"
    });

    return formatter.format(number);
  }
    
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
  
  render() {
      return (
  <div>
    <Grid stackable columns ='equal'>
    <Grid.Row stretched>

    <Grid.Column>
      
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
             <input type = 'number' 
                    value={this.props.CB_APF} 
                    onChange={this.CB_APF_handleChange} 
                    /> 
              </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
               <h4>${this.props.CB_APR * this.props.CB_APF}</h4>
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
             <input type = 'number' 
                    value={this.props.IMP_APF} 
                    onChange={this.IMP_APF_handleChange} 
                    />             
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4>${this.props.IMP_APR * this.props.IMP_APF}</h4>
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
             <input type = 'number' 
                    value={this.props.NG_APF} 
                    onChange={this.NG_APF_handleChange} 
                    />             
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4>${this.props.NG_APR * this.props.NG_APF}</h4>
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
             <input type = 'number' 
                    value={this.props.VN_APF} 
                    onChange={this.VN_APF_handleChange} 
                    />             
             </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4>${this.props.VN_APR * this.props.VN_APF}</h4>
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
             <input type = 'number' 
                    value={this.props.OT_APF} 
                    onChange={this.OT_APF_handleChange} 
                    />             
            </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
             <h4>${this.props.OT_APR * this.props.OT_APF}</h4>
             </Form.Field>
           </Form>   
        </Grid.Column>
      </Grid.Row>
    </Grid>

    </Grid.Column>

    <Grid.Column width={5}>
      <Segment>${this.props.Step1_Total}</Segment>
    </Grid.Column>

    </Grid.Row>
    </Grid>
  </div>
        )
      }
  }

export default Pane1
