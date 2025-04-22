import * as http from "http";
import getHTML from "./get-html";
import getMetadata from "./get-metadata";

const hostname = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
    return;
  }
  res.setHeader("Content-Type", "application/json");

  // Get the URL from POST body JSON data
  // { url: "https://www.google.com" }
  // Get the HTML from the URL using getHTML()
  // Get the metadata from the HTML using getMetadata()
  // Return the metadata as JSON

  // TODO: delete and replace this with your code
  res.statusCode = 200;
  res.end(JSON.stringify({ error: "Not implemented" }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
