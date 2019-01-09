module.exports = intent => intent.ns('diff')
  .can([
    'diff files',
    '~[list?] ~[diff] ~[between?] files',
    '~[list?] ~[diff] ~[between?] folders',
  ])
  .examples([
    'diff ./source.js and ./destination.js',
    'list differences between this directory and ./data',
    'show diff between ./frontend and ./app',
    'show comparison between ./data/10.01.json and ./data/10.02.json',
  ])
  .command([
    '~[list?] ~[diff] to @[destination]',
    '~[list?] ~[diff] ~[between?] @[source] ~[and?] @[destination]',
    'compare @[source] ~[and?] @[destination]',
    'compare @[source] ~[to?] @[destination]',
  ], { train: 300, test: 30 })
  .slot('source', { filePathPattern: true })
  .slot('destination', { filePathPattern: true })
  .alias('list', ['list', 'show', 'show me', 'display'])
  .alias('diff', ['diff', 'difference', 'comparison']);
