import zlib from "zlib";
import fs from "fs";
const decompress = async () => {
  const rs = fs.createReadStream("./files/archive.gz");
  rs.pipe(zlib.createUnzip()).pipe(
    fs.createWriteStream("./files/fileToCompress.txt")
  );
};

await decompress();
