import React from 'react'
import ChatView from './../view/ChatView'

import PeerService from './../service/PeerService'


class ChatController extends React.Component {
    
    state = {
        mensagem : ''
    }

    constructor(props) {
        super(props)

        const { viewModel } = this.props
        this.viewModel = viewModel
    }

    setMensagem = (e) => {
        this.setState({ mensagem : e.target.value})
    }

    addMensagem = () => {
       
        console.log(this.state)
        const { mensagem } = this.state

        this.viewModel.addMensagem(mensagem)
        //this.setState({ mensagem : ''})

        PeerService.send(mensagem)
    }

    render() {

        const { viewModel } = this.props

        return (
            <ChatView
                mensagens={viewModel.getMensagens()}
                onSubmit={ this.addMensagem}
                onMensagemChange={this.setMensagem}
                mensagem={this.state.mensagem}
            />
        )
    }
}


export default ChatController
