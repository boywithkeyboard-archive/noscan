import got from 'got'

/** **Scan a Link**
 * 
 * @param url - the url
 * @param config - the configuration
 */
export const scanLink = async (url: URL, config?: LinkScanningConfiguration) => {
  try {
    const { body } = await got.post('https://api.unscan.co/link', {
      json: {
        link: url
      }
    })
    
    const data: any = JSON.parse(body)

    if (config && config.raw) return data
    return {
      match: !data.safe,
      tags: data.tags ?? []
    }
  } catch (err: any) {
    if (!config || !config.raw) return null

    return JSON.parse(err.response.body)
  }
}