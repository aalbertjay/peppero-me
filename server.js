var express = require('express')
  /*, logger = require('morgan')*/
  , app = express()
  , __dirname = "Bitcamp2017"
/*var template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')*/

/*app.use(logger('dev'))*/
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  console.log("jello")
  /*try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }*/
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
