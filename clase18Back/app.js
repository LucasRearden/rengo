import express from "express";
import "dotenv/config";
import { connectMongo } from "./src/v1/config/mongo.config.js";
import apiRoutes from "./src/v1/routes/index.js";
import { middlewareErrores } from "./src/v1/middleware/error.middleware.js";
import { apiRateLimit } from "./src/v1/middleware/rate-limit.middleware.js";
import cors from 'cors';


const app = express();

//Habilitar CORS para todas las rutas y orígenes
app.use(cors({
    origin: ['http://localhost:5000', 'http://localhost:5500'], // o solo para pruebas origen: '*'
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    maxAge: 86400 // el valor se define en segundos
}));



app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Servidor disponible" })
})




app.use(
    "/api",

    // Después conectamos MongoDB.
    async (req, res, next) => {
        try {
            await connectMongo();
            next();
        } catch (error) {
            next(error);
        }
    },

    // Finalmente procesamos las rutas.
    apiRoutes
);


//mas rutas 


app.use(middlewareErrores)

// app.use(routerTareas);

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

export default app;