import * as rx from 'rx'
import * as css from'./css'
import {div, h1, p, a} from './util/dom'
import * as residences from './residences'

export const model = () => {
  var residencesModel = residences.model()
  return residencesModel
}

export const render = state =>
  div({style: css.container}, [
    div({style: css.header}, [
      div({style: css.headerTitleColumn},
        h1({style: css.headerTitle}, 'Residence')
      ),
      div({style: css.menu}, [
        a({style: css.menuItem}, 'Etusivu'),
        a({style: css.menuItem, href: '/asunnot'}, 'Asunnot')
      ])
    ]),
    div({},
      div({style: css.mix.relative}, [
        div({style: css.frontPageBackground}),
        div({style: css.introduction}, [
          h1({style: css.frontPageTitle}, 'Löydä unelmiesi koti jo tänään'),
          p({style: css.frontPageDescription}, 'Residence tarjoaa Suomen laajimman valikoiman asuntojen ostamiseen. No lol.')
        ])
      ])
    ),
    div({style: css.footer}, 'This is a footer')
  ])
