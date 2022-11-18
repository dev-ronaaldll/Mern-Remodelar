import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import productosRoutes from "./routes/productos.routes.js";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)
// #TODO SECURITY
app.use(cors());
// app.use(cors({
//     origin: 'http://192.168.1.101:3000'
// }))
app.use(express.json());
app.use(indexRoutes);
app.use(productosRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
