import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { existsSync } from "node:fs";

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

const server = createServer(async (req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  filePath = join(process.cwd(), "dist", filePath);

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const ext = extname(filePath);
  res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
  const data = await readFile(filePath);
  res.end(data);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
