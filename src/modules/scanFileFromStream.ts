import { ReadStream } from 'fs'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningConfiguration {
  nsfw?: Boolean,
  malware?: Boolean
}

/** ### Scan File from Stream
 * 
 * @param stream
 * @param config
 */
export const scanFileFromStream = async (stream: ReadStream, config: ScanningConfiguration) => {
  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}