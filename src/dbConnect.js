import { MongoClient } from "mongodb";

const cliente= new MongoClient('mongodb+srv://admin:admin123@cluster1.rw4pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');

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