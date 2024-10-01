import express from "express";

import likes from "./data/likes.js";
import posts from "./data/posts.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 9000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.options("*", (req, res) => {
  res.send();
});

app.post("/auth", (req, res) => {
  res.status(200).send({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NzYxNjQwMjEsImV4cCI6MTcwNzcwMDAyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.7D8EeZkX8uNKMiMuUXpd0isKQwvFK3c3BTiMMnQvzZY",
  });
});

app.get("/likes", async (req, res) => {
  res.header("Content-Type", "application/json");
  res.status(200).send({ likes: likes });
});

app.get("/posts", async (req, res) => {
  res.header("Content-Type", "application/json");
  res.status(200).send({ posts: posts });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
