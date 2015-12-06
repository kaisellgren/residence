import * as rx from 'rx'
import * as css from './css'
import {div} from './util/dom'
import * as ajax from './util/ajax'
import {toPureView} from './util/pure-view'
import {compose} from 'ramda'

const render = state =>
  div({},
    state.map(r => div({style: css.box}, r.description))
  )

export const Residences = () => {
  const model = ajax.get('/residences')

  return {
    model,
    view: model.map(compose(toPureView, render))
  }
}
