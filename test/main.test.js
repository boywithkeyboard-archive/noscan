const { scanLink, isNSFW, isMalware, scanFileFromLink, scanFileFromLocation, scanFileFromBuffer, scanFileFromStream } = require('../build/index.js')
const fs = require('fs')

/*
test('scan link', async () => {
  expect(await scanLink('unscan.co')).toBe({
    match: false
  })

  expect(await scanLink('pornhub.com')).toBe({
    match: true,
    categories: ['PORN']
  })
})
*/

test('check if file is nsfw', async () => {
  const stream = fs.createReadStream(__dirname + '/image.png')
  expect(await isNSFW(stream)).toBe(false)
})

test('check if file is malware', async () => {
  const stream = fs.createReadStream(__dirname + '/image.png')
  expect(await isMalware(stream)).toBe(false)
})

/*
test('scan file from buffer', async () => {
  const buffer = Buffer.from('Hello World', 'utf-8')

  expect(await scanFileFromBuffer(buffer)).toStrictEqual({
    malware: false
  })

  expect(await scanFileFromBuffer(buffer, {
    nsfw: true
  })).toStrictEqual({
    malware: false,
    nsfw: false
  })
})
*/

/*
test('scan file from stream', async () => {
  const stream = fs.createReadStream(__dirname + '/image.png')

  expect(await scanFileFromStream(stream)).toStrictEqual({
    malware: false
  })

  expect(await scanFileFromStream(stream, {
    nsfw: true
  })).toStrictEqual({
    malware: false,
    nsfw: false
  })
})
*/

/*
test('scan file from link', async () => {
  expect(await scanFileFromLink('https://cdn.jsdelivr.net/npm/@azury/cdn@2.9.0/963b8022a7e2eb6a.png')).toBe()
})

test('scan file from location', async () => {
  expect(await scanFileFromLocation(__dirname + '/image.png')).toBe()
})
*/