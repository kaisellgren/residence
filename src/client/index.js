const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')
const createElement = require('virtual-dom/create-element')
const dom = require('./util/dom')
const app = require('./app')
const div = dom.div

var tree = div()
const rootNode = createElement(tree)
document.body.appendChild(rootNode)

app.model().subscribe(state => {
  const newTree = app.render(state)
  const patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree;
})
