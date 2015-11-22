const rx = require('rx')
const css = require('./css')
const dom = require('./util/dom')
const residences = require('./residences')
const div = dom.div, h1 = dom.h1, a = dom.a, p = dom.p

exports.model = () => {
  var residencesModel = residences.model()
  return residencesModel
}

exports.render = state =>
  div({style: css.container}, [
    div({style: css.header}, [
      div({style: css.headerTitleColumn},
        h1({style: css.headerTitle}, 'Residence')
      ),
      div({style: css.menu}, [
        a({style: css.menuItem}, 'Etusivu'),
        a({style: css.menuItem}, 'Asunnot')
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
