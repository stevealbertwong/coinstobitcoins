var express = require('express');
var app = express();

var router = express.Router();



app.use(express.static(__dirname + '/public'));     //serve static assets

app.get('/', function(req, res) {
    res.sendfile('./public/heycoins.htm'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(3000)





// //api for all posts
// router.route('/posts')

//     //create a new post
//     .post(function(req, res){

//         //TODO create a new post in the database
//         res.send({message:"TODO create a new post in the database"});
//     })

//     .get(function(req, res){

//         //TODO get all the posts in the database
//         res.send({message:"TODO get all the posts in the database"});
//     })

// //api for a specfic post
// router.route('/posts/:id')

//     //create
//     .put(function(req,res){
//         return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
//     })

//     .get(function(req,res){
//         return res.send({message:'TODO get an existing post by using param ' + req.param.id});
//     })

//     .delete(function(req,res){
//         return res.send({message:'TODO delete an existing post by using param ' + req.param.id})
//     });

// module.exports = router;



var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': 'XCIVEShV4fLmuWaI',
  'apiSecret': '4lYfR0OXof2gVRgBJsGGx4PgmWTugXqU',
  'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
  'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});

app.get('/create-wallet', function(req, res, next) {

	var wallet_name = Math.random() + "-wallet";

	client.createAccount({'name': wallet_name}, function(err, acct) {
		if (err) {
			return next(err);
		}
		res.send ("You have created a new wallet: " + acct.id);
	  console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
	});

})

//  request fund

app.get('/request-fund', function(req, res, next) {
	
	client.getAccount('primary', function(err, account) {
		if (err) {
			return next(err);
		};

	  account.requestMoney({'to': 'steveandrewwong@gmail.com','amount': '5', 'currency': 'BTC'}, function(err, tx) {
	    console.log(err, tx);
	  });

	  res.send ("You have requested fund. Check developer dashboard!");
});
});


// client.getAccounts({}, function(err, accounts) {
// 	if (err){
// 		throw err
// 	};
//   accounts.forEach(function(acct) {
//     console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
//     acct.getTransactions(null, function(err, txns) {
//       txns.forEach(function(txn) {
//         console.log('txn: ' + txn.id);
//       });
//     });
//   });
// });



// send bitcoin

// client.getAccount('primary', function(err, account) {
//   account.createAddress(function(err, addr) {
//     console.log(addr);
//     address = addr;
//   });
// });


app.get('/buy-sell', function(req, res) {

	res.send ("You don't have enough money to send !")

		function test() {
			client.getAccount('primary', function(err, primaryAccount) {
				client.getAccount('600f18c5-ca26-5b2c-950f-a03e02bdfc43', function(err, otherAccount) {
					otherAccount.createAddress(null, function(err, address) {
					    // Send coins to the new account from your primary account:
					    primaryAccount.sendMoney({'to': address.address,
					                              'amount': '0.01',
					                              'currency': 'BTC',
					                              'description': 'For being awesome!'}, function(err, tx) {
					       console.log(err, tx);
					    });
				});
			  });
			});
		}

		test();
});

// refresh the account

// function test2() {
// client.getAccount('primary', function(err, acct) {
//   console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
// });






// buy and sell 
var buyPriceThreshold  = 200;
var sellPriceThreshold = 500;

client.getAccount('primary', function(err, account) {

  client.getSellPrice({'currency': 'USD'}, function(err, sellPrice) {
    if (parseFloat(sellPrice['amount']) <= sellPriceThreshold) {
      account.sell({'amount': '1',
                    'currency': 'BTC'}, function(err, sell) {
        console.log(sell);
      });
    }
  });

  client.getBuyPrice({'currency': 'USD'}, function(err, buyPrice) {
    if (parseFloat(buyPrice['amount']) <= buyPriceThreshold) {
      account.buy({'amount': '1',
                   'currency': 'BTC'}, function(err, buy) {
        console.log(buy);
      });
    }
  });

});
