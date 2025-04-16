import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // 表示 vitest 启用全局模式
    // 自动的将常见的测试工具方法作为全局变量可用
    // test、expect、describe、it、beforeEach、afterEach
    globals: true,
    // 配置测试文件的运行环境
    environment: "node",
  },
});
