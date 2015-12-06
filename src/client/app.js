import * as rx from 'rx'
import * as css from'./css'
import {div, h1, p, a} from './util/dom'
import {Residences} from './residences'
import {Router} from '../shared/router'
import * as routes from '../shared/routes'

export const model = () => {
  const router = Router()
  const residences = Residences()

  return rx.Observable.combineLatest(router.route, residences.view, (route, residencesView) => ({
    router, route, residencesView
  }))
}

export const render = state =>
  div({style: css.container}, [
    div({style: css.header}, [
      div({style: css.headerTitleColumn},
        h1({style: css.headerTitle}, 'Residence')
      ),
      div({style: css.menu}, [
        a({style: css.menuItem, href: routes.home, onclick: state.router.paginate}, 'Etusivu'),
        a({style: css.menuItem, href: routes.residences, onclick: state.router.paginate}, 'Asunnot')
      ])
    ]),
    div({}, [
      state.route == routes.home ?
        div({style: css.mix.relative}, [
          div({style: css.frontPageBackground}),
          div({style: css.introduction}, [
            h1({style: css.frontPageTitle}, 'Löydä unelmiesi koti jo tänään'),
            p({style: css.frontPageDescription}, 'Residence tarjoaa Suomen laajimman valikoiman asuntojen ostamiseen. No lol.')
          ])
        ]) : null,
      state.route == routes.residences ?
        state.residencesView
        : null
      ]
    ),
    div({style: css.footer}, 'This is a footer')
  ])
