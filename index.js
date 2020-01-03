const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

const profiles = require("./api/path/profiles");

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(204).json({});
  }
  next();
});

//routing
app.use("/profiles", profiles);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
