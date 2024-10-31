import http from "http";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const en = path.join(__dirname, "README.md");
const es = path.join(__dirname, "es.md");

const PORT = 4000;

let server;

function getPage(data) {
  const html = marked(data);
  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css">
            <title>Markdown to HTML</title>
            <style>
            body.markdown-body {margin: 0 auto; max-width: 800px; padding: 30px;}
            </style>
          </head>
          <body class="markdown-body">
            ${html}
          </body>
        </html>
      `;
}

function startServer() {
  server = http.createServer((req, res) => {
    const file = req.url === "/es" ? es : en;
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(getPage(data));
    });
  });

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

function restartServer(eventType) {
  if (eventType === "change") {
    console.log(`File has changed, restarting server...`);
    server.close(() => {
      startServer();
    });
  }
}

fs.watch(en, restartServer);

fs.watch(es, restartServer);

startServer();
