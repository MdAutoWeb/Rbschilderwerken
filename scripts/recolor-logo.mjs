/**
 * Remap logo gold pixels to brand palette (sampled from RB letters).
 * Goud #B68439, licht #D4A14E, diep #9C6F1A
 */
import sharp from "sharp";
import { copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const GOLD = [182, 132, 57];
const GOLD_LIGHT = [212, 161, 78];
const GOLD_DEEP = [156, 111, 26];
const ESPRESSO = [26, 13, 2];

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      default:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ];
}

const targetHue = rgbToHsl(...GOLD)[0];

function isGoldPixel(r, g, b, a) {
  if (a < 40) return false;
  const [, s, l] = rgbToHsl(r, g, b);
  if (l > 0.97 && s < 0.15) return false;
  if (r < 80 || g < 60) return false;
  if (r <= g || g <= b * 0.45) return false;
  return s > 0.12 || (r > 180 && g > 120);
}

/** Alleen donkere goudtinten licht optillen; highlights blijven intact. */
function brightenGold(r, g, b) {
  const [h, s, l] = rgbToHsl(r, g, b);
  let newL;
  if (l >= 0.62) {
    newL = Math.min(0.88, l * 1.03);
  } else if (l >= 0.45) {
    newL = Math.min(0.72, l * 1.08 + 0.03);
  } else {
    newL = Math.min(0.58, l * 1.12 + 0.05);
  }
  const newS = Math.min(0.9, s + (l < 0.5 ? 0.04 : 0));
  return hslToRgb(h, newS, newL);
}

/** Geeler goud (meer geel, minder bruin) — luminantie behouden voor metallic look. */
function yellowerGold(r, g, b) {
  const [h, s, l] = rgbToHsl(r, g, b);
  let newH = h + 0.058;
  if (newH > 1) newH -= 1;
  const newS = Math.min(0.96, s * 1.14 + 0.05);
  const [nr, ng, nb] = hslToRgb(newH, newS, l);
  return [nr, ng, nb];
}

function remapGold(r, g, b) {
  const [, s, l] = rgbToHsl(r, g, b);
  const depth = 1 - Math.min(1, Math.max(0, (l - 0.55) / 0.42));
  const sat = Math.min(0.85, Math.max(0.45, s * 0.95 + 0.15));
  let newL;
  if (depth < 0.35) {
    newL = 0.34 + depth * 0.18;
  } else if (depth < 0.7) {
    newL = 0.4 + (depth - 0.35) * 0.14;
  } else {
    newL = 0.45 + (depth - 0.7) * 0.18;
  }
  const mix = Math.min(1, Math.max(0, (b - 70) / 140));
  const anchor = mix < 0.45 ? GOLD_DEEP : mix < 0.8 ? GOLD : GOLD_LIGHT;
  const [nr, ng, nb] = hslToRgb(targetHue, sat, newL);
  const t = 0.42;
  return [
    Math.round(nr * t + anchor[0] * (1 - t)),
    Math.round(ng * t + anchor[1] * (1 - t)),
    Math.round(nb * t + anchor[2] * (1 - t)),
  ];
}

async function processLogoPixels(inputPath, outputPath, mapGold) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (!isGoldPixel(r, g, b, a)) continue;
    const [nr, ng, nb] = mapGold(r, g, b);
    data[i] = nr;
    data[i + 1] = ng;
    data[i + 2] = nb;
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outputPath);
}

async function recolorLogo(inputPath, outputPath) {
  await processLogoPixels(inputPath, outputPath, remapGold);
}

async function brightenLogo(inputPath, outputPath) {
  await processLogoPixels(inputPath, outputPath, brightenGold);
}

async function yellowerLogo(inputPath, outputPath) {
  await processLogoPixels(inputPath, outputPath, yellowerGold);
}

async function iconOnEspresso(logoPath, size) {
  const maxLogo = Math.round(size * 0.82);
  return sharp(logoPath)
    .resize(maxLogo, maxLogo, {
      fit: "inside",
      withoutEnlargement: true,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: { r: ESPRESSO[0], g: ESPRESSO[1], b: ESPRESSO[2], alpha: 1 },
    })
    .resize(size, size, {
      fit: "contain",
      background: { r: ESPRESSO[0], g: ESPRESSO[1], b: ESPRESSO[2], alpha: 1 },
    })
    .png()
    .toBuffer();
}

async function buildBrandedAssets(logoPath) {
  await sharp(await iconOnEspresso(logoPath, 32)).toFile(join(root, "app/icon.png"));
  await sharp(await iconOnEspresso(logoPath, 180)).toFile(join(root, "app/apple-icon.png"));

  const ogW = 1200;
  const ogH = 630;
  const ogLogo = await sharp(logoPath)
    .resize(380, 380, { fit: "inside", withoutEnlargement: true })
    .toBuffer();

  await sharp({
    create: {
      width: ogW,
      height: ogH,
      channels: 4,
      background: { r: ESPRESSO[0], g: ESPRESSO[1], b: ESPRESSO[2], alpha: 1 },
    },
  })
    .composite([{ input: ogLogo, gravity: "center" }])
    .png()
    .toFile(join(root, "public/og.png"));

  await sharp(join(root, "public/og.png")).toFile(join(root, "app/opengraph-image.png"));
  await sharp(join(root, "public/og.png")).toFile(join(root, "app/twitter-image.png"));

  const fav32 = await sharp(join(root, "app/icon.png")).png().toBuffer();
  await sharp(fav32).toFile(join(root, "app/favicon.ico"));
  await sharp(fav32).toFile(join(root, "public/favicon.ico"));
}

const args = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const copyOnly = process.argv.includes("--copy");
const yellower = process.argv.includes("--yellower");
const brighten = process.argv.includes("--brighten");
const source =
  args[0] || join(root, "public/assets/logo rbschilder.png");
const logoOut = join(root, "public/assets/logo.png");

console.log(copyOnly ? "Applying logo from" : "Recoloring from", source);
if (copyOnly) {
  if (yellower) {
    await yellowerLogo(source, logoOut);
  } else if (brighten) {
    await brightenLogo(source, logoOut);
  } else {
    copyFileSync(source, logoOut);
  }
} else {
  await recolorLogo(source, logoOut);
}
await buildBrandedAssets(logoOut);
console.log("Done: logo.png, favicons, og images updated.");
