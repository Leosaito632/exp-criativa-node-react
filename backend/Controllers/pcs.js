import db from "../db.js";

export const getPcs = (_, res) => {
  const q = "SELECT * FROM usuarios";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

export const createPc = (req, res) => {
  const { nome, idade, cpf } = req.body;
  if (strValida(nome) && strValida(idade) && strValida(cpf)) {
    const q = "INSERT INTO usuarios (nome, idade, cpf) VALUES (?,?,?)";
    db.query(q, [nome, idade, cpf], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json(data);
    });
  }
};

export const removePc = (req, res) => {
  const id = req.body["id"];
  const q = "DELETE FROM usuarios WHERE (`idusuarios`=?)";
  db.query(q, id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

function strValida(string) {
  if (string.trim() == null || string.trim() === "") {
    return false;
  }
  return true;
}

export const editPc = (req, res) => {
  const { id, nome, idade, cpf } = req.body;
  if (strValida(nome) && strValida(idade) && strValida(cpf)) {
    const q =
      "UPDATE crud.usuarios SET nome = ?, idade = ?, cpf = ? WHERE idusuarios = ?;";
    db.query(q, [nome, idade, cpf, id], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json(data);
    });
  }
};
