import express from "express";
import paymentRoutes from "./routes/payment.routes";
import morgan from "morgan"

const app = express();

app.use(morgan('dev'))

app.use(paymentRoutes)

app.listen(3000);

console.log("Server on port", 3000)