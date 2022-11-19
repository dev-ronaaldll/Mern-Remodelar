import { pool } from "../db.js";
export const getProductos = async (req, res) => {
  try {
    // TODO : FIX -1 [-5:]
    const [result] = await pool.query(
      "SELECT * FROM productos ORDER BY codprod DESC LIMIT 5"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM productos WHERE codprod = ?",
      [req.params.codprod]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProducto = async (req, res) => {
  try {
    const {
      codprod,
      codbar,
      nomprod,
      exiprod,
      venprod,
      fecapa,
      undfra,
      pvenfra,
    } = req.body;
    console.log(req.body);
    // if(tipcos===undefined) tipcos = "UC";
    // if(cosulc===undefined) cosulc = 0;
    // if(ivainc===undefined) ivainc = "N";
    // if(fecapa===undefined) fecapa = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    // if(canven===undefined) canven = 0;
    const [result] = await pool.query(
      "INSERT INTO productos(codprod, codbar, nomprod, exiprod, venprod,  fecapa,  undfra, pvenfra) VALUES (?,?,?,?,?,?,?,?)",
      [codprod, codbar, nomprod, exiprod, venprod, fecapa, undfra, pvenfra]
    );
    res.json({
      result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE productos SET ? WHERE codprod = ?",
      [req.body, req.params.codprod]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM productos WHERE codprod = ?",
      [req.params.codprod]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getLastProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT codprod FROM productos ORDER BY codprod DESC LIMIT 1"
    );
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const searchProductos = async (req, res) => {
  try {
    const { search } = req.body;
    if (search === "" || search === undefined) {
      const [result] = await pool.query(
        "SELECT * FROM productos ORDER BY codprod DESC LIMIT 5"
      );
      res.json(result);
    } else {
      const words = search.split(",");
      console.log(words);
      if (words.length === 1) {
        const [result] = await pool.query(
          "SELECT * FROM productos WHERE codprod = ? OR nomprod LIKE ?  LIMIT 50",
          [words[0], `%${words[0]}%`]
        );        
        res.json(result);
      } else if (words.length === 2) {
        const [result] = await pool.query(
          "SELECT * FROM productos WHERE nomprod LIKE ? AND nomprod LIKE ?  LIMIT 50",
          [`%${words[0]}%`, `%${words[1]}%`]
        );
        res.json(result);
      } else if (words.length >= 3) {
        const [result] = await pool.query(
          "SELECT * FROM productos WHERE nomprod LIKE ? AND nomprod LIKE ? AND nomprod LIKE ?  LIMIT 50",
          [`%${words[0]}%`, `%${words[1]}%`, `%${words[2]}%`]
        );
        res.json(result);
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
