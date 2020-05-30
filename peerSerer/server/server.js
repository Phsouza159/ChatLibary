const express = require('express')
    , http = require('http')
    , { middleware } = require('./middleware')
    , fs = require('fs')
    , peerService = require('./peerService/peerService')
    , pathController = `${__dirname}/controllers`

const server = ( app => {

    middleware(app)
    
    const controllers = fs.readdirSync(pathController)

    console.log('controllers', controllers)

    controllers.map( controller => {
        try{
            if(controller.includes('.js'))
                require(`${pathController}/${controller}`)(app)

        }catch(err){

            console.error(`Erro no controller : ${controller} ` , err)
            throw err
        }
    })
 
    peerService.start(app)
    app.listen(port)

})(express())


return server