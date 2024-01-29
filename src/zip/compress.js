import zlib from "zlib";
import fs from "fs";
const compress = async () => {
  const rs = fs.createReadStream("./files/fileToCompress.txt");
  rs.pipe(zlib.createGzip()).pipe(fs.createWriteStream("./files/archive.gz"));
};

await compress();
