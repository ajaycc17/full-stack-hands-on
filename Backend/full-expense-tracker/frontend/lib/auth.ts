import { jwtVerify, SignJWT } from "jose";

interface UserJwtPayload {
    jti: string;
    iat: number;
}

export const getJwtSecretKey = () => {
    const secret = process.env.SECRET;
    if (!secret || secret.length === 0) {
        throw new Error("The env variable SECRET is not set for JWT.");
    }
    return secret;
};

export const verifyAuth = async (token: string) => {
    try {
        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(getJwtSecretKey())
        );
        return verified.payload as UserJwtPayload;
    } catch (error) {
        throw new Error("Your token has expired!");
    }
};
