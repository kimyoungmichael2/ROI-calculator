import React, { Component } from 'react'
import { Segment, Header, Image} from 'semantic-ui-react'
import logo from './DC_logo.png';

class Title extends Component {
    render() {
        return (
          <Segment textAlign='center'>
            <Image src={logo} size='medium' centered href='https://dentcore.com'/>
            <Header as='h1'>
                Medit i500 Scanner ROI Calculator 
                {/* <Icon name='mail' size='huge' className='pull-right'/> */}
            </Header>
          </Segment>
        )
    }
}

export default Title
