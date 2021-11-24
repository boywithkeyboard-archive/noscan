# noscan

[![npm](https://img.shields.io/npm/v/noscan)](https://www.npmjs.com/package/noscan)
[![npm](https://img.shields.io/npm/dt/noscan)](https://www.npmjs.com/package/noscan)
[![GitHub last commit](https://img.shields.io/github/last-commit/azurystudios/noscan)](https://github.com/azurystudios/noscan)
[![GitHub issues](https://img.shields.io/github/issues-raw/azurystudios/noscan)](https://github.com/azurystudios/noscan/issues)
[![snyk vulnerabilities](https://snyk.io/test/github/azurystudios/noscan/badge.svg)](https://snyk.io/test/github/azurystudios/noscan)

**A more flexible SDK for [unscan](https://unscan.co)** 🔞🔎

- fully asynchronous
- 100% coverage of the unscan API
- typescript support

🤖 [**Discord Bot**](https://github.com/noscanjs/discord) + [**Telegram Bot**](https://github.com/noscanjs/discord) `COMING SOON`      
💻 [**CLI**](https://github.com/noscanjs/cli) `COMING SOON`

## Installation

### Install the Package

Install **noscan** using your favorite package manager.

```sh-session
npm i noscan
yarn add noscan
```

### Usage

```js
import { scanFileFromStream } from 'noscan'

(async () => {
  await scanFileFromStream(stream)
})()
```

## File Scanning

### Functions

```js
// scan a file from a readable stream
await scanFileFromStream(ReadStream, ScanningConfiguration)

// scan a file from a url → alias: scanFileFromURL
await scanFileFromLink(URL, ScanningConfiguration)

// scan a local file
await scanFileFromLocation(PathLike, ScanningConfiguration)

// scan a file from a buffer
await scanFileFromBuffer(Buffer, ScanningConfiguration)
```

### Response

```js
{
  nsfw: Boolean || undefined,
  malware: Boolean || undefined
}
```

> noscan will return `null` when something went wrong.

### Configuration

- `nfsw` to scan file for nsfw (`BOOLEAN`)
- `malware` to scan file for malware (`BOOLEAN`) *→ enabled by default*

## Link Scanning

### Functions

```js
// scan a link → alias: scanURL
await scanLink(URL, LinkScanningConfiguration)
```

### Configuration

- `raw` to get the raw response from unscan (`BOOLEAN`)

### Response

```js
{
  match: Boolean,
  tags: Array
}
```

> noscan will return `null` when something went wrong.

