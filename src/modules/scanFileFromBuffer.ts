import { Readable } from 'stream'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningConfiguration {
  nsfw?: Boolean,
  malware?: Boolean
}

/** ### Scan File from Buffer
 * 
 * @param buffer - the buffer
 * @param config - the configuration
 */
export const scanFileFromBuffer = async (buffer: Buffer, config?: ScanningConfiguration) => {
  const stream = Readable.from(buffer.toString())

  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}