# Search Engine Collection

[![NPM version](https://img.shields.io/npm/v/search-engine-collection?color=a1b858&label=)](https://www.npmjs.com/package/search-engine-collection)

A Collection of Search Engines.

## Install

```bash
npm install search-engine-collection
```

## Usage

```ts
import engines from 'search-engine-collection'

console.log(engines[0])
// {
//   name: 'Google',
//   url: 'https://www.google.com/search?q=',
//   icon: 'logos:google-icon',
// }
```

| Property | Type   | Description                                           |
| -------- | ------ | ----------------------------------------------------- |
| name     | string | Search Engine Name                                    |
| url      | string | Search Engine URL, you can append keyword after it    |
| icon     | string | icons from <https://icones.antfu.me/collection/logos> |

## License

[MIT](./LICENSE) License © 2022 [Yu Jianghao](https://github.com/yujianghao)
