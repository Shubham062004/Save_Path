import Behavior from "../models/Behavior.js"
import Finance from "../models/Finance.js"

// @desc    Analyze user's financial behavior
// @route   GET /api/behaviors/analyze
// @access  Private
export const analyzeBehavior = async (req, res) => {
  try {
    // Get user's financial data
    const finance = await Finance.findOne({ user: req.user._id })

    if (!finance || finance.transactions.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Not enough financial data to analyze behavior",
      })
    }

    // Analyze spending patterns
    const categories = {}
    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    // Get recent transactions
    const recentTransactions = finance.transactions.filter(
      (t) => new Date(t.date) >= sixMonthsAgo && t.type === "expense",
    )

    // Calculate total expenses
    const totalExpenses = recentTransactions.reduce((sum, t) => sum + t.amount, 0)

    // Calculate category percentages
    recentTransactions.forEach((transaction) => {
      if (!categories[transaction.category]) {
        categories[transaction.category] = 0
      }
      categories[transaction.category] += transaction.amount
    })

    // Convert to percentage and determine trends (mocked for demo)
    const categoryData = Object.keys(categories).map((category) => {
      const percentage = (categories[category] / totalExpenses) * 100
      // In a real app, you would compare with historical data to determine trend
      const trend = Math.random() > 0.5 ? "increasing" : "decreasing"

      return {
        name: category,
        percentage: Math.round(percentage * 100) / 100,
        trend,
      }
    })

    // Find largest expense category
    let largestExpenseCategory = ""
    let largestExpenseAmount = 0

    Object.keys(categories).forEach((category) => {
      if (categories[category] > largestExpenseAmount) {
        largestExpenseAmount = categories[category]
        largestExpenseCategory = category
      }
    })

    // Calculate savings rate (income - expenses) / income
    const recentIncome = finance.transactions
      .filter((t) => new Date(t.date) >= sixMonthsAgo && t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0)

    const savingsRate = recentIncome > 0 ? ((recentIncome - totalExpenses) / recentIncome) * 100 : 0

    // Generate optimization tips (mocked for demo)
    const optimizationTips = [
      {
        category: largestExpenseCategory,
        description: `Your largest expense category is ${largestExpenseCategory}. Consider reducing spending in this area.`,
        potentialSavings: Math.round(largestExpenseAmount * 0.1 * 100) / 100,
        difficulty: "medium",
      },
      {
        category: "Savings",
        description: "Set up automatic transfers to a savings account on payday.",
        potentialSavings: Math.round(recentIncome * 0.05 * 100) / 100,
        difficulty: "easy",
      },
      {
        category: "Subscriptions",
        description: "Review your recurring subscriptions and cancel unused services.",
        potentialSavings: 50,
        difficulty: "easy",
      },
    ]

    // Create or update behavior analysis
    let behavior = await Behavior.findOne({ user: req.user._id })

    if (!behavior) {
      behavior = new Behavior({
        user: req.user._id,
        spendingPatterns: {
          categories: categoryData,
          largestExpenseCategory,
          impulsePurchaseFrequency: Math.floor(Math.random() * 10),
        },
        savingBehavior: {
          consistentSavings: savingsRate > 10,
          savingsRate: Math.round(savingsRate * 100) / 100,
          emergencyFundStatus: savingsRate > 20 ? "adequate" : savingsRate > 10 ? "partial" : "none",
        },
        investmentBehavior: {
          riskTolerance: "medium",
          diversification: "adequate",
          investmentFrequency: "regular",
        },
        optimizationTips,
      })
    } else {
      behavior.spendingPatterns = {
        categories: categoryData,
        largestExpenseCategory,
        impulsePurchaseFrequency: Math.floor(Math.random() * 10),
      }
      behavior.savingBehavior = {
        consistentSavings: savingsRate > 10,
        savingsRate: Math.round(savingsRate * 100) / 100,
        emergencyFundStatus: savingsRate > 20 ? "adequate" : savingsRate > 10 ? "partial" : "none",
      }
      behavior.optimizationTips = optimizationTips
    }

    await behavior.save()

    res.json({
      success: true,
      data: behavior,
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

// @desc    Get user's behavior analysis
// @route   GET /api/behaviors
// @access  Private
export const getBehavior = async (req, res) => {
  try {
    const behavior = await Behavior.findOne({ user: req.user._id })

    if (!behavior) {
      return res.status(404).json({
        success: false,
        message: "Behavior analysis not found. Run an analysis first.",
      })
    }

    res.json({
      success: true,
      data: behavior,
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

// @desc    Get optimization tips
// @route   GET /api/behaviors/tips
// @access  Private
export const getOptimizationTips = async (req, res) => {
  try {
    const behavior = await Behavior.findOne({ user: req.user._id })

    if (!behavior) {
      // If no behavior analysis exists, return generic tips
      return res.json({
        success: true,
        data: [
          {
            category: "Savings",
            description: "Set up automatic transfers to a savings account on payday.",
            potentialSavings: 100,
            difficulty: "easy",
          },
          {
            category: "Subscriptions",
            description: "Review your recurring subscriptions and cancel unused services.",
            potentialSavings: 50,
            difficulty: "easy",
          },
          {
            category: "Food",
            description: "Plan meals and cook at home more often to reduce food expenses.",
            potentialSavings: 200,
            difficulty: "medium",
          },
        ],
      })
    }

    res.json({
      success: true,
      data: behavior.optimizationTips,
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
