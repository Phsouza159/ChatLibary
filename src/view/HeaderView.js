import React from 'react'

class HeaderView extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        const {
            routerpath
        } = this.props

        return (
            <div className="header">

                    <button onClick={ () => routerpath('/') }>
                        To chat
                    </button>

                    <button onClick={ () => routerpath('/chatBot') }>
                        To chatBot
                    </button>

            </div>
        )
    }
}

export default HeaderView