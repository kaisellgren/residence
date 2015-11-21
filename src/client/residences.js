const rx = require('rx')
const css = require('./css')
const dom = require('./util/dom')
const div = dom.div, input = dom.input

exports.render = function (state) {
  return div({},
    state.map(r => {
      return div({style: css.box}, r.description)
    })
  )
}
