import { Readable } from 'stream'
import malwareScan from '../core/malwareScan'
import nsfwScan from '../core/nsfwScan'

/** **Scan File from a Buffer**
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