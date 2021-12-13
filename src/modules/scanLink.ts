import fetch from 'node-fetch'

/** **Scan Link**
 * 
 * A function that determines whether a link is secure.
 */
export default async (link: URL, config?: {
  raw?: Boolean
}) => {
  try {
    const res = await fetch('https://api.unscan.co/link', { method: 'POST', body: JSON.stringify({ link: link }) })
    const data: any = res.json()

    if (config && config.raw) return data

    return {
      match: !data.safe,
      ...(data.tags && { categories: data.tags ?? [] })
    }
  } catch (err: any) {
    if (!config || !config.raw)
      return null

    return JSON.parse(err.response.body)
  }
}