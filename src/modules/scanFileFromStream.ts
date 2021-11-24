import { ReadStream } from 'fs'
import malwareScan from '../core/malwareScan'
import nsfwScan from '../core/nsfwScan'

/** **Scan a File from a Stream**
 * 
 * @param domain - the domain/subdomain
 * @param config - the configuration
 */
export const scanFileFromStream = async (stream: ReadStream | ReadableStream, config: ScanningConfiguration) => {
  const answer: any = {}

  if (config && config.nsfw) answer.nsfw = await nsfwScan(stream)
  if (!config || (config && config.malware !== false)) answer.malware = await malwareScan(stream)

  return answer
}