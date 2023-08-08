import fs from 'node:fs'
import yaml from 'js-yaml'

const data = fs.readFileSync('engines.yml', 'utf8')

const jsonData = yaml.load(data)

const code
= `export interface Engine {
  name: string
  url: string
  icon: string
}

export default ${JSON.stringify(jsonData, null, 2)} as Engine[]`

fs.writeFileSync('engines.ts', code)

const template = fs.readFileSync('template.md', 'utf8')

const engines = jsonData.map((engine) => {
  const { name, url, icon } = engine
  return `| ![https://api.iconify.design/${icon}.svg](https://api.iconify.design/${icon}.svg) | ${name} | ${url} |`
}).join('\n')

const readme = template.replace('{{engines}}', engines)

fs.writeFileSync('README.md', readme)
