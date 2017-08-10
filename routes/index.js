var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    cars: [
      {
        id: 1,
        make: 'Honda',
        model: 'Civic'
      },
      {
        id: 2,
        make: 'Mitsubishi',
        model: 'Lancer'
      }
    ]
  };

  res.json(data.cars);
});

module.exports = router;
