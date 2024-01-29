import fs from "fs";

const read = async () => {
  const rs = fs.createReadStream("./files/fileToRead.txt");
  let content = "";
  rs.on("data", (chunk) => {
    content += chunk;
  });
  rs.on("end", () => {
    process.stdout.write(content);
  });
};

await read();
