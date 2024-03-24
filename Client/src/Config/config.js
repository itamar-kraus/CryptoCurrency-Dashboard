const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 4000;

const host = process.env.HOST || DEFAULT_HOST;
const port = process.env.PORT || DEFAULT_PORT;

module.exports = {
  host,
  port
};