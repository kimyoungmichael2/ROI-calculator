import React, { Component } from 'react'
import { Grid, Segment, Form, Header } from 'semantic-ui-react'


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
  
  render() {

    const square = { width: 225, height: 225 }
    
      return (
  <div>
    <Grid stackable verticalAlign='middle' columns ='equal'>
    <Grid.Row stretched>

    <Grid.Column>
      
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
             <input type = 'number' 
                    value={this.props.CB_PUC} 
                    onChange={this.CB_PUC_handleChange} 
                    />             
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
               <h4>${this.props.CB_PUC * this.props.CB_APR}</h4>
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
                    value={this.props.IMP_PUC} 
                    onChange={this.IMP_PUC_handleChange} 
                    />    
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
             <h4>${this.props.IMP_PUC * this.props.IMP_APR}</h4>
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
                    value={this.props.NG_PUC} 
                    onChange={this.NG_PUC_handleChange} 
                    />    
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
             <h4>${this.props.NG_PUC * this.props.NG_APR}</h4>
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
                    value={this.props.VN_PUC} 
                    onChange={this.VN_PUC_handleChange} 
                    />    
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
             <h4>${this.props.VN_PUC * this.props.VN_APR}</h4>
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
                    value={this.props.OT_PUC} 
                    onChange={this.OT_PUC_handleChange} 
                    />    
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
             <h4>${this.props.OT_PUC * this.props.OT_APR}</h4>
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
             <input type = 'number' 
                    value={this.props.RE_PUC} 
                    onChange={this.RE_PUC_handleChange} 
                    />    
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
             <h4>${this.props.RE_PUC * this.props.RE_AV}</h4>
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
             <input type = 'number' 
                    value={this.props.STR_SAV} 
                    onChange={this.STR_SAV_handleChange} 
                    />    
            </Form.Field>
            </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    </Grid.Column>

    <Grid.Column width={5}>
      <div>
    <Segment circular inverted color='blue' style={square}>
      <Header as='h2' inverted >
      ${this.props.Total_Savings}
        <Header.Subheader>Total projected annual savings</Header.Subheader>
      </Header>
      <Header as='h2' inverted >
      ${Math.round(this.props.Total_Savings / 12)}
        <Header.Subheader>Average monthly savings</Header.Subheader>
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

export default Pane2
