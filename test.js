'use strict'

const assert = require('assert')
const bl = require('bl')
const gitexec = require('./')

gitexec.exec(__dirname, 'git log --format="%H %cd"')
  .pipe(bl((err, data) => {
    if (err) { throw err }

    data = data.toString()

    console.log('------------------\n', data, '------------------------')
    const commits = data.split(/[\r\n]+/).filter(Boolean)
    assert.strictEqual('4525f40007bd7200d2a6c8d1e4b742f3567e83c3 Mon Dec 14 21:34:07 2015 +1100', commits[commits.length - 1])
  }))

gitexec.exec(__dirname, 'git log --format="%H %cd"', (err, data) => {
  if (err) { throw err }

  console.log('------------------\n', data, '------------------------')
  const commits = data.split(/[\r\n]+/).filter(Boolean)
  assert.strictEqual('4525f40007bd7200d2a6c8d1e4b742f3567e83c3 Mon Dec 14 21:34:07 2015 +1100', commits[commits.length - 1])
})
