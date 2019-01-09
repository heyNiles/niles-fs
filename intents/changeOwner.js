module.exports = intent => intent.ns('change_owner')
  .can([
    'change file and dir owners',
    'change ~[a?] ~[file] owner',
    'change ~[file] owners',
  ])
  .examples([
    'make me owner of ./file.txt',
    'for index.py change owner to guest',
    'change owner of file ./data.xls to admin',
    'change owner of ./frontend to info',
  ])
  .command([
    'change ~[file?] @[source] owner to @[owner]',
    'make @[owner] ~[the?] owner of ~[file?] @[source]',
    'make @[owner] own ~[file?] @[source]',
    'change ~[the?] owner to @[owner] for ~[file?] @[source]',
    'for ~[file?] @[source] change ~[the?] owner to @[owner]',
    'change ~[the?] owner of ~[file?] @[source] to @[owner]',
  ], { train: 600, test: 60 })
  .slot('source', { filePathPattern: true })
  .alias('file', ['file', '~[folder]'])
  .alias('folder', ['folder', 'dir', 'directory']);
