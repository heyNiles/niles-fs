module.exports = skill => skill
  .can('work with files, folders and permissions')
  .alias('compound_filter_clause', [
    '~[filter_clause] ~[filter_clause?]',
    '~[filter_clause] and ~[filter_clause]',
    '~[filter_clause], ~[filter_clause]',
  ])
  .alias('filter_clause', [
    '~[name_clause]',
    '~[extension_clause]',
    '~[content_clause]',
    '~[owner_clause]',
    '~[property_clause]',
    '~[timestamp_clause]',
    '~[size_clause]',
  ])

  .alias('name_clause', ['~[named] @[name]'])
  .alias('named', ['named', 'called'])
  .slot('name', { fileNamePattern: true })

  .alias('extension_clause', ['of type @[extension]'])
  .slot('extension', { fileExtensionPattern: true })

  .alias('content_clause', ['@[content_operation] @[content]'])
  .slot('content_operation', ['~[containing]', '~[not containing]'])
  .alias('containing', ['containing', 'that contain', 'including', 'that include'])
  .alias('not containing', [
    'not containing', 'that do not contain', 'that dont contain',
    'not including', 'that do not include', 'that dont include',
  ])
  .slot('content', { textContentPattern: true })

  .alias('owner_clause', ['@[owner_operation] @[owner]'])
  .slot('owner_operation', ['~[owned]', '~[not owned]'])
  .alias('owned', ['owned by', 'belonging to', 'owner is'])
  .alias('not owned', ['not owned by', 'not belonging to', 'owner is not'])
  .slot('owner', { userPattern: true })

  .alias('property_clause', [
    '~[with?] ~[the?] @[filter_prop] @[filter_operation] @[filter_value]',
    'whose @[filter_prop] @[filter_operation] @[filter_value]',
    'with ~[the?] @[filter_prop] @[filter_value]',
  ])
  .alias('with', ['with', 'where'])
  .slot('filter_prop', ['~[name]', '~[content]', 'owner', 'extension'])
  .alias('name', ['name', 'filename', 'file name'])
  .alias('content', ['content', 'body', 'text'])
  .slot('filter_operation', ['~[is]', '~[is not]', '~[contains]', '~[doesnt contain]'])
  .alias('is', ['is', 'is equal to', '=', '==', 'equals', 'like', 'is like', 'matches', 'matching'])
  .alias('is not', [
    'is not', 'isnt', '!=', '!==', 'not', 'different than',
    'is different than', 'does not match', 'not matching',
    'is not like', 'isnt like', 'differs to',
  ])
  .alias('contains', ['contains', 'includes'])
  .alias('doesnt contain', ['doesnt contain', 'does not contain', 'doesnt include', 'does not include'])
  .slot('filter_value', { userPattern: true, filePathPattern: true, textContentPattern: true })

  .alias('timestamp_clause', ['@[timestamp_property] @[timestamp_operation] @[timestamp_threshold]'])
  .slot('timestamp_property', ['~[created]', '~[updated]'])
  .alias('created', ['created', 'made'])
  .alias('updated', ['updated', 'changed', 'modified', 'touched'])
  .slot('timestamp_operation', ['~[on]', '~[since]', '~[before]'])
  .alias('since', ['since', 'after', 'later than'])
  .alias('before', ['before', 'earlier than', 'more than'])
  .slot('timestamp_threshold', { timePattern: true })

  .alias('size_clause', ['@[size_operator] @[size_threshold] @[size_unit]'])
  .slot('size_operator', ['~[larger]', '~[smaller]'])
  .alias('larger', ['larger than', 'bigger than', 'greater than', 'with more than', 'gt', '>', '>='])
  .alias('smaller', ['smaller than', 'with fewer than', 'lt', '<', '<='])
  .slot('size_threshold', { numberPattern: true })
  .slot('size_unit', ['~[b]', '~[kb]', '~[mb]', '~[gb]', '~[tb]', 'lines'])
  .alias('b', ['b', 'bytes'])
  .alias('kb', ['kb', 'kilobytes', 'Kb', 'KB', 'kilos'])
  .alias('mb', ['mb', 'megabytes', 'Mb', 'MB', 'megs'])
  .alias('gb', ['gb', 'gigabytes', 'Gb', 'GB', 'gigs'])
  .alias('tb', ['tb', 'terrabytes', 'Tb', 'TB'])

  .alias('excluding_clause', ['~[but?] ~[excluding] @[exclude]'])
  .alias('excluding', ['excluding', 'not including', 'exclude', 'dont include', 'without', 'skip'])
  .slot('exclude', { filePathPattern: true })

  .alias('sort_clause', ['~[sort?] by @[sort] @[sort_dir?]'])
  .slot('sort', ['size', '~[name]', 'lines', '~[created]', '~[updated]'])
  .slot('sort_dir', ['~[asc]', '~[desc]'])
  .alias('asc', ['asc', 'ascending', 'increasing'])
  .alias('desc', ['desc', 'descending', 'decreasing'])
  .alias('sort', ['sort', 'sorted', 'order', 'ordered', 'arrange', 'arranged']);
