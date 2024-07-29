import { exec } from "node:child_process";
import util from "node:util";

//之前是通过回调进行获取
exec("node -v", (err, stdout, stderr) => {
  console.log(stdout);
});

//现在通过promise进行链式调用
const execPromise = util.promisify(exec);
execPromise("node -v")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(util.format("%s---%s", "ying", "shu"));
