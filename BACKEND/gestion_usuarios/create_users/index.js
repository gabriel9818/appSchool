const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { id, username, contraseña } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO usuarios (id, username, contraseña) VALUES (?, ?, ?)",
      [id, username, contraseña]
    );
    res.status(201).json({ id: result.insertId, message: "Usuario creado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
