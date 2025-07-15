const express = require("express");
const boardController = require("../controllers/boardController");

const router = express.Router();

router.post("/", boardController.protectBoard, boardController.createBoard);

router
  .route("/:id")
  .get(boardController.protectBoard, boardController.getBoard)
  .patch(boardController.protectBoard, boardController.updateBoard)
  .delete(boardController.protectBoard, boardController.deleteBoard);

module.exports = router;
