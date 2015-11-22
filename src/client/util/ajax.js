const rx = require('rx')

exports.get = url => rx.DOM.get(url).pluck('response').map(JSON.parse)
