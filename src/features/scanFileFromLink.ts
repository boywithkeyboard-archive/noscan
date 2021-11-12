import bent from 'bent'
import malwareScan from '../core/malwareScan'
import nsfwScan from '../core/nsfwScan'

/** **Scan a File from a Link**
 * 
 * @param url - the url
 * @param config - the configuration
 */
export const scanFileFromLink = async (url: string, config?: ScanningConfiguration) => {
  const getStream = bent('')
  const stream = await getStream(url)

  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}