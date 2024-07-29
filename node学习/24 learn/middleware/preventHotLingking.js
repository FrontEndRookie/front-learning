const whiteList = ["localhost", "127.0.0.1"];
const LoggerMiddleware = (req, res, next) => {
  const referer = req.get("referer");
  if (referer) {
    console.log(referer, 1);

    const { hostname } = new URL(referer);
    if (!whiteList.includes(hostname)) {
      res.status(403).send("禁止访问");
      return;
    }
    next();
  } else {
    res.status(403).send("禁止访问");
    return;
  }
};
export default LoggerMiddleware;
