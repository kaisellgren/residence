const rx = require('rx')
const css = require('./css')
const dom = require('./util/dom')
const div = dom.div, input = dom.input

exports.model = () => {
  return rx.DOM.get('/residences').pluck('response').map(JSON.parse)
}

exports.render = (state) => {
  return div({},
    state.map(r => {
      return div({style: css.box}, r.description)
    })
  )
}
