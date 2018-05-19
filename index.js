const server = require('apollo-server-lambda')
const schema = require('./schema')

exports.handler = function(event, context, callback) {
  const callbackFilter = function(error, output) {
    output.headers['Access-Control-Allow-Origin'] = '*'
    callback(error, output)
  }
  const handler = server.graphqlLambda({ schema: schema })

  return handler(event, context, callbackFilter)
}
