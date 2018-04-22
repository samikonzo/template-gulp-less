const express = require('express')
const app = express()
const path = require('path')
const reload = require('reload')
global.l = console.log


reload(app)

app.use(express.static(path.join(__dirname, '../', '/public')))

app.get('*', (req, res, next) => {
	l(req.method, req.url)
	next()
})


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'public/index.html'))
})

app.listen(3000)