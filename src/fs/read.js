import { promises } from "fs";
import path from "path";

const read = async () => {
  try {
    console.log(
      await promises.readFile(path.normalize("./files/fileToRead.txt"), "utf-8")
    );
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("FS operation failed");
    }
  }
};

await read();
