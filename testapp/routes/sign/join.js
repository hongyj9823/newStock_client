const express = require('express');
const router = express.Router();

const maria = require('../../maria');
router.get('/',function(req,res,next) {
    res.render('sign/join');
});

router.post('/', function(req,res,next) {
    const user = require('../../model/user/addUser')(req.body);
    const sql = `insert into user(USERID, PASSWORD, NAME, SALT) VALUES ("${user_info.userid}","${user_info.password}","${user_info.name}","${user_info.salt}`;
    maria.query(sql,function(err,rows) {
        console.log(rows);
        if (!err) { res.send("1")} else {res.send("0")};
    })
});

module.exports = router;