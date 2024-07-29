import log4js from "log4js";
log4js.configure({
  appenders: {
    out: {
      type: "stdout",
      layout: {
        type: "colored",
      },
    },
    file: {
      filename: "logs/server.log",
      type: "file",
    },
  },
  categories: {
    default: {
      appenders: ["out", "file"],
      level: "debug",
    },
  },
});
const logger = log4js.getLogger("default");
const LoggerMiddleware = (req, res, next) => {
  console.log(req.method, req.url);
  // logger.debug(`[${req.method}] ${req.url}`);
  next();
};
export default LoggerMiddleware;
