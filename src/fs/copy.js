import { promises } from "fs";
import path from "path";

const copy = async () => {
  try {
    await promises.access(path.normalize("./files"));
  } catch (err) {
    throw new Error("FS operation failed");
  }

  try {
    await promises.access(path.normalize("./files-copy"));
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await promises.cp(
        path.normalize("./files"),
        path.normalize("./files-copy"),
        { recursive: true }
      );
    } else {
      console.error(err);
    }
  }
};

await copy();
