import { request } from "express";
import Customer from "../models/Customer.js";

// menampilkan semua customer
export const getCustomer = async(req, res) => {
    try {
        const customer = await Customer.find()
        res.json(customer)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// menampilkan satu customer
export const getCustomerById = async(req, res) => {
    try {
        const id = req.params.id
        const satu_customer = await Customer.findById(id)
        res.json(satu_customer)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// menambahkan satu customer
export const addCustomer = async(req, res) => {
    try {
        const customer = new Customer(req.body)
        const savedCustomer = await customer.save()
        res.status(201).json(savedCustomer)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// mengupdate satu customer
export const editCustomer = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Customer.findById(id)
        if(!check){
            return res.status(401).json({message: "Data customer Tidak Ditemukan"})
        } else {
            const updatedCustomer = await Customer.updateOne(
                {_id:id},
                {$set:req.body}
            )
            res.status(200).json(updatedCustomer)
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// menghapus satu customer
export const deleteCustomer = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Customer.findById(id)
        if(!check){
            return res.status(401).json({message: "Data customer Tidak Ditemukan"})
        } else {
            const deletedCustomer = await Customer.deleteOne({_id:id})
            res.status(200).json(deletedCustomer)
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

