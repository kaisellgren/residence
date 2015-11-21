const exec = require('child_process').exec
const fs = require('fs')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<html><body><script src="app.js"></script></body></html>')
})

app.get('/app.js', (req, res) => {
  /*exec('webpack --config webpack.config.js src/client/index.js target/app.js', (error, stdout, stderr) => {
    console.log(stdout)*/
    fs.readFile('target/app.js', (error, data) => {
      res.send(data)
    })
  //})
})

const server = app.listen(8080, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Server is running at http://%s:%s', host, port)
})
