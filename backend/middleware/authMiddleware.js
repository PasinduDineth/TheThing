import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ message: 'Missing Authorization header' });

  const token = authHeader.split(' ')[1]; // Bearer TOKEN

  jwt.verify(token, process.env.SUPABASE_JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });

    req.user = decoded;  // e.g., contains user_id and other claims
    next();
  });
};
