import { observable 
    //, autorun
    , reaction 
    ,  action } from 'mobx'
//import uuid from 'uuid/v4'

import BaseModel from '../infra/BaseModel'

class ChatModel extends BaseModel {

    @observable state = {
        mensagens : []  
    } 

    constructor() {
        super({
            table : 'ChatTable'
        })
        //autorun(state => console.log(state));

        this.loadState( state => {
            this.state = state
        })

        reaction( 
            () => this.state.mensagens.length ,
            length => {
                this.save()     
                console.log("mensagem: " , this.state.mensagens.join(','))
            })
    }

    getMensagens = () => this.state.mensagens

    @action addMensagem(mensagem) {
        this.state.mensagens.push(mensagem)
    }
}

export default ChatModel
