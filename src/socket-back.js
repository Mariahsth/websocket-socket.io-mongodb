import { adicionarDocumento, atualizaDocumento, encontrarDocumento, excluirDocumento, obterDocumentos } from "./documentosDb.js";
import io from "./servidor.js";


io.on("connection", (socket) => {
    socket.on("obter_documentos", async (devolverDocumentos)=>{
        const documentos= await obterDocumentos();
        devolverDocumentos(documentos);
    })

    socket.on("adicionar_documento", async (nome)=> {
        const documentoExiste= (await encontrarDocumento(nome)) !== null;

        if (documentoExiste) {
            socket.emit("documento_existente", nome);
        } else {
            const resultado = await adicionarDocumento(nome);
            if (resultado.acknowledged) {
                io.emit("adicionar_documento_interface", nome);
            }
        }
    })

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);         //agrupar clientes ou conexões por "sala" de acordo com o nome do documento
        const documento = await encontrarDocumento(nomeDocumento);
        if (documento) {
            devolverTexto(documento.texto);
        }
    });


    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {          //fazendo o servidor escutar o que está sendo escrito no front-end
        const atualizacao= await atualizaDocumento(nomeDocumento, texto);
        if (atualizacao.modifiedCount){
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);       //mandando o texto de volta para o front, enviando para a sala de cada documento
        }
    });


    socket.on("excluir_documento", async (nome) => {
        const resultado = await excluirDocumento(nome);

        if (resultado.deletedCount) {
            io.emit("excluir_documento_sucesso", nome)
        }
    })
});



