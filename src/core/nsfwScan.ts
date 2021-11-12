import got from 'got'

export default async (stream: any) => {
  try {
    const { body } = await got.post('https://api.unscan.co/nsfw', {
      json: {
        file: stream
      }
    })
    
    const data: any = JSON.parse(body)
    return data.nsfw
  } catch (err: any) {
    return null
  }
}