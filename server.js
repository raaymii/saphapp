const express = require("express");
const bodyParser = require("body-parser");
const xCall = require("./saphapp/xcall");

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post("/ci-cd", (req, res) => {
  const { project, action, blockchain } = req.body;

  // Simplified logic: Use xCall to interact with the blockchain
  const result = xCall.executeAction(project, action, blockchain);

  res.json({ success: result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
