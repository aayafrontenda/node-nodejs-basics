import { promises } from "fs";
import path from "path";

const create = async () => {
  try {
    await promises.access(path.normalize("./files/fresh.txt"));
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      promises.appendFile(
        path.normalize("./files/fresh.txt"),
        "I am fresh and young"
      );
    } else {
      console.error(err);
    }
  }
};

await create();
