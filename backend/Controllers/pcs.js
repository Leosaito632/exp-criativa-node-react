import db from "../db.js";

export const getPcs = (_, res) => {
  const q = "SELECT * FROM crud.computer";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

export const createPc = (req, res) => {
  const { cpu, gpu, memory, storage, psu } = req.body;
  if (
    strValida(cpu) &&
    strValida(gpu) &&
    strValida(memory) &&
    strValida(storage) &&
    strValida(psu)
  ) {
    const q =
      "INSERT INTO crud.computer (cpu, gpu, memory, storage, psu) VALUES (?,?,?,?,?)";
    db.query(q, [cpu, gpu, memory, storage, psu], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json(data);
    });
  } else {
    return res.status(400);
  }
};

export const removePc = (req, res) => {
  const id = req.body["id"];
  const q = "DELETE FROM crud.computer WHERE (`id`=?)";
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
  const { id, cpu, gpu, memory, storage, psu } = req.body;
  if (
    strValida(cpu) &&
    strValida(gpu) &&
    strValida(memory) &&
    strValida(storage) &&
    strValida(psu)
  ) {
    const q =
      "UPDATE crud.computer SET cpu = ?, gpu = ?, memory = ?, storage = ?, psu = ? WHERE id = ?;";
    db.query(q, [cpu, gpu, memory, storage, psu, id], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json(data);
    });
  } else {
    return res.status(400);
  }
};
