import React from 'react'

import HeaderView from './../view/HeaderView'

class HeaderController extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {
            routerpath
        } = this.props

        return <HeaderView 
                    routerpath={routerpath}
                />
    }
}

export default HeaderController