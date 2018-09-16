let express = require('express')
let load = require('express-load')
let bodyParser = require('body-parser')


module.exports = () => {

    var app = express()

    app.set('port',3000)
    
    app.use(express.static('./public'))
    app.use(bodyParser.json())

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app)

    return app
}
