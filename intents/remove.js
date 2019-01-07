module.exports = intent => intent.ns('remove')
  .can([
    '~[remove] files',
    '~[remove] folder',
  ])
  .examples([
    'delete js files created before today',
    'trash all doc files with more than 3560 number of lines',
    'remove .md files bigger than 1 mb',
    'remove config files that do not contain "KEY"',
    'remove script files not owned by administrator but excluding hidden files',
    'delete files named "proj*.tar.gz"',
    'remove markdown files where the the filename does not include "tmp"',
    'trash all symlink files updated this year, that contain "elasticsearch" but not in ./build',
    'remove files with fewer than two hundred tb, of type js but exclude .gitignore',
    'remove py files including "elasticsearch" created later than this month not in .gitignore',
  ])
  .command([
    '~[remove] ~[all?] files ~[filter_clause]',
    '~[remove] ~[all?] @[extension?] files ~[filter_clause]',
  ], { train: 600, test: 60 })
  .command([
    '~[remove] ~[all?] files ~[size_clause]',
    '~[remove] ~[all?] @[extension?] files ~[size_clause]',
  ], { train: 300, test: 30, type: 'by_size' })
  .command([
    '~[remove] ~[all?] files ~[property_clause]',
    '~[remove] ~[all?] @[extension?] files ~[property_clause]',
  ], { train: 300, test: 30, type: 'by_property' })
  .command([
    '~[remove] ~[all?] @[extension?] files ~[compound_filter_clause?] ~[excluding_clause?]',
    '~[remove] ~[all?] @[extension?] files ~[excluding_clause?] ~[compound_filter_clause?]',
  ], { train: 600, test: 60, type: 'advanced' })
  .alias('remove', ['remove', 'delete', 'trash']);
