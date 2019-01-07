module.exports = intent => intent.ns('create_alias')
  .can([
    '~[create] ~[a?] ~[alias]',
  ])
  .examples([
    'create an alias to ./projects/themes',
  ])
  .command([
    '~[create] ~[a new?] ~[alias] to @[destination]',
    '~[create] ~[a new?] ~[alias] ~[name_clause?] to @[destination]',
  ], { train: 300, test: 30 })
  .slot('destination', { filePathPattern: true })
  .alias('create', ['create', 'make'])
  .alias('a new', ['a new', 'a'])
  .alias('alias', ['alias', 'shortcut', 'symlink']);
