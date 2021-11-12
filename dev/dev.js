const { scanLink, scanFileFromLink, scanFileFromLocation, scanFileFromBuffer, scanFileFromStream } = require('../build/index.js')
const fs = require('fs')

const dev = async () => {
  // scan link
  // console.log(await scanLink('unscan.co'))

  // scan file from link
  // console.log(await scanFileFromLink('https://cdn.jsdelivr.net/npm/@azury/cdn@2.6.0/963b8022a7e2eb6a.png'))

  // scan file from location
  // console.log(await scanFileFromLocation(__dirname + '/image.png'))

  // scan file from buffer
  // const buffer = Buffer.from("I'm a string!", "utf-8")
  // console.log(await scanFileFromBuffer(buffer))

  // scan file from stream
  // console.log(await scanFileFromStream(fs.createReadStream(__dirname + '/image.png')))
}
dev()