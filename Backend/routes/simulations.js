import express from "express"
import {
  createSimulation,
  getSimulations,
  getSimulation,
  updateSimulation,
  deleteSimulation,
} from "../controllers/simulationController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.post("/", protect, createSimulation)
router.get("/", protect, getSimulations)
router.get("/:id", protect, getSimulation)
router.put("/:id", protect, updateSimulation)
router.delete("/:id", protect, deleteSimulation)

export default router
