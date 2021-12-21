import { request } from "express";
import Room from "../models/Room.js";

// menampilkan semua room
export const getRoom = async(req, res) => {
    try {
        const room = await Room.find()
        res.json(room)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// menampilkan satu room
export const getRoomById = async(req, res) => {
    try {
        const id = req.params.id
        const satu_room = await Room.findById(id)
        res.json(satu_room)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// menambahkan satu room
export const addRoom = async(req, res) => {
    try {
        const room = new Room(req.body)
        const savedRoom = await room.save()
        res.status(201).json(savedRoom)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// mengupdate satu room
export const editRoom = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Room.findById(id)
        if(!check){
            return res.status(401).json({message: "Data Room Tidak Ditemukan"})
        } else {
            const updatedRoom = await Room.updateOne(
                {_id:id},
                {$set:req.body}
            )
            res.status(200).json(updatedRoom)
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// menghapus satu room
export const deleteRoom = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Room.findById(id)
        if(!check){
            return res.status(401).json({message: "Data Room Tidak Ditemukan"})
        } else {
            const deletedRoom = await Room.deleteOne({_id:id})
            res.status(200).json(deletedRoom)
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

