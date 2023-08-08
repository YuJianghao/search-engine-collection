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
//   key: 'google',
//   name: 'Google',
//   url: 'https://www.google.com/search?q=',
//   icon: 'logos:google-icon',
// }
```

| Property | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| key      | string | Search Engine Key                                  |
| name     | string | Search Engine Name                                 |
| url      | string | Search Engine URL, you can append keyword after it |
| icon     | string | icons from <https://icones.antfu.me/>              |

## Engine List

[add one](https://github.com/yujianghao/search-engine-collection/issues/new?assignees=yujianghao&labels=new-engine&title=Request+new+engine&body=Please+add+the+following+engine+to+the+list%3A%0A%0A%7C+icon+%7C+name+%7C+url+%7C%0A%7C+----+%7C+----+%7C+---+%7C%0A%7C+%5B%5Bicon%5D%5D+%7C+%5B%5Bname%5D%5D+%7C+%5B%5Burl%5D%5D+%7C%0A)

| key | icon | name | url |
| --- | ---- | ---- | --- |
{{engines}}

[add one](https://github.com/yujianghao/search-engine-collection/issues/new?assignees=yujianghao&labels=new-engine&title=Request+new+engine&body=Please+add+the+following+engine+to+the+list%3A%0A%0A%7C+icon+%7C+name+%7C+url+%7C%0A%7C+----+%7C+----+%7C+---+%7C%0A%7C+%5B%5Bicon%5D%5D+%7C+%5B%5Bname%5D%5D+%7C+%5B%5Burl%5D%5D+%7C%0A)

## License

[MIT](./LICENSE) License © 2022 [Yu Jianghao](https://github.com/yujianghao)
