const exec = require('child_process').exec
const fs = require('fs')
const express = require('express')
const app = express()

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.send('<html><body><link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" type="text/css"><link rel="stylesheet" href="static/reset.css" /><script src="app.js"></script></body></html>')
})

app.get('/app.js', (req, res) => {
  fs.readFile('target/app.js', (error, data) => {
    res.send(data)
  })
})

const dummyData = {
  residences: [
    {
      price: 249000,
      unit: 'EUR',
      squareMeters: 52.5,
      yearBuilt: 1937,
      roomCount: 2,
      hasKitchen: true,
      hasShower: true,
      city: 'Helsinki',
      address: 'Harjutori 10',
      description: 'Harjutorin reunalla 30-luvun funkistalossa tilava kaksio. Tässä kodissa on valkoiset lautalattiat, korkeat huoneet, runsaasti valoa tuovat kulmaikkunat ja leveät ikkunalaudat. Asunto sijaitsee hissitalon 5. kerroksessa, korkealla Torkkelinmäellä. Ikkunoista on rauhalliset näkymät Franzéninpuistoon. Kaksion huoneet jakaa toimiva keittiö, jossa on tilaa ruokapöydälle. Laatoitetussa kylpyhuoneessa ihastuttaa tassuamme. Taloyhtiössä isommat remontit tehty. Tervetuloa tekemään tarjouksesi!'
    }
  ]
}

app.get('/residences', (req, res) => {
  res.send(JSON.stringify(dummyData.residences))
})

const server = app.listen(8080, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Server is running at http://%s:%s', host, port)
})
