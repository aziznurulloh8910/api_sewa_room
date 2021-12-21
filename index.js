import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import room_router from "./routers/room_router.js"
import customerRouter from "./routers/customerRouter.js"

mongoose.connect("mongodb://localhost:27017/sewa_room", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.on("error", (e) => console.log(e))
connection.on("open", () => console.log("Connection Success"))

const app = express()

app.use(cors())
app.use(express.json())

app.use("/room", room_router)
app.use("/customer", customerRouter)
app.listen("3000", () => console.log("Server berjalan di port 3000"))
