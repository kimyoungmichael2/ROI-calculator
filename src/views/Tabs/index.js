import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import Pane1 from '../Step1'
import _ from 'lodash'

class Tabs extends Component {
  state = { 
      color: 'blue',
      CB_APR : 230,
      CB_APF : 1500,
      IMP_APR: 15,
      IMP_APF: 2000,
      NG_APR : 60,
      NG_APF : 500,
      VN_APR : 12,
      VN_APF : 1200,
      OT_APR : 2,
      OT_APF : 4000}

CB_APR_changeHandler = (CB_APR) => {
this.setState({
   CB_APR : CB_APR
})
}

CB_APF_changeHandler = (CB_APF) => {
this.setState({
   CB_APF : CB_APF
})
}

IMP_APR_changeHandler = (IMP_APR) => {
this.setState({
   IMP_APR : IMP_APR
})
}

IMP_APF_changeHandler = (IMP_APF) => {
this.setState({
   IMP_APF : IMP_APF
})
}

NG_APR_changeHandler = (NG_APR) => {
this.setState({
   NG_APR : NG_APR
})
}

NG_APF_changeHandler = (NG_APF) => {
this.setState({
   NG_APF : NG_APF
})
}

VN_APR_changeHandler = (VN_APR) => {
this.setState({
   VN_APR : VN_APR
})
}

VN_APF_changeHandler = (VN_APF) => {
this.setState({
   VN_APF : VN_APF
})
}

OT_APR_changeHandler = (OT_APR) => {
this.setState({
   OT_APR : OT_APR
})
}

OT_APF_changeHandler = (OT_APF) => {
this.setState({
   OT_APF : OT_APF
})

}

  render() {
    const { color } = this.state

    return (
      <div>
        <Divider hidden />
        <Tab menu={{ color, inverted: true, attached: false, tabular: false, secondary: true, pointing: true, className: "wrapped"}} 
        panes=
        {[
          {
            menuItem: '1. Dental Procedures',
            render: () => 
              <Tab.Pane attached={false}>
                <Pane1 
                  CB_APR={this.state.CB_APR}
                  CB_APR_change={this.CB_APR_changeHandler}
                  CB_APF={this.state.CB_APF}
                  CB_APF_change={this.CB_APF_changeHandler}

                  IMP_APR={this.state.IMP_APR}
                  IMP_APR_change={this.IMP_APR_changeHandler}
                  IMP_APF={this.state.IMP_APF}
                  IMP_APF_change={this.IMP_APF_changeHandler}

                  NG_APR={this.state.NG_APR}
                  NG_APR_change={this.NG_APR_changeHandler}
                  NG_APF={this.state.NG_APF}
                  NG_APF_change={this.NG_APF_changeHandler}
                  
                  VN_APR={this.state.VN_APR}
                  VN_APR_change={this.VN_APR_changeHandler}
                  VN_APF={this.state.VN_APF}
                  VN_APF_change={this.VN_APF_changeHandler}

                  OT_APR={this.state.OT_APR}
                  OT_APR_change={this.OT_APR_changeHandler}
                  OT_APF={this.state.OT_APF}
                  OT_APF_change={this.OT_APF_changeHandler}

                  Step1_Total=                
                  {this.state.CB_APR * this.state.CB_APF
                   + 
                  this.state.IMP_APR * this.state.IMP_APF
                   + 
                  this.state.NG_APR * this.state.NG_APF
                   + 
                  this.state.VN_APR * this.state.VN_APF
                   + 
                  this.state.OT_APR * this.state.OT_APF}
                />
              </Tab.Pane>,
          },
          {
            menuItem: '2. Projected Savings',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
          },
          {
            menuItem: '3. Projected Increase',
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
          },
          {
            menuItem: '4. Total Cost of Ownership',
            render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
          },
        ]} />
      </div>
    )
  }
}

  export default Tabs