# noscan

**A more flexible SDK for [unscan.co](https://unscan.co)** 🔞🔎

- **fully asynchronous**
- **100% coverage of unscan**
- **typescript support**
- **built-in error handling**

###### 🤖 Check out our [Discord Bot](https://discord.com/api/oauth2/authorize?client_id=911314267624587294&permissions=274878254080&scope=bot)!

## Installation

### Install the Package

Install **noscan** using your favorite package manager.

```sh-session
npm i noscan
yarn add noscan
```

### Usage

```js
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createReadStream } from 'fs'
import { isNSFW } from 'noscan'

(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url)) // workaround for using __dirname with es modules
  const stream = createReadStream(__dirname + '/image.png')
  
  console.log(await isNSFW(stream)) // gives out 'true' or 'false' on console
})()
```

## API

### File Scanning

#### Features

- [`isMalware(stream)`]()
- [`isNSFW(stream)`]()
- [`scanFileFromStream(stream, options)`]()
- [`scanFileFromLink(url, options)`]()
- [`scanFileFromLocation(path, options)`]()
- [`scanFileFromBuffer(buffer, options)`]()

### Link Scanning

#### Features

- [`scanLink(url)`]()
