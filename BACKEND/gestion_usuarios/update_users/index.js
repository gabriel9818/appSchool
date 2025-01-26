const express = require("express");
const router = express.Router();
const db = require("../../db");

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, email, contraseña } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE usuarios SET nombre = ?, email = ?, contraseña = ? WHERE id = ?",
      [nombre, email, contraseña, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
