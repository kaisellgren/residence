import h from 'virtual-dom/h'

function factory(tagName) {
  return function () {
    return h(tagName, ...arguments)
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

export const pseudo = vnode => {
  if (vnode.properties && vnode.properties.style) {
    handlePseudoStyles(vnode.properties, ':hover', 'onmouseover', 'onmouseleave')
    handlePseudoStyles(vnode.properties, ':focus', 'onfocus', 'onblur')
    handlePseudoStyles(vnode.properties, ':active', 'onmousedown', 'onmouseup')
  }
  return vnode
}

function handlePseudoStyles(properties, pseudoType, activationEvent, deactivationEvent) {
  const pseudoStyle = properties.style[pseudoType]
  if (pseudoStyle != null) {
    properties[activationEvent] = e => {
      for (const key in pseudoStyle) {
        e.target.style[key] = pseudoStyle[key]
      }
    }
    properties[deactivationEvent] = e => {
      for (const key in pseudoStyle) {
        e.target.style[key] = properties.style[key] != null
          ? properties.style[key]
          : 'initial'
      }
    }
  }
}
