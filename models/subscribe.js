import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Subscribe", SubscribeSchema);
