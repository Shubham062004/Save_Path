import express from "express"
import {
  getFinances,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  addGoal,
  updateGoal,
  deleteGoal,
  updateBudget,
} from "../controllers/financeController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.get("/", protect, getFinances)

// Transaction routes
router.post("/transactions", protect, addTransaction)
router.put("/transactions/:id", protect, updateTransaction)
router.delete("/transactions/:id", protect, deleteTransaction)

// Goal routes
router.post("/goals", protect, addGoal)
router.put("/goals/:id", protect, updateGoal)
router.delete("/goals/:id", protect, deleteGoal)

// Budget route
router.put("/budget", protect, updateBudget)

export default router
