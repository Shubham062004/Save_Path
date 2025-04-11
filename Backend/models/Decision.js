import mongoose from 'mongoose';

const decisionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: ['career', 'investment', 'purchase', 'education', 'other'],
      required: true,
    },
    financialImpact: {
      initialCost: Number,
      ongoingCost: Number,
      returnOnInvestment: Number,
      netImpact: Number,
    },
    alternativesConsidered: [
      {
        title: String,
        description: String,
        projectedOutcome: String,
      },
    ],
    outcome: {
      description: String,
      rating: {
        type: Number,
        min: 1,
        max: 10,
      },
      lessonsLearned: [String],
    },
    analysis: {
      whatWentWell: [String],
      whatCouldImprove: [String],
      opportunityCost: Number,
      recommendationForFuture: String,
    },
  },
  {
    timestamps: true,
  }
);

const Decision = mongoose.model('Decision', decisionSchema);

export default Decision;
