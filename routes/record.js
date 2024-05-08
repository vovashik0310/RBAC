const express = require("express");
const router = express.Router();

const rbacMiddleware = require("../middleware/rbacMiddleware");

const recordController = require("../controllers/recordsController");

router.get(
  "/records",
  rbacMiddleware.checkPermissions("read_record"),
  recordController
);

module.exports = router;
