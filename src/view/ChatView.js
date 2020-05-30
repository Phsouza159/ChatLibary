import React from 'react'
import {
     BodyChatMessage 
     , InputChat
     , FormInputChat
} from './components/exports'

class ChatView extends React.Component {


    /**
     * @param {Array<string>} mensagens
     */
    renderListaMengens = mensagens => {
      
        let listaMensagem = []

        if(mensagens.length < 1)
            return (
                <p>
                    Não possue mensagens
                </p>
            )

        for( let i = 0; i < mensagens.length; i += 1) {
            listaMensagem.push(<li key={i}>
                {mensagens[i]}
            </li>)
        }
        return (
            <ul>
                {
                   listaMensagem
                }
            </ul>
        )
    }

    render() {

        const {
            mensagens
            , onSubmit
            , mensagem
            ,onMensagemChange
        } = this.props

        return (
            <section>
                <div>
                    Chat view 
                </div>

               
                <BodyChatMessage> 
                    {render => (
                         this.renderListaMengens(mensagens) 
                    )}
                </BodyChatMessage>
                

               <FormInputChat
                    inputValue={mensagem}
                    onChangeValue={onMensagemChange}
                    onSubmit={onSubmit}
               />
              
            </section>
        )
    }
}

export default ChatView