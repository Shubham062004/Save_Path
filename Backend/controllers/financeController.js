import Finance from "../models/Finance.js"

// @desc    Get user's financial data
// @route   GET /api/finances
// @access  Private
export const getFinances = async (req, res) => {
  try {
    let finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      // Create a new finance record if one doesn't exist
      finance = await Finance.create({
        user: req.user._id,
        transactions: [],
        goals: [],
      })
    }

    res.json({
      success: true,
      data: finance,
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

// @desc    Add a transaction
// @route   POST /api/finances/transactions
// @access  Private
export const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, description, date, recurring, recurringFrequency } = req.body

    let finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      finance = await Finance.create({
        user: req.user._id,
        transactions: [],
        goals: [],
      })
    }

    const transaction = {
      type,
      amount,
      category,
      description,
      date: date || Date.now(),
      recurring: recurring || false,
      recurringFrequency: recurring ? recurringFrequency : null,
    }

    finance.transactions.push(transaction)

    // Update net worth based on transaction type
    if (type === "income") {
      finance.netWorth += amount
    } else if (type === "expense") {
      finance.netWorth -= amount
    }

    await finance.save()

    res.status(201).json({
      success: true,
      data: transaction,
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

// @desc    Update a transaction
// @route   PUT /api/finances/transactions/:id
// @access  Private
export const updateTransaction = async (req, res) => {
  try {
    const { type, amount, category, description, date, recurring, recurringFrequency } = req.body

    const finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      return res.status(404).json({
        success: false,
        message: "Finance record not found",
      })
    }

    const transaction = finance.transactions.id(req.params.id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      })
    }

    // Update net worth based on transaction changes
    if (transaction.type === "income") {
      finance.netWorth -= transaction.amount
    } else if (transaction.type === "expense") {
      finance.netWorth += transaction.amount
    }

    if (type === "income") {
      finance.netWorth += amount
    } else if (type === "expense") {
      finance.netWorth -= amount
    }

    // Update transaction
    transaction.type = type || transaction.type
    transaction.amount = amount || transaction.amount
    transaction.category = category || transaction.category
    transaction.description = description || transaction.description
    transaction.date = date || transaction.date
    transaction.recurring = recurring !== undefined ? recurring : transaction.recurring
    transaction.recurringFrequency = recurring ? recurringFrequency || transaction.recurringFrequency : null

    await finance.save()

    res.json({
      success: true,
      data: transaction,
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

// @desc    Delete a transaction
// @route   DELETE /api/finances/transactions/:id
// @access  Private
export const deleteTransaction = async (req, res) => {
  try {
    const finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      return res.status(404).json({
        success: false,
        message: "Finance record not found",
      })
    }

    const transaction = finance.transactions.id(req.params.id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      })
    }

    // Update net worth based on transaction removal
    if (transaction.type === "income") {
      finance.netWorth -= transaction.amount
    } else if (transaction.type === "expense") {
      finance.netWorth += transaction.amount
    }

    finance.transactions.pull(req.params.id)
    await finance.save()

    res.json({
      success: true,
      message: "Transaction removed",
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

// @desc    Add a financial goal
// @route   POST /api/finances/goals
// @access  Private
export const addGoal = async (req, res) => {
  try {
    const { name, targetAmount, currentAmount, targetDate, category, priority } = req.body

    let finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      finance = await Finance.create({
        user: req.user._id,
        transactions: [],
        goals: [],
      })
    }

    const goal = {
      name,
      targetAmount,
      currentAmount: currentAmount || 0,
      targetDate,
      category,
      priority: priority || "medium",
    }

    finance.goals.push(goal)
    await finance.save()

    res.status(201).json({
      success: true,
      data: goal,
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

// @desc    Update a financial goal
// @route   PUT /api/finances/goals/:id
// @access  Private
export const updateGoal = async (req, res) => {
  try {
    const { name, targetAmount, currentAmount, targetDate, category, priority } = req.body

    const finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      return res.status(404).json({
        success: false,
        message: "Finance record not found",
      })
    }

    const goal = finance.goals.id(req.params.id)

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: "Goal not found",
      })
    }

    // Update goal
    goal.name = name || goal.name
    goal.targetAmount = targetAmount || goal.targetAmount
    goal.currentAmount = currentAmount !== undefined ? currentAmount : goal.currentAmount
    goal.targetDate = targetDate || goal.targetDate
    goal.category = category || goal.category
    goal.priority = priority || goal.priority

    await finance.save()

    res.json({
      success: true,
      data: goal,
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

// @desc    Delete a financial goal
// @route   DELETE /api/finances/goals/:id
// @access  Private
export const deleteGoal = async (req, res) => {
  try {
    const finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      return res.status(404).json({
        success: false,
        message: "Finance record not found",
      })
    }

    const goal = finance.goals.id(req.params.id)

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: "Goal not found",
      })
    }

    finance.goals.pull(req.params.id)
    await finance.save()

    res.json({
      success: true,
      message: "Goal removed",
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

// @desc    Update monthly budget
// @route   PUT /api/finances/budget
// @access  Private
export const updateBudget = async (req, res) => {
  try {
    const { monthlyBudget } = req.body

    let finance = await Finance.findOne({ user: req.user._id })

    if (!finance) {
      finance = await Finance.create({
        user: req.user._id,
        transactions: [],
        goals: [],
        monthlyBudget,
      })
    } else {
      finance.monthlyBudget = monthlyBudget
      await finance.save()
    }

    res.json({
      success: true,
      data: {
        monthlyBudget: finance.monthlyBudget,
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
