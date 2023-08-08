import fs from 'node:fs'
import yaml from 'js-yaml'

const data = fs.readFileSync('engines.yml', 'utf8')

const jsonData = yaml.load(data)

const code
= `export interface Engine {
  key: string
  name: string
  url: string
  icon: string
}

export default ${JSON.stringify(jsonData, null, 2)} as Engine[]`

fs.writeFileSync('engines.ts', code)

const template = fs.readFileSync('template.md', 'utf8')

const engines = jsonData.map((engine) => {
  const { key, name, url, icon } = engine
  return `| \`${key}\` | ![${icon}](https://api.iconify.design/${icon}.svg?color=currentColor) | ${name} | ${url} |`
}).join('\n')

const readme = template.replace('{{engines}}', engines)

fs.writeFileSync('README.md', readme)
