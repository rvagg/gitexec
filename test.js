'use strict'

const bl      = require('bl')
    , gitexec = require('./')


gitexec.exec(__dirname, 'git log --format=\'%H %cd\'')
  .pipe(bl((err, data) => {
    if (err)
      throw err

    data = data.toString()

    console.log('------------------\n', data, '------------------------')
  }))