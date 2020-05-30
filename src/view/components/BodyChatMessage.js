import React, { Component } from 'react'
import * as style from './../style'

export class BodyChatMessage extends Component {
    
    render() {
        return (
            <React.Fragment>
            
            <hr/>

            <div style={style.boxBodyMessage} >

                { this.props.children() }

            </div>
            
            <hr/>
            
            </React.Fragment>
        )
    }
}

