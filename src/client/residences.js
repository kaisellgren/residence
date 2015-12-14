import * as rx from 'rx'
import * as css from './css'
import {div, h1, p} from './util/dom'
import * as ajax from './util/ajax'
import {toPureView} from './util/pure-view'
import {compose} from 'ramda'

const createModel = () => ajax.get('/residences').startWith([])

const createView = state =>
  div({style: css.residences},
    div({style: css.residencesContainer},
      state.map(r =>
        div({style: css.residencesItem}, [
          h1({style: css.residencesItemTitle}, r.title),
          p({style: css.residencesItemDescriptionm}, r.description)
        ])
      )
    )
  )

export const Residences = () => createModel().map(compose(toPureView, createView))
