const rx = require('rx')
const css = require('./css')
const dom = require('./util/dom')
const ajax = require('./util/ajax')
const div = dom.div, input = dom.input

exports.model = () => {
  return ajax.get('/residences')
}

exports.render = state =>
  div({},
    state.map(r => {
      return div({style: css.box}, r.description)
    })
  )
