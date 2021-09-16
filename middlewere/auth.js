// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// module.exports = function (req, res, next) {
//     const token = req.header('token')
//     if (!token) return res.status(401).send("Access denied.. , no token found");
//     try {
//         const decoded = jwt.verify(token, process.env.SecretKey);
//         req.user = decoded;
//         next()

//     } catch (error) {
//         res.status(400).send("Invalid token..")
//     }
// };

