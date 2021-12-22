import express from "express"
import { addTransaksi, deleteTransaksi, editTransaksi, getTransaksi, getTransaksiById } from "../controllers/transaksiController.js"

const transaksiRouter = express.Router()

// menampilkan semua room/aula
transaksiRouter.get("/", getTransaksi)

// menampilkan satu room
transaksiRouter.get("/:id", getTransaksiById)

// menambahkan satu room
transaksiRouter.post("/", addTransaksi)

// mengupdate satu room
transaksiRouter.patch("/:id", editTransaksi)

// menghapus satu room
transaksiRouter.delete("/:id", deleteTransaksi)

export default transaksiRouter