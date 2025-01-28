import express from 'express';
import url from "url";
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import "./dbConnect.js";

const app=express();
const porta=process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico=path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));      //usar o diretorio publico de forma estática

const servidorHttp= http.createServer(app);

servidorHttp.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`));

const io = new Server(servidorHttp);

export default io;