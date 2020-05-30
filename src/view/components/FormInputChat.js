import React, { Component } from 'react'

import { 
    InputChat
} from './exports'

export class FormInputChat extends Component {

    submit = event => {
        event.preventDefault()
        const { onSubmit } = this.props

        onSubmit()
    }

    render() {

        const {
            inputValue
            , onChangeValue
        } = this.props

        return (
            <form onSubmit={this.submit}>

                <InputChat 
                    value={inputValue} 
                    onChangeValue={onChangeValue}
                />

                <button href='#'>
                    salvar
                </button>

            </form>
        )
    }
}

export default FormInputChat
