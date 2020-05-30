
import React from 'react'
import { inject } from 'mobx-react'
//import {useSelector, useDispatch} from 'react-redux'
import RootStore from './../models/RootStore'
import ChatViewModel from './../viewModel/ChatViewModel'



import {
    HeaderController
    , ChatController
    , ChatBotController
} from './../controllers'

@inject(RootStore.type.CHAT_MODEL)
class RouterProvider extends React.Component {

    state = {
        path: '/'
        , models : []
    }

    constructor(props) {
        super(props)

        const chatModel = props[RootStore.type.CHAT_MODEL]
        const chatViewModel = new ChatViewModel(chatModel)

        this.state.models.push({
            name : 'chatModel'
            , model : chatViewModel
        })
    }

    getController() {

        switch (this.state.path) {
            case '/':
                let viewModel = this.state.models.find( e => e.name === 'chatModel').model
                return <ChatController viewModel={viewModel}/>

            case '/chatBot':
                
                return <ChatBotController />

            default:
                return <section>
                    teste
                </section>
        }

    }

    routerPath(path) {
        
        this.setState({ path : path })
    } 

    render() {
        return (
            <React.Fragment>

                <div>
                    <HeaderController 
                        routerpath={ (path) => this.routerPath(path) }  
                    />
                </div>
                {
                    this.getController()
                }
            </React.Fragment>
        )
    }
}

export default RouterProvider