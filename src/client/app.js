const rx = require('rx')
require('rx-dom')
const css = require('./css')
const dom = require('./util/dom')
const residences = require('./residences')
const div = dom.div

exports.model = () => {
  var residencesModel = residences.model()
  return residencesModel
}

exports.render = (state) => {
  return div({style: {background: '#eee'}},
    residences.render(state)
  )
}
