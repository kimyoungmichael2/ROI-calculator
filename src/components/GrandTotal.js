import React, { Component } from 'react'
import Forms from './Forms.js'

class GrandTotal extends Component {

        state = {
             CB_APR : 230,
             CB_APF : 1500,
             IMP_APR: 15,
             IMP_APF: 2000
        }
    

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
        return (
            <div>
            <Forms 
            CB_APR={this.state.CB_APR}
            CB_APR_change={this.CB_APR_changeHandler}
            CB_APF={this.state.CB_APF}
            CB_APF_change={this.CB_APF_changeHandler}
            IMP_APR={this.state.IMP_APR}
            IMP_APR_change={this.IMP_APR_changeHandler}
            IMP_APF={this.state.IMP_APF}
            IMP_APF_change={this.IMP_APF_changeHandler}
            />
                <h1>
                    ${this.state.CB_APR * this.state.CB_APF
                     + 
                    this.state.IMP_APR * this.state.IMP_APF}
                </h1>
            </div>
        )
    }
}

export default GrandTotal;

