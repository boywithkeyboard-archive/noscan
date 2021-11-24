import { ReadStream } from 'fs';
/** **Scan a File from a Stream**
 *
 * @param domain - the domain/subdomain
 * @param config - the configuration
 */
export declare const scanFileFromStream: (stream: ReadStream | ReadableStream, config: ScanningConfiguration) => Promise<any>;
