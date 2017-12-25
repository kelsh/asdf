const Twit = require('twit');
const names = require('./names.js');
//const Poloniex = require('./poloniex');
var bittrex = require('node-bittrex-api');

const API_KEY = '';
const SECRET = '';

var IDChecked = [];
const safeCheck = true; //HIGHLY recomended~

/* See Documentation on poloniex.js */
//const polo = new Poloniex(API_KEY, SECRET, 0, 0);
console.log("hello");
stream.on('tweet', (tweet, err) => {
  console.log("we got the tweet");
    if (!isIn(tweet.id)) {
      checkTweet(tweet.text);
    } else {
      console.log(`Found tweet ${tweet.id} but it has already been processed`);
    }
})

function checkTweet(text){
  text = text.toLowerCase();
  if (safeCheck) {
    for (var val of names) {
      if (text.includes(val.toLowerCase()) && text.toLowerCase().includes('coin of the day')) {
        console.log(`${text} :: ${val}`);
 //       polo.checkBalancesandBuy(val.toUpperCase());
          bittrex.getticker( { market : 'BTC-LTC' }, function( data, err ) {
            console.log( data );
          });     
        }
    }
  } else {
    for (var val of names) {
      if (text.includes(val)) {
        console.log(`${text} :: ${val}`);
 //       polo.checkBalancesandBuy(val.toUpperCase());
      }
    }
  }
}

function isIn(id) {
  for (var val of IDChecked) {
    if (val === id) {
      return true;
    }
  }
  IDChecked.push(id);
  return false;
}


/*
Make sure below is commented out otherwise it will go bad
Test @ works Made Purchase {"orderNumber":"91514514058","resultingTrades":[{"amount":"0.00270000","date":"2017-12-24 ","rate":"0.03711015","total":"0.00010019","tradeID":"","type":"buy"}]}
//let a = 'zec coin of the day';

//checkTweet(a);
*/
