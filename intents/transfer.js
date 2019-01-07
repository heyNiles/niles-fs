module.exports = intent => intent.ns('transfer')
  .can('~[transfer_operation] files')
  .examples([
    'copy files from ../apps/source to /destination',
    'move python files owned by guest, named config* but not in hidden files from ./source to ./destination',
    'copy all .js files from here to libraries',
    'rename files changed on August 24th from "*.js" to ".jsx"',
    'move code with more than 500 lines and that doesnt contain "bla" but not in .gitignore from ./data to ../apps',
    'copy markdown files changed earlier than last friday omit .gitignore from ./frontend to data',
  ])
  .command([
    '@[transfer_operation] ~[all?] ~[files?] from @[source] to @[destination]',
    '@[transfer_operation] ~[all?] @[extension?] ~[files?] from @[source] to @[destination] ~[compound_filter_clause?] ~[excluding_clause?]',
    '@[transfer_operation] ~[all?] @[extension?] ~[files?] ~[compound_filter_clause?] ~[excluding_clause?] from @[source] to @[destination]',
  ], { train: 600, test: 60, type: 'advanced' })
  .slot('transfer_operation', ['copy', 'move', 'rename'])
  .slot('source', { filePathPattern: true })
  .slot('destination', { filePathPattern: true });
