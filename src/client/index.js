import 'rx-dom'

import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import createElement from 'virtual-dom/create-element'
import {App} from './app'
import {div} from './util/dom'

App().scan((state, tree) => {
  const target = patch(state.target, diff(state.tree, tree))

  return { tree, target }
}, {tree: div(), target: document.getElementById('application') }).subscribe()
