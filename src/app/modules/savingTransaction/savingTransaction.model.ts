import { model, Schema } from "mongoose";
import { SavingTransaction } from "./savingTransaction.interface";

const SavingTransactionSchema = new Schema<SavingTransaction>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    dateOfCollection: { type: String, required: true },
    savingAmount: { type: Number, required: true },
    savingTransactionInfo: { type: String },
  },
  { timestamps: true }
);

export const SavingTransactionModel = model(
  "SavingTransaction",
  SavingTransactionSchema
);
