import fs from 'node:fs'
import yaml from 'js-yaml'

const data = fs.readFileSync('engines.yml', 'utf8')

const jsonData = yaml.load(data)

const code = `
export type Engines = ${jsonData.map(engine => `'${engine.key}'`).join(' | ')}

export interface Engine {
  key: Engines
  name: string
  /** search pattern */
  url: string
  /** iconify icon @see https://icones.antfu.me/ */
  icones?: string
  /** icon url */
  icon?: string
}

export default ${JSON.stringify(jsonData, null, 2)} as Engine[]
`

fs.writeFileSync('engines.ts', code)

const template = fs.readFileSync('template.md', 'utf8')

const engines = jsonData.map((engine) => {
  const { key, name, url, icones } = engine
  return `| \`${key}\` | ![${icones}](https://api.iconify.design/${icones}.svg?color=currentColor) | ${name} | ${url} |`
}).join('\n')

const readme = template.replace('{{engines}}', engines)

fs.writeFileSync('README.md', readme)
