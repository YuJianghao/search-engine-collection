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

| Property | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| name     | string | Search Engine Name                                 |
| url      | string | Search Engine URL, you can append keyword after it |
| icon     | string | icons from <https://icones.antfu.me/>              |

## Engine List

[add one](https://github.com/yujianghao/search-engine-collection/issues/new?assignees=yujianghao&labels=new-engine&title=Request+new+engine&body=Please+add+the+following+engine+to+the+list%3A%0A%0A%7C+icon+%7C+name+%7C+url+%7C%0A%7C+----+%7C+----+%7C+---+%7C%0A%7C+%5B%5Bicon%5D%5D+%7C+%5B%5Bname%5D%5D+%7C+%5B%5Burl%5D%5D+%7C%0A)

| icon | name | url |
| ---- | ---- | --- |
| ![logos:google-icon](https://api.iconify.design/logos:google-icon.svg?color=currentColor) | Google | https://www.google.com/search?q= |
| ![logos:github-octocat](https://api.iconify.design/logos:github-octocat.svg?color=currentColor) | Github | https://github.com/search?q= |
| ![logos:npm-icon](https://api.iconify.design/logos:npm-icon.svg?color=currentColor) | NPM | https://www.npmjs.com/search?q= |
| ![logos:bing](https://api.iconify.design/logos:bing.svg?color=currentColor) | Bing | https://www.bing.com/search?q= |
| ![logos:yahoo](https://api.iconify.design/logos:yahoo.svg?color=currentColor) | Yahoo | https://search.yahoo.com/search?p= |
| ![simple-icons:zhihu](https://api.iconify.design/simple-icons:zhihu.svg?color=currentColor) | Zhihu | https://www.zhihu.com/search?q= |
| ![simple-icons:baidu](https://api.iconify.design/simple-icons:baidu.svg?color=currentColor) | Baidu | https://www.baidu.com/s?wd= |

[add one](https://github.com/yujianghao/search-engine-collection/issues/new?assignees=yujianghao&labels=new-engine&title=Request+new+engine&body=Please+add+the+following+engine+to+the+list%3A%0A%0A%7C+icon+%7C+name+%7C+url+%7C%0A%7C+----+%7C+----+%7C+---+%7C%0A%7C+%5B%5Bicon%5D%5D+%7C+%5B%5Bname%5D%5D+%7C+%5B%5Burl%5D%5D+%7C%0A)

## License

[MIT](./LICENSE) License © 2022 [Yu Jianghao](https://github.com/yujianghao)
