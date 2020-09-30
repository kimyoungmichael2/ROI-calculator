import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import Pane1 from '../Step1'
import Pane2 from '../Step2'
import Pane3 from '../Step3'
import Pane4 from '../Step4'
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
      OT_APF : 4000,
    
      CB_PUC : 12,
      IMP_PUC : 18,
      NG_PUC : 12,
      VN_PUC : 20,
      OT_PUC : 20,
      RE_PUC : 18,
      RE_AV : 40,
      STR_SAV : 1000,
    
      CB_AV : 0,
      IMP_AV : 0,
      NG_AV : 0,
      VN_AV : 0,
      OT_AV : 0}


//Step 1 States

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

//Step 2 States

CB_PUC_changeHandler = (CB_PUC) => {
  this.setState({
     CB_PUC : CB_PUC
  })
  }

IMP_PUC_changeHandler = (IMP_PUC) => {
  this.setState({
     IMP_PUC : IMP_PUC
  })
  }

NG_PUC_changeHandler = (NG_PUC) => {
  this.setState({
     NG_PUC : NG_PUC
  })
  }

VN_PUC_changeHandler = (VN_PUC) => {
  this.setState({
     VN_PUC : VN_PUC
  })
  }

OT_PUC_changeHandler = (OT_PUC) => {
  this.setState({
     OT_PUC : OT_PUC
  })
  }

RE_PUC_changeHandler = (RE_PUC) => {
  this.setState({
     RE_PUC : RE_PUC
  })
  }

RE_AV_changeHandler = (RE_AV) => {
  this.setState({
     RE_AV : RE_AV
  })
  }

STR_SAV_changeHandler = (STR_SAV) => {
  this.setState({
     STR_SAV : STR_SAV
  })
  }

//Step 3 States

CB_AV_changeHandler = (CB_AV) => {
  this.setState({
     CB_AV : CB_AV
  })
  }

IMP_AV_changeHandler = (IMP_AV) => {
  this.setState({
     IMP_AV : IMP_AV
  })
  }

NG_AV_changeHandler = (NG_AV) => {
  this.setState({
     NG_AV : NG_AV
  })
  }

VN_AV_changeHandler = (VN_AV) => {
  this.setState({
     VN_AV : VN_AV
  })
  }

OT_AV_changeHandler = (OT_AV) => {
  this.setState({
     OT_AV : OT_AV
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
            render: () => <Tab.Pane attached={false}>
              <Pane2
                  CB_PUC={this.state.CB_PUC}
                  CB_PUC_change={this.CB_PUC_changeHandler}
                  CB_APR={this.state.CB_APR}

                  IMP_PUC={this.state.IMP_PUC}
                  IMP_PUC_change={this.IMP_PUC_changeHandler}
                  IMP_APR={this.state.IMP_APR}

                  NG_PUC={this.state.NG_PUC}
                  NG_PUC_change={this.NG_PUC_changeHandler}
                  NG_APR={this.state.NG_APR}     
                  
                  VN_PUC={this.state.VN_PUC}
                  VN_PUC_change={this.VN_PUC_changeHandler}
                  VN_APR={this.state.VN_APR}

                  OT_PUC={this.state.OT_PUC}
                  OT_PUC_change={this.OT_PUC_changeHandler}
                  OT_APR={this.state.OT_APR}

                  RE_PUC={this.state.RE_PUC}
                  RE_PUC_change={this.RE_PUC_changeHandler}
                  RE_AV={this.state.RE_AV}
                  RE_AV_change={this.RE_AV_changeHandler}

                  STR_SAV={this.state.STR_SAV}
                  STR_SAV_change={this.STR_SAV_changeHandler}

                  Total_Savings=
                  {this.state.CB_APR * this.state.CB_PUC
                    + 
                   this.state.IMP_APR * this.state.IMP_PUC
                    + 
                   this.state.NG_APR * this.state.NG_PUC
                    + 
                   this.state.VN_APR * this.state.VN_PUC
                    + 
                   this.state.OT_APR * this.state.OT_PUC
                    + 
                   this.state.RE_PUC * this.state.RE_AV
                    + 
                   this.state.STR_SAV * 1}
              />
              </Tab.Pane>,
          },
          {
            menuItem: '3. Projected Increase',
            render: () => <Tab.Pane attached={false}>
              <Pane3
                  CB_AV={this.state.CB_AV}
                  CB_AV_change={this.CB_AV_changeHandler}

                  IMP_AV={this.state.IMP_AV}
                  IMP_AV_change={this.IMP_AV_changeHandler}

                  NG_AV={this.state.NG_AV}
                  NG_AV_change={this.NG_AV_changeHandler}

                  VN_AV={this.state.VN_AV}
                  VN_AV_change={this.VN_AV_changeHandler}

                  OT_AV={this.state.OT_AV}
                  OT_AV_change={this.OT_AV_changeHandler}

                  CB_APF={this.state.CB_APF}
                  IMP_APF={this.state.IMP_APF}
                  NG_APF={this.state.NG_APF}
                  VN_APF={this.state.VN_APF}
                  OT_APF={this.state.OT_APF}

                  CB_AP={this.state.CB_APR * this.state.CB_APF}
                  IMP_AP={this.state.IMP_APR * this.state.IMP_APF}
                  NG_AP={this.state.NG_APR * this.state.NG_APF}
                  VN_AP={this.state.VN_APR * this.state.VN_APF}
                  OT_AP={this.state.OT_APR * this.state.OT_APF}

                  Total_Increase=
                  {this.state.CB_AV * this.state.CB_APF
                    + 
                   this.state.IMP_AV * this.state.IMP_APF
                    + 
                   this.state.NG_AV * this.state.NG_APF
                    + 
                   this.state.VN_AV * this.state.VN_APF
                    + 
                   this.state.OT_AV * this.state.OT_APF}
              />
              </Tab.Pane>,
          },
          {
            menuItem: '4. Total Cost of Ownership',
            render: () => <Tab.Pane attached={false}>
              <Pane4

              />
            </Tab.Pane>,
          },
        ]} />
      </div>
    )
  }
}

  export default Tabs