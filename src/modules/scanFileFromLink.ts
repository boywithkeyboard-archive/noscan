import got from 'got'
import { createWriteStream } from 'fs'
import malwareScan from '../core/malwareScan'
import nsfwScan from '../core/nsfwScan'

/** **Scan File from a Link**
 * 
 * @param url - the url
 * @param config - the configuration
 */
export const scanFileFromLink = async (url: string, config?: ScanningConfiguration) => {
  const res = await got(url)

  got.stream(url).pipe(createWriteStream('image.gif'))

  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}