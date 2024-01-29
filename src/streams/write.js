import fs from "fs";
const write = async () => {
  const ws = fs.createWriteStream("./files/fileToWrite.txt");
  let content = "";
  process.stdin.on("data", (chunk) => {
    if (chunk.toString().trim() === "exit!") {
      process.stdin.destroy();
    } else {
      content += chunk;
    }
  });
  process.stdin.on("close", (_) => {
    ws.write(content.trim());
    ws.end();
  });
};

await write();
