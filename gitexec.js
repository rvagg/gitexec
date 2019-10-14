'use strict'

const { spawn } = require('child_process')
const { BufferListStream } = require('bl')
const { PassThrough } = require('stream')

function exec (repoPath, gitcmd) {
  const child = spawn(gitcmd, { env: process.env, cwd: repoPath, shell: true })
  const pt = new PassThrough()

  child.stderr.pipe(BufferListStream((err, data) => {
    if (err) {
      return child.stdout.emit('error', err)
    }

    if (data.length) {
      process.stderr.write(data)
    }
  }))

  child.on('close', (code) => {
    if (code) {
      pt.emit(
        'error',
        new Error(`git command [${gitcmd}] exited with code ${code}`)
      )
    }
    pt.end()
  })

  return child.stdout.pipe(pt, { end: false })
}

function execCollect (repoPath, gitcmd, callback) {
  exec(repoPath, gitcmd).pipe(BufferListStream((err, data) => {
    if (err) {
      return callback(err)
    }

    callback(null, data.toString())
  }))
}

module.exports.exec = exec
module.exports.execCollect = execCollect
