import mongoose from 'mongoose';

const simulationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['career', 'investment', 'purchase', 'education', 'other'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    initialInvestment: {
      type: Number,
      default: 0,
    },
    recurringCost: {
      type: Number,
      default: 0,
    },
    expectedReturn: {
      type: Number,
      default: 0,
    },
    timeHorizon: {
      type: Number, // in months
      required: true,
    },
    riskLevel: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    results: {
      netWorthImpact: Number,
      cashFlowImpact: Number,
      roi: Number,
      breakEvenPoint: Number,
      projectedOutcomes: [
        {
          year: Number,
          value: Number,
          description: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Simulation = mongoose.model('Simulation', simulationSchema);

export default Simulation;
