import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    alias: {
      entries: [
        { find: 'engines', replacement: './engines.ts' },
      ],
    },
  },
})
