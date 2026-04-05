// scrape-all-pages-images.js
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const BASE_URL = "https://risenshinedriving.com/";
const DOMAIN = new URL(BASE_URL).hostname;
const SAVE_DIR = path.join(__dirname, "risenshine_images");

if (!fs.existsSync(SAVE_DIR)) {
  fs.mkdirSync(SAVE_DIR, { recursive: true });
}

const visitedPages = new Set();
const foundImages = new Set();

function normalizeUrl(link, base) {
  try {
    return new URL(link, base).href.split("#")[0];
  } catch {
    return null;
  }
}

function isSameDomain(link) {
  try {
    return new URL(link).hostname === DOMAIN;
  } catch {
    return false;
  }
}

function getSafeFileName(fileUrl, index) {
  try {
    const parsed = new URL(fileUrl);
    let fileName = path.basename(parsed.pathname);
    if (!fileName || !fileName.includes(".")) {
      fileName = `image_${index}.jpg`;
    }
    return fileName;
  } catch {
    return `image_${index}.jpg`;
  }
}

function extractImageFromStyle(style) {
  const match = style.match(/url\((['"]?)(.*?)\1\)/i);
  return match ? match[2] : null;
}

async function downloadImage(imgUrl, index) {
  try {
    const response = await axios.get(imgUrl, {
      responseType: "arraybuffer",
      timeout: 20000,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    let fileName = getSafeFileName(imgUrl, index);
    let filePath = path.join(SAVE_DIR, fileName);

    if (fs.existsSync(filePath)) {
      const ext = path.extname(fileName);
      const name = path.basename(fileName, ext);
      fileName = `${name}_${index}${ext}`;
      filePath = path.join(SAVE_DIR, fileName);
    }

    fs.writeFileSync(filePath, response.data);
    console.log(`Downloaded: ${imgUrl}`);
  } catch (error) {
    console.log(`Failed: ${imgUrl} -> ${error.message}`);
  }
}

async function scrapePage(pageUrl) {
  if (visitedPages.has(pageUrl)) return;
  visitedPages.add(pageUrl);

  try {
    console.log(`Scraping page: ${pageUrl}`);
    const { data: html } = await axios.get(pageUrl, {
      timeout: 20000,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const $ = cheerio.load(html);

    $("img").each((_, el) => {
      const attrs = ["src", "data-src", "data-lazy-src"];

      for (const attr of attrs) {
        const value = $(el).attr(attr);
        if (value) {
          const fullUrl = normalizeUrl(value, pageUrl);
          if (fullUrl) foundImages.add(fullUrl);
        }
      }

      const srcset = $(el).attr("srcset") || $(el).attr("data-srcset");
      if (srcset) {
        const firstUrl = srcset.split(",")[0].trim().split(" ")[0];
        const fullUrl = normalizeUrl(firstUrl, pageUrl);
        if (fullUrl) foundImages.add(fullUrl);
      }
    });

    $("[style]").each((_, el) => {
      const style = $(el).attr("style");
      if (style && style.includes("background-image")) {
        const bgUrl = extractImageFromStyle(style);
        if (bgUrl) {
          const fullUrl = normalizeUrl(bgUrl, pageUrl);
          if (fullUrl) foundImages.add(fullUrl);
        }
      }
    });

    const pageLinks = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");
      const fullUrl = normalizeUrl(href, pageUrl);

      if (fullUrl && isSameDomain(fullUrl)) {
        pageLinks.push(fullUrl);
      }
    });

    for (const link of pageLinks) {
      if (!visitedPages.has(link)) {
        await scrapePage(link);
      }
    }
  } catch (error) {
    console.log(`Failed page: ${pageUrl} -> ${error.message}`);
  }
}

async function main() {
  await scrapePage(BASE_URL);

  const images = [...foundImages];
  console.log(`\nFound total ${images.length} images\n`);

  for (let i = 0; i < images.length; i++) {
    await downloadImage(images[i], i + 1);
  }

  console.log(`\nDone. Images saved in: ${SAVE_DIR}`);
}

main();