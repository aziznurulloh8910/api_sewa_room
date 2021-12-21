import express from "express"

import { addRoom, deleteRoom, editRoom, getRoom, getRoomById } from "../controllers/roomController.js"

const room_router = express.Router()

// menampilkan semua room/aula
room_router.get("/", getRoom)

// menampilkan satu room
room_router.get("/:id", getRoomById)

// menambahkan satu room
room_router.post("/", addRoom)

// mengupdate satu room
room_router.patch("/", editRoom)

// menghapus satu room
room_router.delete("/:id", deleteRoom)

export default room_router