import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import EntryModel from "../../../models/Entry";
import { IEntry } from "../../../models/Entry";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es valido" + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    case "GET":
      return getEntryById(id, res);

    default:
      return res.status(400).json({ message: "Metodo no existe" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();

    const entryToUpdate = await EntryModel.findById(id);

    if (!entryToUpdate) {
      return res
        .status(400)
        .json({ message: `No hay entrada con el id enviado:   ${id}` });
    }

    const {
      description = entryToUpdate.description,
      status = entryToUpdate.status,
    } = req.body;

    const updateEntry = await EntryModel.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    res.status(200).json(updateEntry!);
  } catch (error) {
    res.status(500).json({ message: `Error al actualizar` });
  }
};


const getEntryById = async (id: string | string[], res: NextApiResponse<Data>) => {
  try {
    await db.connect();

    const entry = await EntryModel.findById(id);

    if (!entry) {
      return res
        .status(400)
        .json({ message: `No hay entrada con el id enviado: ${id}` });
    }

    res.status(200).json(entry);
  } catch (error) {}
};
