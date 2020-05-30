const express = require('express')
    , { ExpressPeerServer } = require('peer')
    , http = require('http')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , uuid = require('uuid/v4')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded(
    extended = true
))
app.use(bodyParser.json())


let clientes = {
    data : []
}

app.get('/', (req, res, next) => res.send('Hello world!'))
app.get('/clients', (req, res, next) => res.send(clientes))

app.post('/connectClient' , (req, res) => {
    try{
        console.log(req.body)

        clientes.data.push(req.body)

        return res.send({})

    }catch (err) {
        console.log('error')
        return res.send({ mensage : err.mensage })
    }
 })

 const server = app.listen(9000);
 
 const peerServer = ExpressPeerServer(server, { 
    port: 9000
    , path: '/'
    , key: "peerjs"
    , allow_discovery: true
    , proxied: true
});
  
 app.use('/', peerServer)


 peerServer.on('connection', (client) => { 
    console.log('Cliente connect id:' + client.getId())
   // console.log('data' , client)
});

peerServer.on('disconnect', (client) => { 
    console.log('Cliente disconnect id:' + client.getId())
});

peerServer.on('message', (client , data) => { 

    //console.log('Cliente data id : ' + client.getId())
    //console.log('data : ', data)
});
