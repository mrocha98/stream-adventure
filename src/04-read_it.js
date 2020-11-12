const { Readable } = require('stream')

class ReadableStream extends Readable {
  _read(size) {}
}

const stream = new ReadableStream()

const data = process.argv[2]

stream.push(data)
stream.pipe(process.stdout)