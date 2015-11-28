import * as rx from 'rx'

export const Router = () => {
  const getCurrentRoute = () => window.location.pathname
  const route = new rx.BehaviorSubject(getCurrentRoute())

  return {
    route,
    paginate: (e) => {
      const pathname = e.target.getAttribute('href')
      window.history.pushState(null, 'Test', pathname)
      route.onNext(pathname)
      e.preventDefault()
      e.stopPropagation()
    },
    getCurrentRoute
  }
}
