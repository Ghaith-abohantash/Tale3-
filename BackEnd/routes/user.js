const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const bcrypt = require("bcryptjs");

router.put("/update-password", async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    if (!email || !oldPassword || !newPassword) {
        return res.status(400).json({ message: "جميع الحقول مطلوبة" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "المستخدم غير موجود" });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "كلمة السر القديمة غير صحيحة" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;

        await user.save();

        res.status(200).json({ message: "تم تحديث كلمة السر بنجاح" });
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ message: "حدث خطأ أثناء تحديث كلمة السر" });
    }
});

module.exports = router;
