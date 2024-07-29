import { exec } from "child_process";

exec("pngquant 2.png --output 2small.png", (error, stdout, stderr) => {
  if (error) {
    // 命令执行出错
    console.error(`exec error: ${error}`);
    return;
  }
  if (stderr) {
    // 标准错误输出
    console.error(`stderr: ${stderr}`);
    return;
  }
  // 标准输出
  console.log(`stdout: ${stdout}`);
  console.log("Image compressed successfully.");
});
