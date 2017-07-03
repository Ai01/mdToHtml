var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/all', (req, res, next) => {
    req.getConnection(function(err, connection) {
        var query = connection.query('SELECT * from customer', function(err, results) {
            if (err) {
                throw new Error(err);
            }
            var name = [];
            results.forEach((result)=>{
            	name.push(result.name);
            })
            res.send(name);
        })
    })
})

module.exports = router;