module.exports = intent => intent.ns('permission_describe')
  .can([
    'describe file and dir permissions',
    '~[list] file ~[perms]',
  ])
  .examples([
    'describe ./source.sh perms',
    'show filename.json permissions',
    'describe perms for file.js',
  ])
  .command([
    '~[list] @[source] ~[perms]',
    '~[list] ~[perms] for @[source]',
  ], { train: 200, test: 20 })
  .slot('source', { filePathPattern: true })
  .alias('list', ['list', 'show', 'show me', 'display', 'describe'])
  .alias('perms', ['perms', 'permissions']);
