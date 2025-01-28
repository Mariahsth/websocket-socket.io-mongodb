import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();        //estabelece a conexão com o front-end

function selecionarDocumento(nome) {     
    socket.emit("selecionar_documento", nome, (texto) => {      //passando o nome do doc pro servidor
        atualizaTextoEditor(texto)        //quando back retorna com o texto de cada documento,o front atualiza
    });          
};

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);      //Passando o que foi digitado no campo para o servidor (no back precisa fazer o servidor escutar esse evento)
};

socket.on("texto_editor_clientes", (texto) => {     //recebendo de volta do back
    atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome);
};

socket.on("excluir_documento_sucesso", (nome)=> {
    alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };