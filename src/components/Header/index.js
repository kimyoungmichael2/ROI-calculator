import React, { Component } from 'react'
import { Segment, Header} from 'semantic-ui-react'

class Title extends Component {
    render() {
        return (
          <Segment textAlign='center' padded>
            <Header as='h1' size='huge'>
                Medit i500 Scanner ROI Calculator 
                {/* <Icon name='mail' size='huge' className='pull-right'/> */}
            </Header>
          </Segment>
        )
    }
}

export default Title
