import express from "express"
import { getCustomer, getCustomerById, addCustomer, editCustomer, deleteCustomer} from "../controllers/customerController.js"

const customerRouter = express.Router()

// menampilkan semua room/aula
customerRouter.get("/", getCustomer)

// menampilkan satu room
customerRouter.get("/:id", getCustomerById)

// menambahkan satu room
customerRouter.post("/", addCustomer)

// mengupdate satu room
customerRouter.patch("/:id", editCustomer)

// menghapus satu room
customerRouter.delete("/:id", deleteCustomer)

export default customerRouter