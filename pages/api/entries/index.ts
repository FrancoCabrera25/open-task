import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { EntryStatus } from "../../../interface";
import EntryModel from "../../../models/Entry";
import { IEntry } from "../../../models/Entry";

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry
  ;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    case "POST":
      return createEntry(req, res);

    default:
      break;
  }

  res.status(200).json({ message: "Example" });
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await EntryModel.find().sort({ createdAt: "ascending" });
  // await db.disconnect();

  res.status(200).json(entries);
};

const createEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description } = req.body;

  const newEntry = new EntryModel({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();
    return res.status(201).json(newEntry);
  } catch (e) {
    
    return res.status(500).json({ message: 'Error create task'})
  }
};
