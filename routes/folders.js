// DEPENDENCIES
const express = require('express')
const router = express.Router()

const folderCtrl = require('../controllers/folders')

// ROUTES

// FOLDER INDEX ROUTE
router.get("/:userCode", battleChipCtrl.index);

// FOLDER CREATE ROUTE
router.post("/:userCode", battleChipCtrl.create);

// FOLDER SHOW ROUTE
router.get("/:userCode/:folderId", battleChipCtrl.show);

// FOLDER DELETE ROUTE
router.delete("/:userCode/:folderId", battleChipCtrl.delete);

// FOLDER UPDATE ROUTE
router.put("/:userCode/:folderId", battleChipCtrl.update);

module.exports = router