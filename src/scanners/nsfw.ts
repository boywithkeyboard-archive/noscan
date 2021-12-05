import fetch from 'node-fetch'

export default async (stream: any) => {
  try {
    const res = await fetch('https://api.unscan.co/nsfw', { method: 'POST', body: JSON.stringify({ file: stream }) })
    const data: any = await res.json()
    return data.nsfw
  } catch (err: any) {
    return null
  }
}