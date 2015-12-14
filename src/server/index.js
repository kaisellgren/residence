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

const staticOptions = {
  index: false,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31557600')
  }
}

app.use('/', express.static('static', staticOptions))
app.use('/', express.static('target', staticOptions))

app.get('/residences', (req, res) => {
  ds.runQuery(ds.createQuery('residence'), (err, stuff) => {
    res.send(JSON.stringify(stuff.map(d => d.data)))
  })
})

app.use((req, res) => {
  res.send(`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="application"></div>
    <script src="/app.js" async></script>
    <link href="/reset.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
  </body>
</html>`)
})

const server = app.listen(config.server.port, config.server.hostname, () => {
  console.log('Residence is running.')
})
