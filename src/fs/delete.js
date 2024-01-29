import { promises } from "fs";
import path from "path";

const remove = async () => {
  try {
    await promises.rm(path.normalize("./files/fileToRemove.txt"));
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("FS operation failed");
    }
  }
};

await remove();
