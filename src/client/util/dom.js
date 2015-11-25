import h from 'virtual-dom/h'

function factory(tagName) {
  return function () {
    return h.apply(null, [tagName].concat(Array.prototype.slice.call(arguments)))
  }
}

export const input = factory('input')
export const div = factory('div')
export const ul = factory('ul')
export const li = factory('li')
export const span = factory('span')
export const h1 = factory('h1')
export const a = factory('a')
export const p = factory('p')
