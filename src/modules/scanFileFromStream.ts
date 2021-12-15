import { ReadStream } from 'fs'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningResponse {
  nsfw?: boolean,
  malware?: boolean
}

/** **Scan File from Stream**
 * 
 * A function that scans a file from a readable stream.
 */
export default async (stream: ReadStream, config: {
  nsfw?: boolean,
  malware?: boolean
}) => {
  const answer: ScanningResponse = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}