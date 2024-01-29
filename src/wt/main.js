import os from "os";
import { Worker, isMainThread } from "worker_threads";
import path from "path";
import url from "url";

const performCalculations = async () => {
  if (isMainThread) {
    const workerPromises = [];
    let input = 10;

    os.cpus().forEach(() => {
      workerPromises.push(
        new Promise((resolve, reject) => {
          const worker = new Worker(
            path.normalize(
              `${path.normalize(
                path.dirname(url.fileURLToPath(import.meta.url))
              )}/worker.js`
            )
          );

          // Listen for messages from the worker
          worker.postMessage(input);
          worker.on("message", (fib) => {
            resolve({
              status: "resolved",
              data: fib,
            });
          });
          worker.on("error", () => {
            reject({
              status: "error",
              data: null,
            });
          });
          worker.on("exit", (code) => {
            if (code !== 0)
              reject(new Error(`Worker stopped with exit code ${code}`));
          });

          // Send the input data to the worker
          input++;
        })
      );
    });

    console.log(await Promise.all(workerPromises));
  }
};

await performCalculations();
