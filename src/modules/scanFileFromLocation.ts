import { createReadStream, PathLike } from 'fs'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningResponse {
  nsfw?: boolean,
  malware?: boolean
}

/** **Scan Local File**
 * 
 * A function that scans a file from a path.
 */
export default async (path: string, config?: {
  nsfw?: boolean,
  malware?: boolean
}) => {
  const stream = createReadStream(path)

  const answer: ScanningResponse = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}