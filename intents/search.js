module.exports = intent => intent.ns('search')
  .can('~[list] files')
  .examples([
    'display all files called "*report*"',
    'search .md files bigger than 1 mb',
    'find config files that do not contain "KEY"',
    'show files created since yesterday sort by modified descending',
    'find biggest js files where the filename contains bla excluding node_modules',
    'display most recently updates json files not owned by root not in node_modules order by name descending',
    'find all files with fewer than 500 lines and not containing "text"',
  ])
  .command([
    '~[list] ~[all?] files ~[filter_clause]',
    '~[list] ~[all?] @[extension?] files ~[filter_clause]',
    '~[list] ~[all?] @[extension?] files ~[filter_clause] ~[sort_clause?]',
  ], { train: 600, test: 60 })
  .command([
    '~[list] ~[all?] files ~[size_clause]',
    '~[list] ~[all?] @[extension?] files ~[size_clause]',
  ], { train: 300, test: 30, type: 'by_size' })
  .command([
    '~[list] ~[all?] files ~[property_clause]',
    '~[list] ~[all?] @[extension?] files ~[property_clause]',
  ], { train: 300, test: 30, type: 'by_property' })
  .command([
    '~[list] ~[all?] @[dimension?] @[extension?] files',
  ], { train: 300, test: 30, type: 'by_dimension' })
  .command([
    '~[list] ~[all?] @[dimension?] @[extension?] files ~[compound_filter_clause?] ~[excluding_clause?] ~[sort_clause?]',
    '~[list] ~[all?] @[dimension?] @[extension?] files ~[compound_filter_clause?] ~[sort_clause?] ~[excluding_clause?]',
    '~[list] ~[all?] @[dimension?] @[extension?] files ~[sort_clause?] ~[excluding_clause?] ~[compound_filter_clause?]',
  ], { train: 600, test: 60, type: 'advanced' })
  .alias('list', ['list', 'show', 'show me', 'display', 'search', 'find'])
  .slot('dimension', ['~[biggest]', '~[smallest]', '~[newest]', 'oldest'])
  .alias('biggest', ['biggest', 'largest', 'big'])
  .alias('smallest', ['smallest', 'small'])
  .alias('newest', ['newest', 'most recent', 'most recently updated']);
