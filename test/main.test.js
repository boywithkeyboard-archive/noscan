const { scanLink, scanFileFromLink, scanFileFromLocation, scanFileFromBuffer, scanFileFromStream } = require('../build/index.js')
const fs = require('fs')

test('scan link', async () => {
  expect(await scanLink('unscan.co')).toBe({
    match: false
  })

  expect(await scanLink('pornhub.com')).toBe({
    match: false,
    categories: ['PORN']
  })
})

/*
test('scan file from link', async () => {
  expect(await scanFileFromLink('https://cdn.jsdelivr.net/npm/@azury/cdn@2.9.0/963b8022a7e2eb6a.png')).toBe()
})

test('scan file from location', async () => {
  expect(await scanFileFromLocation(__dirname + '/image.png')).toBe()
})

test('scan file from buffer', async () => {
  const buffer = Buffer.from('STUPID AS F*CK', 'utf-8')
  expect(await scanFileFromBuffer(buffer)).toBe()
})

test('scan file from stream', async () => {
  expect(await scanFileFromStream(fs.createReadStream(__dirname + '/image.png'))).toBe()
})
*/