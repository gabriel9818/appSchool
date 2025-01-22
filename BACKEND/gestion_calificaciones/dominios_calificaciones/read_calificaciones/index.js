const express = require("express");
const router = express.Router();
const db = require("../../db");

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM calificaciones");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM calificaciones WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
