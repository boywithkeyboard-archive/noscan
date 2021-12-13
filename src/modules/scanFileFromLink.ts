import fetch from 'node-fetch'
import { createWriteStream } from 'fs'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningResponse {
  nsfw?: boolean,
  malware?: boolean
}

/** **Scan File from Link**
 * 
 * A function that scans a file from a link.
 */
export default async (url: string, config?: {
  nsfw?: boolean,
  malware?: boolean
}) => {
  //const res = await got(url)

  //got.stream(url).pipe(createWriteStream('image.gif'))

  const answer: ScanningResponse = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}