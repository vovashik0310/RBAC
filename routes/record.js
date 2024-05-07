const express = require("express");
const router = express.Router();

const rbacMiddleware = require("../middleware/rbacMiddleware");

const recordController = require("../controllers/recordsController");
