const app = require("./src/index");
const connect = require("./src/configs/db");
require("dotenv").config();
const port = process.env.PORT || 3001;

app.listen(port, async () => {
  await connect();
  console.log("Connected");
});
