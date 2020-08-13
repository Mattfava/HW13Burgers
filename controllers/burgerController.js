var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.post("/burgers/create",function(req,res){
    burger.create(req.body.burger, function(result){
        res.redirect("/");
    });
});

router.put("/burgers/:id",function(req,res){
    burger.update(req.params.id, function(result){
        res.sendStatus(200);
    });
});

router.get("/burgers",function(req, res){
    burger.all(function(data){
        res.render("index",{burgerData: data});
    });
});

module.exports = router;