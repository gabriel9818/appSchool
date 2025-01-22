const express = require("express");
const router = express.Router();
const db = require("../../db");

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { estudiante_id, materia, calificacion } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE calificaciones SET estudiante_id = ?, materia = ?, calificacion = ? WHERE id = ?",
      [estudiante_id, materia, calificacion, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }
    res.status(200).json({ message: "Calificación actualizada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
