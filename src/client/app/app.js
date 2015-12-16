import * as rx from 'rx'
import * as css from'./css'
import {combineTemplate} from '../util/rx'
import {div, h1, p, a, pseudo} from '../util/dom'
import {Residences} from '../residences/residences'
import {Router} from '../../shared/router'
import * as routes from '../../shared/routes'
import {toPureView} from '../util/pure-view'
import {compose} from 'ramda'

const createModel = () => {
  const router = Router()
  const residences = Residences()

  return combineTemplate({router, residences})
}

const createView = state =>
  div({style: css.container}, [
    div({style: css.header}, [
      div({style: css.headerTitleColumn},
        h1({style: css.headerTitle}, 'Residence')
      ),
      div({style: css.menu}, [
        pseudo(a({style: css.menuItem, href: routes.home, onclick: state.router.paginate}, 'Etusivu')),
        pseudo(a({style: css.menuItem, href: routes.residences, onclick: state.router.paginate}, 'Asunnot'))
      ])
    ]),
    div({}, [
      state.router.route == routes.home ?
        div({style: css.homeContainer}, [
          div({style: css.introduction}, [
            h1({style: css.frontPageTitle}, 'Löydä unelmiesi koti jo tänään'),
            p({style: css.frontPageDescription}, 'Residence tarjoaa Suomen laajimman valikoiman asuntojen ostamiseen. No lol.')
          ])
        ]) : null,
      state.router.route == routes.residences ? state.residences : null
    ]),
    div({style: css.footer}, 'This is a footer')
  ])

export const App = () => createModel().map(compose(toPureView, createView))
