import mongoose, { Model, Schema } from "mongoose";
import { Entry, EntryStatus } from "../interface";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: [
        EntryStatus.PENDING,
        EntryStatus.INPROGRES,
        EntryStatus.FINISHED,
      ],
      message: "{VALUE} no es un estado permitido",
    },
    required: true,
    default: EntryStatus.PENDING,
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
