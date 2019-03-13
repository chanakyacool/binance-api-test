var {client, authClient} = require('../client.js')
var now = new Date();
var price = 10

let DummyResponse = [
  {
    time: now.setMinutes(now.getMinutes() + 30),
    price: price+10
  },{
    time: now.setMinutes(now.getMinutes() + 60),
    price: price+20
  },{
    time: now.setMinutes(now.getMinutes() + 90),
    price: price+30
  },{
    time: now.setMinutes(now.getMinutes() + 120),
    price: price+10
  },{
    time: now.setMinutes(now.getMinutes() + 150),
    price: price+15
  },{
    time: now.setMinutes(now.getMinutes() + 180),
    price: price+40
  },{
    time: now.setMinutes(now.getMinutes() + 210),
    price: price+30
  }
]

var appRouter = function(app) {

  app.get("/verifyCreds", async function(req, res) {
      let response = await authClient.accountInfo().then(response => {
        return response
      }).catch(err => {
        return {
          err_code: 400, err_message: 'creds are invalid'
        }
      })
      res.send(response);
  });

  app.get("/getStats", function(req, res) {
      res.send({stats: DummyResponse, balance: '200$'})
  });


}

module.exports = appRouter;