import { PathLike } from 'fs';
/** **Scan a Local File**
 *
 * @param path - the path
 * @param config - the configuration
 */
export declare const scanFileFromLocation: (path: PathLike, config?: ScanningConfiguration | undefined) => Promise<any>;
