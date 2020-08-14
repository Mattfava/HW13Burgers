var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    res.redirect("/burgers")
});
router.post("/burgers/create",function(req,res){
    burger.create(req.body.name, function(result){
        res.redirect("/burgers");
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