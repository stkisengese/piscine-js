import { createServer } from "http";
import { readFile, writeFile } from "fs";
import { promisify } from "util";
import { join } from "path";
import { Buffer } from "buffer";

const PORT = 5000;
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const AUTH_USERS = {
  Caleb_Squires: "abracadabra",
  Tyrique_Dalton: "abracadabra",
  Rahima_Young: "abracadabra",
};

const server = createServer(async (req, res) => {
  try {
    // Handle GET requests
    if (req.method === "GET") {
      const guestName = req.url.slice(1); // Remove the leading '/'
      const filePath = join("guests", `${guestName}.json`);

      try {
        const data = await readFileAsync(filePath, "utf8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      } catch (error) {
        if (error.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "guest not found" }));
        } else {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "server failed" }));
        }
      }
    }
    // Handle POST requests
    else if (req.method === "POST") {
      const authHeader = req.headers["authorization"];
      if (!authHeader || !isValidUser(authHeader)) {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Authorization Required" }));
        return;
      }

      const guestName = req.url.slice(1); // Remove the leading '/'
      const filePath = join("guests", `${guestName}.json`);

      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", async () => {
        try {
          // Validate JSON body before writing
          JSON.parse(body);
          await writeFileAsync(filePath, body, "utf8");
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(body);
        } catch (error) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid JSON" }));
        }
      });
    } else {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Method Not Allowed" }));
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Server Failed" }));
  }
});

// Function to validate user credentials
function isValidUser(authHeader) {
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  const [username, password] = credentials.split(":");

  return AUTH_USERS[username] === password;
}

// Start the server and listen on port 5000
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
