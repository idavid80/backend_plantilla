const express = require('express')
const app = express()
const port = 4000

var cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/prueba", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
