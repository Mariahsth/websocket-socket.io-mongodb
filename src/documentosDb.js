import { documentosColecao } from "./dbConnect.js";

function obterDocumentos(){
    const documentos=documentosColecao.find().toArray();
    return documentos;
}

function adicionarDocumento(nome) {
    const resultado=documentosColecao.insertOne({
        nome,
        texto: ""
    })
    return resultado;
}

function encontrarDocumento(nome) {
    const documento=documentosColecao.findOne({
        nome
    })
    return documento;
};

function atualizaDocumento(nome, texto){
    const atualizacao=documentosColecao.updateOne({
        nome    //primeiro parametro é pra achar o documento nome documento:nome passado pelo parametro
    },{
        $set: {
            texto    //segundo parametro é oq precisa mudar, no caso texto doc:texto passado pelo parametro
        }
    })
    return atualizacao;
};

function excluirDocumento (nome) {
    const resultado= documentosColecao.deleteOne({
        nome
    });
    return resultado;
};


export { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento,excluirDocumento };