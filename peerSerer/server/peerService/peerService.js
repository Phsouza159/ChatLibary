  const port = 9000
  , { ExpressPeerServer } = require('peer')
  , peerServer = ExpressPeerServer(server, { 
      port
      , path: '/'
      , key: "peerjs"
      , allow_discovery: true
      , proxied: true
  })

const peerService = (() => {


    const connection = () => {
        peerServer.on('connection', (client) => { 
            console.log('Cliente connect id:' + client.getId())
        })
    }

    , disconnect = () => {
        peerServer.on('disconnect', (client) => { 
            console.log('Cliente disconnect id:' + client.getId())
        })
    }

    , message = () => {
        peerServer.on('message', (client , data) => { 
            //console.log('Cliente data id : ' + client.getId())
            //console.log('data : ', data)
        })
    }

    , start = () => {
        connection()
        disconnect()
        message()
    }

    , self = {}

    self.start = app => {
        app.use('/', peerServer)
        start()
    }

    return self
})()

module.exports = peerService