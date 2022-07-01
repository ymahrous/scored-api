const express = require('express');
const port = 3000 | process.env.PORT;
const app = express();

app.use(express.json());
app.listen(port, () => console.log("running on port", port));