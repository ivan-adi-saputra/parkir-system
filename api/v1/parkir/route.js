const express = require("express");
const router = express.Router();
const parkirController = require("./controller");
const authMiddleware = require("../../../middleware/auth");

router.get("/", authMiddleware, parkirController.index);
router.get("/:id", authMiddleware, parkirController.find);
router.post("/", authMiddleware, parkirController.create);
router.put("/:id", authMiddleware, parkirController.update);
router.delete("/:id", authMiddleware, parkirController.destroy);

module.exports = router;
