const path = require('path')

exports.config = {
  server: {
    port: 80,
    hostname: '0.0.0.0'
  },
  cloud: {
    projectId: 'residence-1144',
    keyFilename: path.resolve(__dirname, 'gcloud.json'),
    datastore: {
      namespace: 'dev'
    }
  }
}
