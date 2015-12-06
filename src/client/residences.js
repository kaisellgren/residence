import * as rx from 'rx'
import * as css from './css'
import {div} from './util/dom'
import * as ajax from './util/ajax'
import {toPureView} from './util/pure-view'
import {compose} from 'ramda'

const createModel = () => ajax.get('/residences')

const createView = state =>
  div({},
    state.map(r => div({style: css.box}, r.description))
  )

export const Residences = () => createModel().map(compose(toPureView, createView))
