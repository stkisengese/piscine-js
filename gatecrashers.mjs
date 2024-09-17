import { createServer } from "http";
import { writeFile } from "fs";
import { promisify } from "util";
import { join } from "path";
import { Buffer } from "buffer";

const PORT = 5000;
// const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const AUTH_USERS = {
  Caleb_Squires: "abracadabra",
  Tyrique_Dalton: "abracadabra",
  Rahima_Young: "abracadabra",
};

const server = createServer(async (req, res) => {
  if (req.method === "POST") {
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
        // Parse the body to ensure it's valid JSON
        const jsonBody = JSON.parse(body);

        // Write the file
        await writeFileAsync(filePath, JSON.stringify(jsonBody, null, 2), "utf8");

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonBody));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Server failed" }));
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

function isValidUser(authHeader) {
  const [authType, encodedCredentials] = authHeader.split(" ");
  if (authType !== "Basic") return false;

  const credentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf8"
  );
  const [username, password] = credentials.split(":");

  return AUTH_USERS[username] === password;
}

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
