import mongoose from "mongoose";

const Room = mongoose.Schema({
  roomName:{
    type: String,
    required: true
  },
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