const rx = require('rx')
const css = require('./css')
const dom = require('./util/dom')
const residences = require('./residences')
const div = dom.div

const dummyData = new rx.BehaviorSubject([
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
])

exports.model = function () {
  return dummyData
}

exports.render = function (state) {
  return div({style: {background: '#eee'}},
    residences.render(state)
  )
}
