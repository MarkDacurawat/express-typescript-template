import express from "express";

const app = express();
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Running on PORT", PORT);
});
