// const express =require ("express");
import express from "express";
import {dataBase} from "./database/dataBase.js";
import { productoRouter } from "./routes/productoRoute.js";
const app= express()

app.use('/producto', productoRouter)

try {
    await dataBase.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log(error)
}

app.listen(3100, ()=>{
console.log("Servidor corriendo en puerto 3100")
console.log('http://localhost:3100')
})