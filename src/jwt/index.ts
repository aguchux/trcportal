import jwt, { JwtPayload, Jwt, JwtHeader, SignOptions } from 'jsonwebtoken';

const jwt_secret = process.env.JWT_SECRET || 'secret';
const jwt_expires_in = process.env.JWT_EXPIRES_IN || '1h';
const jwtOptions: SignOptions = {
    expiresIn: jwt_expires_in
}

export const generateJwt = (payload: JwtPayload): string => {
    return jwt.sign(payload, jwt_secret, jwtOptions);
}

export const verifyJwt = (token: string): Jwt => {
    return jwt.verify(token, jwt_secret) as Jwt;
}

export const decodeJwt = (token: string): Jwt => {
    return jwt.decode(token) as Jwt;
}