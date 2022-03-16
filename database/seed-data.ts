import { EntryStatus } from "../interface";


interface SeedData {
 entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: EntryStatus;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "PENDIENTE prueba",
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },

    {
      description: "INPROGRESS prueba",
      status: EntryStatus.INPROGRES,
      createdAt: Date.now(),
    },
    {
      description: "COMPLETADA prueba",
      status: EntryStatus.FINISHED,
      createdAt: Date.now(),
    },
  ],
};
