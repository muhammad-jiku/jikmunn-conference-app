// external import
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const API_KEY = `${process.env.JWT_API_KEY}`;
    const SECRET = `${process.env.JWT_SECRET_KEY}`;

    const options = {
      expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
      algorithm: 'HS256',
    };
    const payload = {
      apikey: API_KEY,
      permissions: [`allow_join`], // `ask_join` || `allow_mod`
      version: 2,
      roles: ['CRAWLER'],
    };

    const token = jwt.sign(payload, SECRET, options);

    return res.status(200).json({
      message: 'Token generated successfully!',
      token,
    });
  } else {
    return res.status(405).json({
      message: 'Method not allowed! Please try again',
    });
  }
}
