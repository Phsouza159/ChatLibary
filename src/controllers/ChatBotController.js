import React from 'react'

import ChatBotView from './../view/ChatBotView'

class ChatBotController extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <ChatBotView/>
        )
    }
}

export default ChatBotController