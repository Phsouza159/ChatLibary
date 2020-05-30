
class ChatViewModel {
    constructor(chatMolde) {
        this.store = chatMolde
    }

    getMensagens() {
        return this.store.getMensagens()
    }

    addMensagem(mensagem) {
        this.store.addMensagem(mensagem)
    }
}

export default ChatViewModel