const cors = require('cors')
    , bodyParser = require('body-parser')

const middleware = app => {
    
    app.use(cors())

    app.use(bodyParser.urlencoded(
        extended = true
    ))

    app.use(bodyParser.json())


    return app
}

module.exports =  middleware 