import express from "express"
import { analyzeBehavior, getBehavior, getOptimizationTips } from "../controllers/behaviorController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.get("/analyze", protect, analyzeBehavior)
router.get("/", protect, getBehavior)
router.get("/tips", protect, getOptimizationTips)

export default router
