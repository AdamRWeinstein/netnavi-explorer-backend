// DEPENDENCIES
const express = require('express')
const router = express.Router()

const battleChipCtrl = require('../controllers/battlechips')

// ROUTES

// BATTLE CHIP INDEX ROUTE
router.get("/", battleChipCtrl.index);

// BATTLE CHIP CREATE ROUTE
router.post("/", battleChipCtrl.create);

// BATTLE CHIP SHOW ROUTE
router.get("/:id", battleChipCtrl.show);

// BATTLE CHIP DELETE ROUTE
router.delete("/:id", battleChipCtrl.delete);

// BATTLE CHIP UPDATE ROUTE
router.put("/:id", battleChipCtrl.update);

module.exports = router