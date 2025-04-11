import Simulation from "../models/Simulation.js"

// @desc    Create a new simulation
// @route   POST /api/simulations
// @access  Private
export const createSimulation = async (req, res) => {
  try {
    const { name, type, description, initialInvestment, recurringCost, expectedReturn, timeHorizon, riskLevel } =
      req.body

    // Calculate projected outcomes (simplified for demo)
    const projectedOutcomes = []
    let currentValue = initialInvestment

    // Simple projection calculation
    for (let year = 1; year <= Math.ceil(timeHorizon / 12); year++) {
      // Apply expected return and recurring costs
      currentValue = currentValue * (1 + expectedReturn / 100) - recurringCost * 12

      // Add projection for this year
      projectedOutcomes.push({
        year,
        value: Math.round(currentValue * 100) / 100,
        description: `Projected value after ${year} year${year > 1 ? "s" : ""}`,
      })
    }

    // Calculate ROI
    const totalInvestment = initialInvestment + recurringCost * timeHorizon
    const finalValue =
      projectedOutcomes.length > 0 ? projectedOutcomes[projectedOutcomes.length - 1].value : initialInvestment
    const roi = totalInvestment > 0 ? ((finalValue - totalInvestment) / totalInvestment) * 100 : 0

    // Calculate break-even point (simplified)
    let breakEvenPoint = 0
    if (expectedReturn > 0 && initialInvestment > 0) {
      breakEvenPoint = Math.ceil(initialInvestment / ((expectedReturn / 100) * initialInvestment - recurringCost * 12))
      if (breakEvenPoint < 0) breakEvenPoint = 0
    }

    const simulation = await Simulation.create({
      user: req.user._id,
      name,
      type,
      description,
      initialInvestment: initialInvestment || 0,
      recurringCost: recurringCost || 0,
      expectedReturn: expectedReturn || 0,
      timeHorizon,
      riskLevel: riskLevel || "medium",
      results: {
        netWorthImpact: finalValue - initialInvestment,
        cashFlowImpact: -recurringCost,
        roi,
        breakEvenPoint,
        projectedOutcomes,
      },
    })

    res.status(201).json({
      success: true,
      data: simulation,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}

// @desc    Get all simulations for a user
// @route   GET /api/simulations
// @access  Private
export const getSimulations = async (req, res) => {
  try {
    const simulations = await Simulation.find({ user: req.user._id })

    res.json({
      success: true,
      count: simulations.length,
      data: simulations,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}

// @desc    Get a single simulation
// @route   GET /api/simulations/:id
// @access  Private
export const getSimulation = async (req, res) => {
  try {
    const simulation = await Simulation.findOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!simulation) {
      return res.status(404).json({
        success: false,
        message: "Simulation not found",
      })
    }

    res.json({
      success: true,
      data: simulation,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}

// @desc    Update a simulation
// @route   PUT /api/simulations/:id
// @access  Private
export const updateSimulation = async (req, res) => {
  try {
    const {
      name,
      type,
      description,
      initialInvestment,
      recurringCost,

      expectedReturn,
      timeHorizon,
      riskLevel,
    } = req.body

    const simulation = await Simulation.findOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!simulation) {
      return res.status(404).json({
        success: false,
        message: "Simulation not found",
      })
    }

    // Recalculate projected outcomes if financial parameters changed
    let projectedOutcomes = simulation.results.projectedOutcomes
    let roi = simulation.results.roi
    let breakEvenPoint = simulation.results.breakEvenPoint
    let netWorthImpact = simulation.results.netWorthImpact
    let cashFlowImpact = simulation.results.cashFlowImpact

    if (
      initialInvestment !== undefined ||
      recurringCost !== undefined ||
      expectedReturn !== undefined ||
      timeHorizon !== undefined
    ) {
      const newInitialInvestment = initialInvestment !== undefined ? initialInvestment : simulation.initialInvestment
      const newRecurringCost = recurringCost !== undefined ? recurringCost : simulation.recurringCost
      const newExpectedReturn = expectedReturn !== undefined ? expectedReturn : simulation.expectedReturn
      const newTimeHorizon = timeHorizon !== undefined ? timeHorizon : simulation.timeHorizon

      // Recalculate projections
      projectedOutcomes = []
      let currentValue = newInitialInvestment

      for (let year = 1; year <= Math.ceil(newTimeHorizon / 12); year++) {
        currentValue = currentValue * (1 + newExpectedReturn / 100) - newRecurringCost * 12

        projectedOutcomes.push({
          year,
          value: Math.round(currentValue * 100) / 100,
          description: `Projected value after ${year} year${year > 1 ? "s" : ""}`,
        })
      }

      // Recalculate ROI
      const totalInvestment = newInitialInvestment + newRecurringCost * newTimeHorizon
      const finalValue =
        projectedOutcomes.length > 0 ? projectedOutcomes[projectedOutcomes.length - 1].value : newInitialInvestment
      roi = totalInvestment > 0 ? ((finalValue - totalInvestment) / totalInvestment) * 100 : 0

      // Recalculate break-even point
      breakEvenPoint = 0
      if (newExpectedReturn > 0 && newInitialInvestment > 0) {
        breakEvenPoint = Math.ceil(
          newInitialInvestment / ((newExpectedReturn / 100) * newInitialInvestment - newRecurringCost * 12),
        )
        if (breakEvenPoint < 0) breakEvenPoint = 0
      }

      netWorthImpact = finalValue - newInitialInvestment
      cashFlowImpact = -newRecurringCost
    }

    // Update simulation
    simulation.name = name || simulation.name
    simulation.type = type || simulation.type
    simulation.description = description || simulation.description

    if (initialInvestment !== undefined) simulation.initialInvestment = initialInvestment
    if (recurringCost !== undefined) simulation.recurringCost = recurringCost
    if (expectedReturn !== undefined) simulation.expectedReturn = expectedReturn
    if (timeHorizon !== undefined) simulation.timeHorizon = timeHorizon
    if (riskLevel !== undefined) simulation.riskLevel = riskLevel

    simulation.results = {
      netWorthImpact,
      cashFlowImpact,
      roi,
      breakEvenPoint,
      projectedOutcomes,
    }

    await simulation.save()

    res.json({
      success: true,
      data: simulation,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}

// @desc    Delete a simulation
// @route   DELETE /api/simulations/:id
// @access  Private
export const deleteSimulation = async (req, res) => {
  try {
    const simulation = await Simulation.findOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!simulation) {
      return res.status(404).json({
        success: false,
        message: "Simulation not found",
      })
    }

    await simulation.deleteOne()

    res.json({
      success: true,
      message: "Simulation removed",
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}
