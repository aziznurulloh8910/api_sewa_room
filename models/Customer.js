import mongoose from "mongoose";

const Customer = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  kontak: {
    type: String,
    required: true
  },
});

export default mongoose.model("Customer", Customer)
