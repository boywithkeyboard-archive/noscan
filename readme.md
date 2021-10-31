# noscan

**A more flexible SDK for unscan** 💪🔎

Why should you use **noscan** rather than the [official SDK](https://npm.im/unscan)?

- fully asynchronous
- 100% coverage of the unscan API
- make use of it anywhere

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
  console.log(await scanFileFromStream(stream)) // scan file for malware
  console.log(await scanFileFromStream(stream, {
    nsfw: true,
    malware: true
  })) // scan file for malware and nsfw
  console.log(await scanFileFromStream(stream, {
    nsfw: true,
    malware: false
  })) // scan file for nsfw, but not for malware
})()
```

## API

### Features

- [`scanFileFromStream(stream, config)`]()
- [`scanFileFromLink(link, config)`]()
- [`scanFileFromLocation(location, config)`]()
- [`scanFileFromBuffer(buffer, config)`]()
- [`scanLink(link)`]()

### Configuration

- [`malware`]()
- [`nsfw`]()

