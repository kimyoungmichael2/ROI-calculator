import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import Pane1 from '../../views/Step1'
import _ from 'lodash'

const panes = [
  {
    menuItem: '1. Dental Procedures',
    render: () => <Tab.Pane attached={false}><Pane1 /></Tab.Pane>,
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
]

class Tabs extends Component {
  state = { color: 'blue' }

  render() {
    const { color } = this.state

    return (
      <div>
        <Divider hidden />
        <Tab menu={{ color, inverted: true, attached: false, tabular: false, secondary: true, pointing: true, className: "wrapped"}} panes={panes} />
      </div>
    )
  }
}

  export default Tabs