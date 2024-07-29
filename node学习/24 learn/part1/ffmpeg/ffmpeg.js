const { execSync } = require("child_process");
//ffmpeg 基本格式转换
// execSync(`ffmpeg -i test-5s.mp4 test.gif`, { stdio: "inherit" });

//ffmpeg 提取音频
// execSync(`ffmpeg -i test-ffmpeg.mp4 test-ffmpeg.mp3`, { stdio: "inherit" });

// //裁剪视频
// execSync(`ffmpeg -i test-ffmpeg.mp4 -ss 00:00:10 -to 00:00:15 test5s.mp4`, {
//   stdio: "inherit",
// });

// //添加水印
execSync(
  `ffmpeg -i test-5s.mp4 -vf drawtext=text="hide on bush":fontsize=30:x=10:y=10:fontcolor=pink test-5s-water.mp4`,
  { stdio: "inherit" }
);

// //删除水印
// execSync(
//   `ffmpeg -i test-ffmpeg.mp4 -vf delogo=w=360:h=30:x=10:y=10 test3.mp4`,
//   { stdio: "inherit" }
// );
