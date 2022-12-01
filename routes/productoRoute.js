import express from 'express'
import { crearProducto } from '../controllers/productoController.js'

const productoRouter=express.Router()

productoRouter.post('/', crearProducto)

export {
    productoRouter
}