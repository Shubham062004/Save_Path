import express from "express"
import {
  createDecision,
  getDecisions,
  getDecision,
  updateDecision,
  deleteDecision,
  getDecisionInsights,
} from "../controllers/decisionController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.post("/", protect, createDecision)
router.get("/", protect, getDecisions)
router.get("/insights", protect, getDecisionInsights)
router.get("/:id", protect, getDecision)
router.put("/:id", protect, updateDecision)
router.delete("/:id", protect, deleteDecision)

export default router
