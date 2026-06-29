#!/usr/bin/env node
/**
 * Asset Watcher — auto-updates content JSON when images are dropped into public/
 *
 * Watches:
 *   public/profile/    → sets profile image (no JSON change needed, component auto-detects)
 *   public/projects/   → logs available project images (JSON already maps them)
 *   public/certificates/ → auto-adds entries to content/certificates.json
 *
 * Run: npm run watch-assets
 */

import chokidar from "chokidar";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CERTS_JSON = path.join(ROOT, "content", "certificates.json");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function isImage(file) {
  return IMAGE_EXTS.has(path.extname(file).toLowerCase());
}

function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return [];
  }
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

// ─── Certificates watcher ────────────────────────────────────────────────────
function handleCertificate(filePath) {
  if (!isImage(filePath)) return;

  const filename = path.basename(filePath);
  const publicPath = `/certificates/${filename}`;
  const certs = readJSON(CERTS_JSON);

  // Skip if already in JSON
  if (certs.some((c) => c.image === publicPath)) return;

  // Derive a human-readable title from filename
  const name = path
    .basename(filename, path.extname(filename))
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const newEntry = {
    title: name,
    issuer: "Add Issuer",
    date: new Date().getFullYear().toString(),
    image: publicPath,
    link: "",
  };

  certs.push(newEntry);
  writeJSON(CERTS_JSON, certs);
  console.log(`✅ Certificate added: "${name}" → edit content/certificates.json to set issuer/date.`);
}

function handleCertificateRemove(filePath) {
  if (!isImage(filePath)) return;

  const filename = path.basename(filePath);
  const publicPath = `/certificates/${filename}`;
  const certs = readJSON(CERTS_JSON);
  const filtered = certs.filter((c) => c.image !== publicPath);

  if (filtered.length < certs.length) {
    writeJSON(CERTS_JSON, filtered);
    console.log(`🗑  Certificate removed from JSON: ${filename}`);
  }
}

// ─── Profile watcher ─────────────────────────────────────────────────────────
function handleProfile(filePath) {
  if (!isImage(filePath)) return;
  const filename = path.basename(filePath);
  console.log(`✅ Profile photo detected: ${filename} → portfolio will display it automatically.`);
}

// ─── Projects watcher ────────────────────────────────────────────────────────
const PROJECT_MAP = {
  "vaani-seva": "Vaani Seva",
  aria: "Aria",
  "ai-code-review": "AI Code Review",
};

function handleProject(filePath) {
  if (!isImage(filePath)) return;
  const name = path.basename(filePath, path.extname(filePath));
  const label = PROJECT_MAP[name] || name;
  console.log(`✅ Project image detected: "${label}" → will show in portfolio.`);
}

// ─── Start watchers ───────────────────────────────────────────────────────────
console.log("👀 Asset watcher started. Drop images into public/ folders:\n");
console.log("  📸 Profile photo  →  public/profile/profile.jpg");
console.log("  🖼  Project images →  public/projects/vaani-seva.jpg | aria.jpg | ai-code-review.jpg");
console.log("  🏆 Certificates   →  public/certificates/<any-name>.jpg\n");

chokidar
  .watch(path.join(ROOT, "public", "certificates"), { ignoreInitial: false, persistent: true })
  .on("add", handleCertificate)
  .on("unlink", handleCertificateRemove);

chokidar
  .watch(path.join(ROOT, "public", "profile"), { ignoreInitial: false, persistent: true })
  .on("add", handleProfile);

chokidar
  .watch(path.join(ROOT, "public", "projects"), { ignoreInitial: false, persistent: true })
  .on("add", handleProject);
