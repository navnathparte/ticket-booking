import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
