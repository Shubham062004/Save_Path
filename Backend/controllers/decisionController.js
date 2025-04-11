import Decision from "../models/Decision.js"

// @desc    Create a past decision record
// @route   POST /api/decisions
// @access  Private
export const createDecision = async (req, res) => {
  try {
    const { title, description, date, category, financialImpact, alternativesConsidered, outcome } = req.body

    const decision = await Decision.create({
      user: req.user._id,
      title,
      description,
      date: date || Date.now(),
      category,
      financialImpact: financialImpact || {
        initialCost: 0,
        ongoingCost: 0,
        returnOnInvestment: 0,
        netImpact: 0,
      },
      alternativesConsidered: alternativesConsidered || [],
      outcome: outcome || {
        description: "",
        rating: 5,
        lessonsLearned: [],
      },
      analysis: {
        whatWentWell: [],
        whatCouldImprove: [],
        opportunityCost: 0,
        recommendationForFuture: "",
      },
    })

    // Generate analysis (mocked for demo)
    decision.analysis = {
      whatWentWell: ["Decision was made with available information", "Considered multiple alternatives"],
      whatCouldImprove: ["Could have gathered more data", "Could have consulted with experts"],
      opportunityCost: Math.round(Math.random() * 1000),
      recommendationForFuture:
        "Similar decisions should be approached with more research and consultation with financial advisors.",
    }

    await decision.save()

    res.status(201).json({
      success: true,
      data: decision,
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

// @desc    Get all decisions for a user
// @route   GET /api/decisions
// @access  Private
export const getDecisions = async (req, res) => {
  try {
    const decisions = await Decision.find({ user: req.user._id })

    res.json({
      success: true,
      count: decisions.length,
      data: decisions,
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

// @desc    Get a single decision
// @route   GET /api/decisions/:id
// @access  Private
export const getDecision = async (req, res) => {
  try {
    const decision = await Decision.findOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!decision) {
      return res.status(404).json({
        success: false,
        message: "Decision not found",
      })
    }

    res.json({
      success: true,
      data: decision,
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

// @desc    Update a decision
// @route   PUT /api/decisions/:id
// @access  Private
export const updateDecision = async (req, res) => {
  try {
    const { title, description, date, category, financialImpact, alternativesConsidered, outcome } = req.body

    const decision = await Decision.findOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!decision) {
      return res.status(404).json({
        success: false,
        message: "Decision not found",
      })
    }

    // Update decision fields
    if (title) decision.title = title
    if (description) decision.description = description
    if (date) decision.date = date
    if (category) decision.category = category
    if (financialImpact) decision.financialImpact = financialImpact
    if (alternativesConsidered) decision.alternativesConsidered = alternativesConsidered
    if (outcome) decision.outcome = outcome

    // Regenerate analysis if key fields changed
    if (title || description || category || financialImpact || outcome) {
      decision.analysis = {
        whatWentWell: ["Decision was made with available information", "Considered multiple alternatives"],
        whatCouldImprove: ["Could have gathered more data", "Could have consulted with experts"],
        opportunityCost: Math.round(Math.random() * 1000),
        recommendationForFuture:
          "Similar decisions should be approached with more research and consultation with financial advisors.",
      }
    }

    await decision.save()

    res.json({
      success: true,
      data: decision,
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

// @desc    Delete a decision
// @route   DELETE /api/decisions/:id
// @access  Private
export const deleteDecision = async (req, res) => {
  try {
    const decision = await Decision.findOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!decision) {
      return res.status(404).json({
        success: false,
        message: "Decision not found",
      })
    }

    await decision.deleteOne()

    res.json({
      success: true,
      message: "Decision removed",
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

// @desc    Get decision insights
// @route   GET /api/decisions/insights
// @access  Private
export const getDecisionInsights = async (req, res) => {
  try {
    const decisions = await Decision.find({ user: req.user._id })

    if (decisions.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No decisions found to analyze",
      })
    }

    // Calculate average rating
    const avgRating = decisions.reduce((sum, decision) => sum + (decision.outcome.rating || 0), 0) / decisions.length

    // Find most common category
    const categories = {}
    decisions.forEach((decision) => {
      if (!categories[decision.category]) {
        categories[decision.category] = 0
      }
      categories[decision.category]++
    })

    let mostCommonCategory = ""
    let highestCount = 0
    Object.keys(categories).forEach((category) => {
      if (categories[category] > highestCount) {
        highestCount = categories[category]
        mostCommonCategory = category
      }
    })

    // Calculate total financial impact
    const totalImpact = decisions.reduce((sum, decision) => sum + (decision.financialImpact.netImpact || 0), 0)

    // Generate common lessons learned
    const lessonsLearned = [
      "Research thoroughly before making financial decisions",
      "Consider long-term implications, not just short-term benefits",
      "Consult with experts for major financial decisions",
      "Keep an emergency fund for unexpected expenses",
      "Diversify investments to reduce risk",
    ]

    res.json({
      success: true,
      data: {
        totalDecisions: decisions.length,
        avgRating: Math.round(avgRating * 10) / 10,
        mostCommonCategory,
        totalFinancialImpact: Math.round(totalImpact * 100) / 100,
        commonLessonsLearned: lessonsLearned,
        decisionsByCategory: categories,
      },
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
