const config = require('../../config.js').config
const exec = require('child_process').exec
const fs = require('fs')
const express = require('express')
const app = express()
const datastore = require('gcloud').datastore
const compression = require('compression')

const ds = datastore.dataset({
  projectId: config.cloud.projectId,
  keyFilename: config.cloud.keyFilename,
  namespace: config.cloud.datastore.namespace
})

app.use(compression())
app.use('/static', express.static('static'))

app.get('/app.js', (req, res) => {
  fs.readFile('target/app.js', (error, data) => {
    res.send(data)
  })
})

app.get('/residences', (req, res) => {
  ds.runQuery(ds.createQuery('residence'), (err, stuff) => {
    res.send(JSON.stringify(stuff.map(d => d.data)))
  })
})

app.use((req, res) => {
  res.send(`
<html>
  <body>
    <div id="application"></div>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="static/reset.css" />
    <script src="app.js"></script>
  </body>
</html>`)
})

const server = app.listen(config.server.port, config.server.hostname, () => {
  console.log('Residence is running.')
})
