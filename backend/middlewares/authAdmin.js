import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;

        if (!atoken) {
            return res.status(401).json({ success: false, message: "Token is Missing!" });
        }

        const tokenDecode = jwt.verify(atoken, process.env.JWT_SECRET);

        // Check if token matches admin credentials
        if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Not Authorized, Try Again!" });
        }

        // IMPORTANT: Attach an object to req.user so controllers don't crash
        req.user = { role: "admin" };

        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Unauthorized access" });
    }
};

export default authAdmin;
