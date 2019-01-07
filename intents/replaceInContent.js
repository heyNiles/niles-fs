module.exports = intent => intent.ns('replace_in_content')
  .can([
    '~[replace] text in file content',
    '~[replace] file content',
    'sed files',
  ])
  .examples([
    '~[replace] "a" with "b" in file.js',
    '~[replace] "a" with "b" in this folder',
    '~[replace] "a" with "b" in files containing "c"',
    '~[replace] "text1" with "text2" in py files bigger than ten mb, named "*test*"',
    '~[replace] "bla" with "text" in c++ files called "config*" and owned by guest but excluding ../data',
  ])
  .command([
    '~[replace] @[content] with @[content] in @[source]',
    '~[replace] @[content] with @[content] in @[extension?] files',
    'in @[source] replace @[content] with @[content]',
    '~[replace] @[content] to @[content] in @[source]',
    '~[replace] @[content] with @[content] in @[source] ~[compound_filter_clause?] ~[excluding_clause?]',
    '~[replace] @[content] with @[content] in @[extension?] files ~[compound_filter_clause?] ~[excluding_clause?]',
  ], { train: 600, test: 60 })
  .alias('replace', ['replace', 'change'])
  .slot('source', { filePathPattern: true });
