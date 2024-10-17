import http from "http";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markdownFilePath = path.join(__dirname, "README.md");

const PORT = 4000;

let server;

function startServer() {
  server = http.createServer((req, res) => {
    fs.readFile(markdownFilePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
        return;
      }

      const html = marked(data);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css">
            <title>Markdown to HTML</title>
          </head>
          <body class="markdown-body">
            ${html}
          </body>
        </html>
      `);
    });
  });

  server.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

fs.watch(markdownFilePath, (eventType) => {
  if (eventType === "change") {
    console.log(`${markdownFilePath} has changed, restarting server...`);
    server.close(() => {
      startServer();
    });
  }
});

startServer();
