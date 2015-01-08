var $ = require('cheerio')
var moment = require('moment')
var request = require('request')

module.exports = function(opts, cb) {
  var rawDate = opts.date
  var symbol = opts.symbol.toUpperCase()

  var date = moment.utc(rawDate).unix()
  var rOpts = {
    url: 'http://finance.yahoo.com/q/op',
    qs: {s: symbol, date: date}
  }
  request(rOpts, function(err, res, body) {
    var stats = parseStats(body)
    cb(err, stats)
  })
}

function parseStats (body) {
  var $html = $(body)
  var $calls = $html.find('#optionsCallsTable table')
  var $puts = $html.find('#optionsPutsTable table')
  var stats = {
    calls: parseTable($calls),
    puts: parseTable($puts)
  }
  return stats
}

function parseTable ($table) {
  var headings = parseHeadings($table)
  var rows = []

  var $rows = $table.find('tbody tr')
  $rows.each(function(iRow, tr) {
    var row = {}

    $cells = $(tr).find('td')
    $cells.each(function(iCol, td) {
      var colName = headings[iCol]
      row[colName] = $(td).text().replace(/\s/g, '')
    })

    rows.push(row)
  })

  return rows
}

function parseHeadings ($table) {
  var $headings = $table.find('thead tr th')
  var headings = []
  $headings.each(function(i, el) {
    var className = el.attribs.class
    var colName = (className || '').match(/column-(\w+)/)[1]
    headings.push(colName)
  })
  return headings
}