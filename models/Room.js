import mongoose from "mongoose";

const Room = mongoose.Schema({
  kapasitas: {
    type: Number,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
});

export default mongoose.model("Room", Room)

