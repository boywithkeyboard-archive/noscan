import { createReadStream, PathLike } from 'fs'
import malwareScan from '../scanners/malware'
import nsfwScan from '../scanners/nsfw'

interface ScanningConfiguration {
  nsfw?: Boolean,
  malware?: Boolean
}

/** ### Scan Local File
 * 
 * @param path
 * @param config
 */
export const scanFileFromLocation = async (path: string, config?: ScanningConfiguration) => {
  const stream = createReadStream(path)

  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}