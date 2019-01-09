module.exports = intent => intent.ns('permission_secure')
  .can([
    'secure file perms',
    'secure file ~[perms]',
  ])
  .examples([
    'secure perms ./key',
    'secure ./dest.pem permissions',
  ])
  .command([
    'secure ~[perms] @[source]',
    'secure @[source] ~[perms]',
    'make @[source] ~[perms] secure',
  ], { train: 200, test: 20 })
  .alias('perms', ['perms', 'permissions'])
  .slot('source', { filePathPattern: true });
