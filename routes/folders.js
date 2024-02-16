// DEPENDENCIES
const express = require('express')
const router = express.Router()

const folderCtrl = require('../controllers/folders')

// ROUTES

// FOLDER INDEX ROUTE
router.get("/:userCode", folderCtrl.index);

// FOLDER CREATE ROUTE
router.post("/:userCode", folderCtrl.create);

// FOLDER SHOW ROUTE
router.get("/:userCode/:folderId", folderCtrl.show);

// FOLDER DELETE ROUTE
router.delete("/:userCode/:folderId", folderCtrl.delete);

// FOLDER UPDATE ROUTE
router.put("/:userCode/:folderId", folderCtrl.update);

module.exports = router