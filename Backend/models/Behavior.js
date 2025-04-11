import mongoose from 'mongoose';

const behaviorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    spendingPatterns: {
      categories: [
        {
          name: String,
          percentage: Number,
          trend: String, // increasing, decreasing, stable
        },
      ],
      largestExpenseCategory: String,
      impulsePurchaseFrequency: Number,
    },
    savingBehavior: {
      consistentSavings: Boolean,
      savingsRate: Number,
      emergencyFundStatus: String, // none, partial, adequate
    },
    investmentBehavior: {
      riskTolerance: String, // low, medium, high
      diversification: String, // poor, adequate, excellent
      investmentFrequency: String, // irregular, regular
    },
    optimizationTips: [
      {
        category: String,
        description: String,
        potentialSavings: Number,
        difficulty: String, // easy, medium, hard
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Behavior = mongoose.model('Behavior', behaviorSchema);

export default Behavior;
