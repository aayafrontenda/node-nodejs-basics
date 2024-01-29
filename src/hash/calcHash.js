import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const rs = fs.createReadStream("./files/fileToCalculateHashFor.txt");
  let content = "";
  rs.on("data", (chunk) => {
    content += chunk;
  });
  rs.on("end", () => {
    const hash = crypto
      .createHash("sha256")
      .update(content, "utf-8")
      .digest("hex");
    console.log(hash);
  });
};

await calculateHash();
