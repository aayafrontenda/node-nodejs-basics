import { promises } from "fs";
import path from "path";

const list = async () => {
  try {
    console.log(await promises.readdir(path.normalize("./files")));
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("FS operation failed");
    }
  }
};

await list();
