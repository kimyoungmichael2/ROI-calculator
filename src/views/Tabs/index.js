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
      IMP_APF: 2000}

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
                  
                  Step1_Total=                
                  {this.state.CB_APR * this.state.CB_APF
                   + 
                  this.state.IMP_APR * this.state.IMP_APF}
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