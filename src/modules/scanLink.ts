import got from 'got'

/** **Scan Link**
 * 
 * @param link
 * @param config
 */
export const scanLink = async (link: URL, config?: LinkScanningConfiguration) => {
  try {
    const { body } = await got.post('https://api.unscan.co/link', {
      json: {
        link: link
      }
    })
    
    const data: any = JSON.parse(body)

    if (config && config.raw)
      return data

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