const express = require("express");
const router = express.Router();
const db = require("../../db");

router.post("/", async (req, res) => {
  const { estudiante_id, materia, calificacion } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO calificaciones (estudiante_id, materia, calificacion) VALUES (?, ?, ?)",
      [estudiante_id, materia, calificacion]
    );
    res.status(201).json({ id: result.insertId, message: "Calificación creada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
