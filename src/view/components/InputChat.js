import React, { Component } from 'react'

export class InputChat extends Component {
    render() {
        const { 
            value 
           , onChangeValue
        } = this.props

        return (
            <React.Fragment>
                    <input type='text' value={value} onChange={onChangeValue}/>
            </React.Fragment>
        )
    }
}

export default InputChat
