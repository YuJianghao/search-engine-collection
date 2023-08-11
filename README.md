# Search Engine Collection

[![NPM version](https://img.shields.io/npm/v/search-engine-collection?color=a1b858&label=)](https://www.npmjs.com/package/search-engine-collection)

A Collection of Search Engines.

## Install

```bash
npm install search-engine-collection
```

## Usage

```ts
import { engines } from 'search-engine-collection'

console.log(engines[0])
// {
//   key: 'google',
//   name: 'Google',
//   url: 'https://www.google.com/search?q=',
// }
```

| Property | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| key      | string | Search Engine Key                                  |
| name     | string | Search Engine Name                                 |
| url      | string | Search Engine URL, you can append keyword after it |

## Engine List

[add one](https://github.com/yujianghao/search-engine-collection/issues/new?assignees=yujianghao&labels=new-engine&title=Request+new+engine&body=Please+add+the+following+engine+to+the+list%3A%0A%0A%7C+icon+%7C+name+%7C+url+%7C%0A%7C+----+%7C+----+%7C+---+%7C%0A%7C+%5B%5Bicon%5D%5D+%7C+%5B%5Bname%5D%5D+%7C+%5B%5Burl%5D%5D+%7C%0A)

| key | name | url |
| --- | ---- | --- |
| `google` | Google | `https://www.google.com/search?q=` |
| `github` | Github | `https://github.com/search?q=` |
| `npm` | NPM | `https://www.npmjs.com/search?q=` |
| `bing` | Bing | `https://www.bing.com/search?q=` |
| `yahoo` | Yahoo | `https://search.yahoo.com/search?p=` |
| `zhihu` | Zhihu | `https://www.zhihu.com/search?q=` |
| `dockerhub` | DockerHub | `https://hub.docker.com/search?q=` |
| `stackoverflow` | StackOverflow | `https://stackoverflow.com/search?q=` |
| `wikipedia` | Wikipedia | `https://en.wikipedia.org/wiki/` |
| `mdn` | MDN | `https://developer.mozilla.org/en-US/search?q=` |
| `duckduckgo` | DuckDuckGo | `https://duckduckgo.com/?q=` |
| `amazon` | Amazon | `https://www.amazon.com/s?k=` |
| `twitter` | Twitter | `https://twitter.com/search?q=` |
| `reddit` | Reddit | `https://www.reddit.com/search/?q=` |
| `youtube` | YouTube | `https://www.youtube.com/results?search_query=` |
| `linkedin` | LinkedIn | `https://www.linkedin.com/search/results/all/?keywords=` |
| `instagram` | Instagram | `https://www.instagram.com/explore/tags/` |
| `pinterest` | Pinterest | `https://www.pinterest.com/search/pins/?q=` |
| `imdb` | IMDB | `https://www.imdb.com/find?q=` |
| `rottentomatoes` | Rotten Tomatoes | `https://www.rottentomatoes.com/search?search=` |
| `bilibili` | Bilibili | `https://search.bilibili.com/all?keyword=` |
| `gitlab` | Gitlab | `https://gitlab.com/search?search=` |

[add one](https://github.com/yujianghao/search-engine-collection/issues/new?assignees=yujianghao&labels=new-engine&title=Request+new+engine&body=Please+add+the+following+engine+to+the+list%3A%0A%0A%7C+icon+%7C+name+%7C+url+%7C%0A%7C+----+%7C+----+%7C+---+%7C%0A%7C+%5B%5Bicon%5D%5D+%7C+%5B%5Bname%5D%5D+%7C+%5B%5Burl%5D%5D+%7C%0A)

## License

[MIT](./LICENSE) License © 2011 ~ 2023 [Yu Jianghao](https://github.com/yujianghao)
