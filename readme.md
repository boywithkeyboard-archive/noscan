# noscan

**A more flexible SDK for unscan** 💪🔎

Why should you use <ins>**noscan**</ins> rather than the [official SDK](https://npm.im/unscan)?

- fully asynchronous
- 100% coverage of the unscan API
- compatible w/ browser + node

## Installation

```sh-session
npm i noscan
yarn add noscan
```

```js
import { scanFileFromStream } from 'noscan'

const try = async () => {
  console.log(await scanFileFromStream(stream))
}
try()
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

