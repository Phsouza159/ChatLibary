import React from 'react'
import { 
    BodyChatMessage
    , InputChat
} from './components/exports'

class ChatBotView extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <React.Fragment>
               <div>
                    Chat bot 
                </div>
                <BodyChatMessage> 
                    {render => (
                        
                        <div>
                            box
                        </div>                            
                        
                    )}
                </BodyChatMessage>

                <InputChat 
                    value={'teste'}
                    onChangeValue={() => {}}
                />

            </React.Fragment>
        )
    }
}

export default ChatBotView