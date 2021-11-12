import { createReadStream, PathLike } from 'fs'
import malwareScan from '../core/malwareScan'
import nsfwScan from '../core/nsfwScan'

/** **Scan a File from a Path**
 * 
 * @param path - the path
 * @param config - the configuration
 */
export const scanFileFromLocation = async (path: PathLike, config?: ScanningConfiguration) => {
  const stream = createReadStream(path)

  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}