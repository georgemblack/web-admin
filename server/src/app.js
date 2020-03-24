const express = require("express");
const auth = require("./auth");
const firestore = require("./firestore");
const { RateLimiterMemory } = require("rate-limiter-flexible");

/**
 * Minimal rate-limiting
 */
const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});
const rateLimit = async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip, 1);
    next();
  } catch (err) {
    return res.status(429).send("Too many requests");
  }
};

/**
 * Express setup
 */
const app = express();
app.use(express.json());
app.use(rateLimit);
app.disable("x-powered-by");
const port = process.env.PORT || 8080;

/**
 * Serve UI
 */
app.use(express.static("public"));

/**
 * Generate token for client, auth with username and password
 */
app.post("/auth", auth.validateBasicAuth, async (req, res) => {
  return res.status(200).send({ token: auth.generateToken() });
});

/**
 * Get all web views in previous 30 days
 */
app.get("/api/views", auth.validateToken, async (req, res) => {
  res.header("Content-Type", "application/json");
  try {
    return res.status(200).send(await firestore.getViews());
  } catch (err) {
    return res.status(500).send("Internal error");
  }
});

/**
 * Create new bookmark
 */
app.post("/api/bookmarks", auth.validateToken, async (req, res) => {
  if (
    typeof req.body.title !== "string" ||
    req.body.title === "" ||
    typeof req.body.url !== "string" ||
    req.body.url === ""
  ) {
    return res.status(400).send("Validation failed");
  }

  const docPayload = {
    title: req.body.title,
    url: req.body.url,
    timestamp: new Date(),
  };

  try {
    await firestore.postBookmark(docPayload);
    return res.status(200).send("Done");
  } catch (err) {
    return res.status(500).send("Internal error");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
