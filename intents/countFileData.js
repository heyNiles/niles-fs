module.exports = intent => intent.ns('count_file_data')
  .can([
    'count characters, lines and words in files',
    'count number of characters in files',
    'count lines in a file',
    'count words in a file',
  ])
  .examples([
    'count lines in file.js',
    'count characters in py files',
    'count how many characters in script files not in "config*"',
    'count words in ./code files not containing "elasticsearch" and of type js',
    'show me the number of lines of code in bash files greater than 256 megabytes, modified after August 24th but not in .gitignore',
  ])
  .command([
    '~[list?] ~[how many?] @[count_property] in @[source]',
    '~[list?] @[count_property] ~[in?] ~[here]',
    '~[list?] @[count_property] ~[compound_filter_clause?] ~[excluding_clause?]',
    '~[list?] ~[how many?] @[count_property] in @[source] ~[compound_filter_clause?] ~[excluding_clause?]',
    '~[list?] ~[how many?] @[count_property] in @[extension?] files ~[compound_filter_clause?] ~[excluding_clause?]',
  ], { train: 600, test: 60 })
  .slot('source', { filePathPattern: true })
  .slot('count_property', ['~[loc]', 'lines', 'words', 'characters'])
  .alias('how many', ['how many', 'the number of'])
  .alias('list', ['list', 'show', 'show me', 'display', 'count']);
