var express = require("express"),
	morgan = require("morgan")


var app=express()




app.use(morgan("dev"))

app.use(express.static(__dirname+"/../"+"public"))



module.exports = app