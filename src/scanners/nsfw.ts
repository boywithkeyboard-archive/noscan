import fetch from 'node-fetch'
import formData from 'form-data'

export default async (stream: any) => {
  try {
    const form = new formData()
    form.append('file', stream)

    const res = await fetch('https://api.unscan.co/nsfw', {
      method: 'POST',
      body: form
    })
    const data: any = await res.json()

    return data.nsfw
  } catch (err) {
    throw err
  }
}