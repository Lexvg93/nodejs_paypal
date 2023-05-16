import express from "express";
import paymentRoutes from "./routes/payment.routes";
import morgan from "morgan"
import {PORT} from './config'

const app = express();

app.use(morgan('dev'))

app.use(paymentRoutes)

app.listen(PORT);

console.log("Server on port", PORT)