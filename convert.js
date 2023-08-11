import fs from 'node:fs'
import yaml from 'js-yaml'

const data = fs.readFileSync('engines.yml', 'utf8')

const jsonData = yaml.load(data)

const keys = {}
for (const item of jsonData) {
  if (keys[item.key])
    throw new Error(`duplicate key: ${item.key}`)
  keys[item.key] = true
}

const code = `export type Engines = ${jsonData.map(engine => `'${engine.key}'`).join(' | ')}

export interface Engine {
  key: Engines
  name: string
  /** search pattern */
  url: string
}

${jsonData
  .map(
    engine =>
      `export const ${engine.key}: Engine = ${JSON.stringify(engine, null, 2)}`,
  )
  .join('\n\n')}

export default [\n${jsonData.map(engine => `  ${engine.key}`).join(',\n')}\n]
`

fs.writeFileSync('engines.ts', code)

const template = fs.readFileSync('template.md', 'utf8')

const engines = jsonData
  .map((engine) => {
    const { key, name, url } = engine
    return `| \`${key}\` | ${name} | ${url} |`
  })
  .join('\n')

const readme = template.replace('{{engines}}', engines)

fs.writeFileSync('README.md', readme)
