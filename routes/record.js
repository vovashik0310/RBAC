const express = require("express");
const router = express.Router();

const rbacMiddleware = require("../middleware/rbacMiddleware");

const recordController = require("../controllers/recordsController");

router.get(
  "/records",
  rbacMiddleware.checkPermissions("read_record"),
  recordController.readRecord
);
router.post(
  "/records",
  rbacMiddleware.checkPermissions("create_record"),
  recordController.createRecord
);
router.put(
  "/records/:id",
  rbacMiddleware.checkPermissions("update_record"),
  recordController.updateRecord
);
router.delete(
  "/records/:id",
  rbacMiddleware.checkPermissions("delete_record"),
  recordController.deleteRecord
);

module.exports = router;
