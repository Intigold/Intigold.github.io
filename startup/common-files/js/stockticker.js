$(document).ready(function(){var stock = 'SLI.V';
var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + stock + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
$.getJSON(url,function(data){
var stockInfo = data[0];
var stockString = ' St. Elias Mines - ' + data.query.results.quote.symbol + ' Last: ' + data.query.results.quote.LastTradePriceOnly + ' Ask: ' + data.query.results.quote.Ask + ' Bid: ' + data.query.results.quote.Bid + ' Volume: ' + data.query.results.quote.Volume;
$('.stockTick').html('<li>' + stockString + '</li>');
                });
        })