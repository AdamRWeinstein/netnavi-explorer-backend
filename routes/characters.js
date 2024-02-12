// DEPENDENCIES
const express = require('express')
const router = express.Router()

const characterCtrl = require('../controllers/characters')

// ROUTES

// CHARACTER INDEX ROUTE
router.get("/", characterCtrl.index);

// CHARACTER CREATE ROUTE
router.post("/", characterCtrl.create);

// CHARACTER SHOW ROUTE
router.get("/:name", characterCtrl.show);

// CHARACTER DELETE ROUTE
router.delete("/:id", characterCtrl.delete);

// CHARACTER UPDATE ROUTE
router.put("/:id", characterCtrl.update);

module.exports = router