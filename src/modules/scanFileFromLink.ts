import fetch from 'node-fetch'
import { createWriteStream } from 'fs'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningConfiguration {
  nsfw?: Boolean,
  malware?: Boolean
}

/** ### Scan File from Link
 * 
 * @param url
 * @param config
 */
export const scanFileFromLink = async (url: string, config?: ScanningConfiguration) => {
  //const res = await got(url)

  //got.stream(url).pipe(createWriteStream('image.gif'))

  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}