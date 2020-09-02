import React, { Component } from 'react'

class Forms extends Component {

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
            <div className = "body">
          
            <div>
            <div class="row">
              <div class="column"><br></br></div>
              <div class="column">
                <h1>Annual procedures</h1>
              </div>
              <div class="column">
                <h1>Average patient fee</h1>
              </div>
              <div class="column">
                <h1>Annual production</h1>
              </div>
              <div class="column"><br></br></div>
            </div>  
          </div>

          <div>
            <div class="row">
              <div class="column"><br></br></div>
              <div class="column">
                <form>
                    <input type = 'number' 
                    value={this.props.CB_APR} 
                    onChange={this.CB_APR_handleChange} 
                    />
                </form>              
            </div>
              <div class="column">
              <form>
                    <input type = 'number' 
                    value={this.props.CB_APF} 
                    onChange={this.CB_APF_handleChange} 
                    />
                </form>    
                </div>
              <div class="column">
                <h1>${this.props.CB_APR * this.props.CB_APF}</h1>
              </div>
              <div class="column"><br></br></div>
            </div>  
          </div>

          <div>
            <div class="row">
              <div class="column"><br></br></div>
              <div class="column">
                <form>
                    <input type = 'number' 
                    value={this.props.IMP_APR} 
                    onChange={this.IMP_APR_handleChange} 
                    />
                </form>              
            </div>
              <div class="column">
              <form>
                    <input type = 'number' 
                    value={this.props.IMP_APF} 
                    onChange={this.IMP_APF_handleChange} 
                    />
                </form>    
                </div>
              <div class="column">
                <h1>${this.props.IMP_APR * this.props.IMP_APF}</h1>
              </div>
              <div class="column"><br></br></div>
            </div>  
          </div>

          </div>
        )
    }
}

export default Forms
