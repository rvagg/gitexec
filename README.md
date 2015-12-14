gitexec
=======

**A specialised child process spawn for `git` commands**

_Compatible with Node.js v4+_

## API

### `gitexec.exec(repoPath, gitCommand)`

Execute `gitCommand` in a newly spawned Bash shell.

Returns a `Stream` with stdout. Any non-zero exit code will cause an `'error'` event on the stream.

Stderr is printed to directly stderr.

### `gitexec.execCollect(repoPath, gitCommand, callback)`

A form of `exec()` that collects stdout and returns it as a single `String` on the `callback`. Any errors encountered will be given as the first argument to the `callback`.

## License

**gitexec** is Copyright (c) 2015 Rod Vagg [@rvagg](https://twitter.com/rvagg) and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.