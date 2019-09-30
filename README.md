# gitexec [![Build Status](https://github.com/rvagg/gitexec/workflows/Tests/badge.svg)](https://github.com/rvagg/gitexec/actions)

**A specialised child process spawn for `git` commands**

_Compatible with Node.js 8.x_

Note: while there's nothing currently preventing this from being used to execute arbitrary bash commands, be warned that it's use is focused on git and the API may evolve to be more specific into the future. You're welcome to fork or copy the patterns used if you need similar functionality for other uses.

## API

### `gitexec.exec(repoPath, gitCommand)`

Execute `gitCommand` in a newly spawned Bash shell.

Returns a `Stream` with stdout. Any non-zero exit code will cause an `'error'` event on the stream.

Stderr is printed to directly stderr.

### `gitexec.execCollect(repoPath, gitCommand, callback)`

A form of `exec()` that collects stdout and returns it as a single `String` on the `callback`. Any errors encountered will be given as the first argument to the `callback`.

## License

**gitexec** is Copyright (c) 2015 Rod Vagg [@rvagg](https://twitter.com/rvagg) and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.
