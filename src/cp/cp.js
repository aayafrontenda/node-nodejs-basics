import { execFile } from "child_process";
const spawnChildProcess = async (args) => {
  const cp = execFile(
    "node",
    ["./files/script.js", ...args],
    (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    }
  );
  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["--someArgument1", "--someArgument2"]);
