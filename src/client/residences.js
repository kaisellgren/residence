import * as rx from 'rx'
import * as css from './css'
import {div} from './util/dom'
import * as ajax from './util/ajax'

export const model = () => ajax.get('/residences')

export const render = state =>
  div({},
    state.map(r => div({style: css.box}, r.description))
  )
