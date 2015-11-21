const h = require('virtual-dom/h')

function factory(tagName) {
  return h.apply(null, [tagName].concat(Array.prototype.slice.call(arguments, 1)))
}

exports.input = factory.bind(null, 'input')
exports.div = factory.bind(null, 'div')
exports.ul = factory.bind(null, 'ul')
exports.li = factory.bind(null, 'li')
exports.span = factory.bind(null, 'span')
