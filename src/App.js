import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import RootStore from './models/RootStore'
import { Body } from './view/components/exports'
import RouterProvider from './provider/RouteProvider'

import uuidv4 from 'uuid/v4'
import PeerService from './service/PeerService'

const rootStore = new RootStore()

class App extends Component {
    state = {
        isWindowOpen : true
    }

    constructor(props) {
        super(props)

        console.log(`App start`)
        var peer = PeerService.start()
    }

    render() {
        return (
            <Provider {...rootStore.getStores()}>
               <Body
                    isWindowOpen={this.state.isWindowOpen}
                    eventWindownsChat={() => this.setState({ isWindowOpen : !this.state.isWindowOpen })}>
                    
                    {render => (
                           <RouterProvider/>
                    )} 
                </Body>
            </Provider>
        )
    }
}

export default App
