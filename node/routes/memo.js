var express = require('express');
var router = express.Router();

var model = require('./model');
var Memo = model.Memo;

router.get('/', function(req, res, next) {
    Memo.find({}, function (err, result) {
        if (err) throw err;
        let memoList = result.map(function(e) {
            return e['memo'];
        });
        res.render('memolist', { memoList: memoList });
    });
});

router.post('/', function(req, res, next) {
    const memo = new Memo({
        memo: req.body.memo
    });
    memo.save(function(err) {
        if (err) throw err;
    })
    res.redirect('/memo');
});

module.exports = router;
