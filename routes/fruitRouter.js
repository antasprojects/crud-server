const express = require("express");
const fruitRouter = express.Router()
const fruits = require("../controllers/fruits")

fruitRouter.get("/", fruits.index )

fruitRouter.get("/:name", fruits.show)

// Create - POST - create


fruitRouter.post("/", fruits.create)


// Create - POST - create

// Update - PATCH - update

fruitRouter.patch("/:name", fruits.update)



// Delete - DELETE - destroy

fruitRouter.delete("/:name", fruits.destroy)



module.exports = fruitRouter