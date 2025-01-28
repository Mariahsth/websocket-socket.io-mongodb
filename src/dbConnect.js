import { MongoClient } from "mongodb";

const cliente= new MongoClient('STRING DE CONEXÃO');

let documentosColecao;


try {
    await cliente.connect();

    const db= cliente.db("alura-websockets");
    documentosColecao=db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
    console.log(erro);
}

export { documentosColecao };   //variavel que representa os dados
