const express = require("express");
const router = express.Router();
const db = require("../../db");

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM calificaciones WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }
    res.status(200).json({ message: "Calificación eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
