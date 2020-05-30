import Peer from 'peerjs';
import uuidv4 from 'uuid/v4'
import axios from 'axios'

const PeerService = (() => {

    let host = '127.0.0.1'
        , port = 9000
        , _isConnect = false
        , _peer = { }

    , state = {
        id : uuidv4()
        , name : 'teset'
    }

    , api = axios.create({
        baseURL: `http://${host}:${port}`,
    })

    , start = () => {

       if(_isConnect) {
        return
       } 

        _peer = new Peer( uuidv4() , { 
             host, port
        })

        _peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
        });

        _peer.on('connection', (conn) => { 

            console.log('Reseive', conn)

            conn.on('data', (data) => {
                // Will print 'hi!'
                console.log(data);
            });
        });

        _peer.on('disconnected', function(e) { 
            console.log('disconnected...' , e)
         })

        window._peer = _peer

        _isConnect = true
    }

    , self = {

        start : async () => {
           return api.post(`/connectClient` , {
               id : state.id
               , name : state.name
            })
            .then( result => {

                console.log(result)

                return self
            }) 
        }

        , get : () => {
            return {}
            //return _peer
        }

        , send : (id) => {

            var conn = _peer.connect(id)

            conn.on('open', function() {

                conn.send({ mensagem : 'Hello! teste'})

                conn.on('data', (data) => {
                    // Will print 'hi!'
                    console.log(data);
                });
            })
        }
    }

    return self
})()

export default PeerService