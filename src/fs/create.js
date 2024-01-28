import fs from "fs";
import path from "path";

const create = async () => {
  try {
    if (fs.existsSync(path.normalize("./files/fresh.txt"))) {
      throw new Error("FS operation failed");
    }
    fs.appendFile(
      path.normalize("./files/fresh.txt"),
      "I am fresh and young",
      function (error) {
        if (error) {
          throw new Error("FS (write) operation failed");
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

await create();
