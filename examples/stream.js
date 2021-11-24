// import dependencies
const { scanFileFromStream } = require('noscan')
const { createReadStream } = require('fs')

// or, using es modules:

// import { scanFileFromStream } from 'noscan'
// import { createReadStream } from 'fs'

async function scanFileAndOutputOnConsole() {
  console.log(await scanFileFromStream(createReadStream(__dirname + '/image.png')))
}
scanFileAndOutputOnConsole() // should output "{ malware: false }" on console