import 'rx-dom'

import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import createElement from 'virtual-dom/create-element'
import * as app from './app'
import {div} from './util/dom'

var tree = div()
var rootNode = createElement(tree)
document.body.appendChild(rootNode)

app.model().subscribe(state => {
  const newTree = app.render(state)
  const patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
})
