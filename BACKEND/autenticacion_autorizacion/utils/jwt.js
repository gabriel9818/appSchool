const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');

// Cargar variables de entorno desde .env
dotenv.config();

// Generar una clave aleatoria al inicio del servidor si no hay una clave definida en .env
const secretKey = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');

// Generar un token
const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // El token expira en 1 hora
};

// Verificar un token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};

// Exportar las funciones y la clave secreta
module.exports = { generateToken, verifyToken, secretKey };
