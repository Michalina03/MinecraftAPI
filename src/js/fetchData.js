// scripts/fetchData.js
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const BASE_URL = "https://mcdata.nalo.dev";
const OUT_DIR = path.resolve("public");

// lista endpointów, które chcesz zaciągnąć
const endpoints = ["mob", "item", "block"];

async function downloadJson(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();

  const filePath = path.join(OUT_DIR, "data", `${endpoint}s.json`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`✅ Zapisano ${endpoint}s.json`);

  return data;
}

async function downloadImages(items, folder) {
  const imgDir = path.join(OUT_DIR, "img", folder);
  fs.mkdirSync(imgDir, { recursive: true });

  for (const item of items) {
    if (!item.image) continue; // jeśli obiekt ma obrazek
    const url = `${BASE_URL}${item.image}`;
    const filename = path.basename(url);
    const filepath = path.join(imgDir, filename);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to download ${url}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(filepath, Buffer.from(buffer));
      console.log(`📥 ${folder}/${filename}`);
    } catch (err) {
      console.warn(`⚠️ Nie udało się pobrać: ${url}`);
    }
  }
}

async function main() {
  for (const endpoint of endpoints) {
    const data = await downloadJson(endpoint);
    await downloadImages(data, endpoint);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
