module.exports = intent => intent.ns('permission_alter')
  .can([
    '~[alter] file ~[perms]',
    '~[alter] folder ~[perms]',
  ])
  .examples([
    'make ./source.sh executable',
    'make filename.json readable only by me and group',
    'make file.js readable by everyone, writable by me',
  ])
  .command([
    'make @[target?] @[source] ~[permission_clause_simple]',
    'make @[target?] ~[at?] @[source] ~[permission_clause_simple]',
    'make @[target?] ~[permission_clause_simple] ~[for?] @[source]',
    'allow @[target?] ~[at?] @[source] to be @[permissions]',
    'allow @[target?] ~[at?] @[source] to be @[permissions] @[only?] ~[by] @[users]',
    'change @[target?] @[source] ~[perms] ~[to?] @[number_permissions]',
    'change ~[perms] ~[for?] @[target?] @[source], ~[permission_clause_simple]',
    'change ~[perms] ~[for?] @[target?] @[source] ~[to?] ~[permission_clause_simple]',
    'change ~[perms] ~[to?] @[number_permissions] ~[for?] @[target?] @[source]',
    'change ~[perms] ~[to?] ~[permission_clause_simple] ~[for?] @[target?] @[source]',
  ], { train: 600, test: 60 })
  .command([
    'make @[target?] @[source] ~[permission_clause]',
    'make @[target?] ~[at?] @[source] ~[permission_clause]',
    'make @[target?] ~[permission_clause] ~[for?] @[source]',
    'change ~[perms] ~[for?] @[target?] @[source], ~[permission_clause]',
    'change ~[perms] ~[for?] @[target?] @[source] ~[to?] ~[permission_clause]',
    'change ~[perms] ~[to?] ~[permission_clause] ~[for?] @[target?] @[source]',
  ], { train: 600, test: 60, type: 'advanced' })
  .slot('source', { filePathPattern: true })
  .slot('target', ['file', '~[_dir]'])
  .slot('number_permissions', ['~[_digit]~[_digit]~[_digit]'])
  .slot('only', ['~[only]'])
  .slot('users', [
    '~[user]',
    '~[user] and ~[group]',
    '~[user], ~[group]',
    '~[user] and ~[other]',
    '~[user], ~[other]',
    '~[group] and ~[other]',
    '~[group], ~[other]',
    '~[group]',
    '~[other]',
    '~[everybody]',
    '~[nobody]',
  ])
  .slot('permissions', [
    '~[read]',
    '~[write]',
    '~[execute]',
    '~[read] and ~[write]',
    '~[read], ~[write]',
    '~[read] and ~[execute]',
    '~[read], ~[execute]',
    '~[write] and ~[execute]',
    '~[write], ~[execute]',
    '~[everything]',
    '~[nothing]',
  ])
  .alias('permission_clause', [
    '~[permission_clause_simple] ~[and?] ~[permission_clause_simple?] ~[and?] ~[permission_clause_simple?]',
    '~[permission_clause_simple], ~[permission_clause_simple]',
    '~[permission_clause_simple], ~[permission_clause_simple], ~[permission_clause_simple]',
  ])
  .alias('permission_clause_simple', [
    '@[permissions]',
    '@[permissions] @[only?] ~[by] @[users]',
    '@[only?] @[users] ~[can?] @[permissions]',
  ])
  .alias('only', ['only', 'just'])
  .alias('can', ['can', 'to', 'are allowed to', 'is allowed to', 'may', 'shall'])
  .alias('everybody', ['everyone', 'everybody', 'anyone', 'all', 'all users'])
  .alias('nobody', ['nobody', 'noone', 'no one', 'none', 'no users'])
  .alias('user', ['user', 'me', 'i'])
  .alias('everything', ['~[do?] everything', '~[do?] anything'])
  .alias('nothing', ['~[do?] nothing'])
  .alias('read', ['~[not?] read', '~[not?] readable'])
  .alias('write', ['~[not?] write', '~[not?] writable'])
  .alias('execute', ['~[not?] execute', '~[not?] executable', '~[not?] run', '~[not?] runnable'])
  .alias('group', ['~[inside?] ~[my?] group'])
  .alias('inside', ['inside', 'within'])
  .alias('other', ['other', 'outside group'])
  .alias('allow', ['allow', 'allow to', 'permit'])
  .alias('by', ['by', 'to'])
  .alias('perms', ['perms', 'permissions'])
  .alias('alter', ['alter', 'change', 'modify', 'set']);
