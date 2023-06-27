import express from 'express'
import mongoose from 'mongoose'
import routes from './src/routes'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void {
        this.express.use(express.json())
    }

    public routes(): void {
        this.express.use(routes)
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/esoft5s')
            console.log('BANCO DE DADOS CONECTADO COM SUCESSO!')
        } catch (err) {
            console.error('ERRO AO CONECTAR O BANCO DE DADOS, ERRO: ', err)
        }
    }
}
export default new App().express