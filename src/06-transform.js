const through = require('through2')  

function write(buffer, enconding, next) {
  const data = buffer.toString().toUpperCase() 
  this.push(data)
  next()
}

function end(done) {
  done()
}

const stream = through(write, end) 

process.stdin.pipe(stream).pipe(process.stdout)
