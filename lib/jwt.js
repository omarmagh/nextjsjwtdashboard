import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'your-secret-key';
export function signToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch(e) {
    console.error(e);
    return null;
  }
}
