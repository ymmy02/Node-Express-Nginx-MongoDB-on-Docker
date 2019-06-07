var express = require('express');
var router = express.Router();

var model = require('./model');
var Memo = model.Memo;

// ---- //
// Read //
// ---- //
router.get('/', function(req, res, next) {
    Memo.find({}, function (err, result) {
        if (err) throw err;
        const memoList = result;
        res.render('memolist', { memoList: memoList });
    });
});

// ------ //
// Create //
// ------ //
router.post('/', function(req, res, next) {
    const memo = new Memo({
        memo: req.body.memo
    });
    memo.save(function(err) {
        if (err) throw err;
    })
    res.redirect('/memo');
});

// ------ //
// Delete //
// ------ //
router.get('/delete', function(req, res, next) {
    const id = req.query.id;
    Memo.findByIdAndRemove(id, function(err) {
        if (err) throw err;
        res.redirect('/memo');
    });
});

// ------ //
// Update //
// ------ //
router.get('/update', function(req, res, next) {
    const id = req.query.id;
    Memo.findById(id, function(err, result) {
        if (err) throw err;
        res.render('memoupdate', { 
            id  : id,
            memo: result['memo'] });
    })
});

router.post('/update', function(req, res, next) {
    const id   = req.query.id;
    const memo = req.body.memo;
    Memo.findByIdAndUpdate(id, { memo: memo }, function(err) {
        if (err) throw err;
        res.redirect('/memo');
    })
});

module.exports = router;
