const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Authorization token tidak ditemukan." });
        }

        const token = authHeader.split(" ")[1]; // Mengambil token setelah "Bearer "
        if (!token) {
            return res.status(401).json({ message: "Format token tidak valid." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Menyimpan data user ke request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token tidak valid atau sudah kadaluarsa." });
    }
};

module.exports = authMiddleware;