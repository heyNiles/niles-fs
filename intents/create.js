module.exports = intent => intent.ns('create')
  .can([
    'create files',
    'create folders',
  ])
  .examples([
    'create a readme.md file containing "# Hello"',
  ])
  .command([
    '~[create] ~[a new?] @[source?] file',
    '~[create] ~[a new?] @[source?] file ~[content_clause?]',
    '~[create] ~[a new?] file ~[name_clause?] ~[content_clause?]',
    '~[create] ~[a new?] file ~[name_clause?] with content @[content]',
  ], { train: 300, test: 30 })
  .slot('source', { filePathPattern: true })
  .alias('create', ['create', 'make'])
  .alias('a new', ['a new', 'a']);
