'use strict'

const nock = require('../.')
const { test } = require('tap')
const request = require('request')

test('request lib', function(t) {
  nock('http://example.test')
    .get('/')
    .delay(1000)
    .reply(200, {})

  request(
    {
      url: 'http://example.test',
      timeout: 10,
    },
    function(err, response) {
      t.ok(err)
      t.equal(err.code, 'ESOCKETTIMEDOUT')
      t.end()
    }
  )
})
