import jwt from "jsonwebtoken";

function gerarJwt(payload){
    const secret = process.env.JWT_SECRET || 'fallback-local-secret';
    const tokenJwt= jwt.sign(payload, secret, {
        expiresIn: "1h"
    });

    return tokenJwt;
};

export default gerarJwt;
