import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    const tokenJwt= socket.handshake.auth.token;
    const secret = process.env.JWT_SECRET || 'fallback-local-secret';
    try {
        const payloadToken= jwt.verify(tokenJwt, secret);
        socket.emit("autorizacao_sucesso", payloadToken)
        next();
    } catch (erro) {
        next(erro);
    }
}

  export default autorizarUsuario;
