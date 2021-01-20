const Zomato = require ('app1.js');
const z = new Zomato('db45fba890e679c2be633014354c84aa');
z
  .categories()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });