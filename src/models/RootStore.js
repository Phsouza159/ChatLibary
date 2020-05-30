import ChatModel from './domain/ChatModel'

class RootStore {
    static type = {
        CHAT_MODEL : 'chatModel'
    }

    constructor() {
        this.chatModel = new ChatModel()
    }

    getStores = () => ({
        [RootStore.type.CHAT_MODEL]: this.chatModel
    })
}

export default RootStore