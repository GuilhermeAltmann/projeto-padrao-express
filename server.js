let app = require('./config/express')()

app.listen(app.get('port'), () => {

    console.log(`Express Server on port ${app.get('port')}`)
})