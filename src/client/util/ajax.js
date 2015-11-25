import * as rx from 'rx'

export const get = url => rx.DOM.get(url).pluck('response').map(JSON.parse)
