# noscan

**A more flexible SDK for unscan** 💪🔎

Why should you use **noscan** rather than the [official SDK](https://npm.im/unscan)?

- fully asynchronous
- 100% coverage of the unscan API
- browser compatible

## Installation

### Install the Package

Install **noscan** using your favorite package manager.

```sh-session
npm i noscan
yarn add noscan
```

Alternatively, you can also use **noscan** with a CDN.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/noscan@1"></script>
<script type="module">
  import { scanFile } from 'https://cdn.jsdelivr.net/npm/noscan@1'
  
  // scan a file
</script>
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

- [`scanFileFromStream(stream, config)`]() (only backend)
- [`scanFileFromLink(link, config)`]() (only backend)
- [`scanFileFromLocation(location, config)`]() (only backend)
- [`scanFileFromBuffer(buffer, config)`]() (only backend)
- [`scanLink(link)`]()

### Configuration

- [`malware`]()
- [`nsfw`]()

