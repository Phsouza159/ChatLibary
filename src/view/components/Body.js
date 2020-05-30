import React from 'react'
import * as style from './../style'

class Body extends React.Component{

    
    
    render() {

        const { 
            eventWindownsChat 
            , isWindowOpen
        } = this.props

        return (
            <div>
                <div>
                    <button onClick={eventWindownsChat}>
                        circle
                    </button>
                </div>
                {
                    isWindowOpen && (
                        <div style={style.box}>
                            { this.props.children() }
                        </div>
                    )
                }
               
            </div>
        )
    }

}

export { Body }