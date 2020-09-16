import React, { Component } from 'react'
import { Grid, Segment, Form } from 'semantic-ui-react'


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
          <h4>Crown &amp; bridge restorations</h4>
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
          <h4>Crown &amp; bridge restorations</h4>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><input placeholder='12000' /></h4>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><input placeholder='' /></h4>
             </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
               <h4><input placeholder='' /></h4>
             </Form.Field>
           </Form>   
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
               <h4><input placeholder='12000' /></h4>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><input placeholder='' /></h4>
             </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
               <h4><input placeholder='' /></h4>
             </Form.Field>
           </Form>   
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
               <h4><input placeholder='12000' /></h4>
             </Form.Field>
           </Form>
        </Grid.Column>
        <Grid.Column width={3}>
           <Form>
             <Form.Field>
               <h4><input placeholder='' /></h4>
             </Form.Field>
           </Form>        
           </Grid.Column>
        <Grid.Column width={3}>
            <Form>
             <Form.Field>
               <h4><input placeholder='' /></h4>
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
