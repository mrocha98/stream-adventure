const { Writable } = require('stream')

class WritableStream extends Writable {
  _write (chunk, enconding, cb) {
    console.log(`writing: ${chunk.toString()}`)
    cb()
  }
}

const stream = new WritableStream()
process.stdin.pipe(stream)
