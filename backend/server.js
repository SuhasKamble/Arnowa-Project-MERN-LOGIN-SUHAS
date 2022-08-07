const express = require("express");
const cors = require("cors");
require("./db/conn");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
