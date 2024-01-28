import { promises } from "fs";
import path from "path";

const rename = async () => {
  try {
    await promises.access(path.normalize("./files/wrongFilename.txt"));
  } catch (err) {
    throw new Error("FS operation failed");
  }

  try {
    await promises.access(path.normalize("./files/properFilename.txt"));
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await promises.rename(
        path.normalize("./files/wrongFilename.txt"),
        path.normalize("./files/properFilename.txt")
      );
    } else {
      console.error(err);
    }
  }
};

await rename();
