import { ReadStream } from 'fs'
import nsfw from '../scanners/nsfw'

/** ### Detect NSFW
 * 
 * A function that determines whether a image is NSFW and returns `true` or `false` based on the result.
 */
export default async (image: ReadStream) => {
  return await nsfw(image)
}