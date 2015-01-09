var replay = require('replay')

var tape = require('tape')
var yOptions = require('../')

tape('should get option stats from Yahoo!', function(t) {
  var opts = {symbol: 'AAPL', date: '2015-01-17'}
  yOptions(opts, function(err, stats) {
    if (err) return console.error(err)

    t.equal(stats.quote, '109.83', 'should have current price')

    var calls = stats.calls
    t.equal(calls.length, 194, 'should have calls')

    var testCall = calls[2]
    t.equal(testCall.strike, '29.29', 'should have call strike')
    t.equal(testCall.contractName, 'AAPL150117C00029290', 'should have call contractName')
    t.equal(testCall.last, '84.75', 'should have call last')
    t.equal(testCall.bid, '80.40', 'should have call bid')
    t.equal(testCall.ask, '80.75', 'should have call ask')
    t.equal(testCall.change, '0.00', 'should have call change')
    t.equal(testCall.percentChange, '0.00%', 'should have call percentChange')
    t.equal(testCall.volume, '2', 'should have call volume')
    t.equal(testCall.openInterest, '13', 'should have call openInterest')
    t.equal(testCall.impliedVolatility, '310.94%', 'should have call impliedVolatility')

    var puts = stats.puts
    t.equal(puts.length, 190, 'should have puts')

    var testPut = puts[2]
    t.equal(testPut.strike, '29.29', 'should have put strike')
    t.equal(testPut.contractName, 'AAPL150117P00029290', 'should have put contractName')
    t.equal(testPut.last, '0.01', 'should have put last')
    t.equal(testPut.bid, '0.00', 'should have put bid')
    t.equal(testPut.ask, '0.01', 'should have put ask')
    t.equal(testPut.change, '0.00', 'should have put change')
    t.equal(testPut.percentChange, '0.00%', 'should have put percentChange')
    t.equal(testPut.volume, '0', 'should have put volume')
    t.equal(testPut.openInterest, '3892', 'should have put openInterest')
    t.equal(testPut.impliedVolatility, '250.00%', 'should have put impliedVolatility')

    t.end()
  })
})
