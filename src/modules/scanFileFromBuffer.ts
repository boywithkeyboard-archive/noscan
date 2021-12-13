import { Readable } from 'stream'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningResponse {
  nsfw?: boolean,
  malware?: boolean
}

/** **Scan File from Buffer**
 * 
 * A function that scans a file from a buffer.
 */
export default async (buffer: Buffer, config?: {
  nsfw?: boolean,
  malware?: boolean
}) => {
  const stream = Readable.from(buffer.toString())

  const answer: ScanningResponse = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}