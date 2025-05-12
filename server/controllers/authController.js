import bcrypt from "bcryptjs";
import pool from "../db.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

    if (typeof password !== "string" || password.trim() === "") {
    return res.status(400).json({ message: "Password must be a non-empty string" });
  }

  try {
    const userExists = await pool.query("SELECT * FROM customers WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    

    const newUser = await pool.query(
      "INSERT INTO customers (first_name, last_name, email, password_hash, phone_number) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, phone_number",
      [firstName, lastName,email, hashedPassword, phoneNumber]
    );

    res.status(201).json({ message: "User created", user: newUser.rows[0] });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRes = await pool.query("SELECT * FROM customers WHERE email = $1", [email]);
    if (userRes.rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = userRes.rows[0];

    if (!user.is_verified) {
      return res.status(403).json({ message: "Please verify your email before logging in" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    await pool.query("UPDATE customers SET last_login = NOW() WHERE id = $1", [user.id]);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export {registerUser, loginUser};
