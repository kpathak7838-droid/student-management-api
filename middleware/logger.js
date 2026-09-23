const loggerMiddleware = (req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`Method: ${req.method} | URL: ${req.url} | Time: ${time}`);
  next();
};

module.exports = { loggerMiddleware };