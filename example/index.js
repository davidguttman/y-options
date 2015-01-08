var yOptions = require('../')

var opts = {symbol: 'AAPL', date: '2017-01-20'}
yOptions(opts, function(err, quotes) {
  if (err) return console.error(err)

  console.log(quotes)
})

