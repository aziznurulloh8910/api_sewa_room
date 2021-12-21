import mongoose, { SchemaTypes } from "mongoose";

const Transaksi = mongoose.Schema({
  lama_sewa: {
    type: Number,
    required: true
  },
  tanggal_masuk: {
    type: Date,
    required: true,
  },
  tanggal_keluar: {
    type: Date,
    required: true
  },
  total_pembayaran: {
    type: Number,
    required: true
  },
  customer: {
    type: SchemaTypes.ObjectId,
    ref: "Customer"
  },
  room_id: {
    type: SchemaTypes.ObjectId,
    ref: "Room"
  },
});

export default mongoose.model("Transaksi", Transaksi)


