// Builds a proper Windows .ico file from PNGs (PNG-compressed inside, per Vista+ spec)
// Usage: node scripts/build-ico.js <out.ico> <in1.png> <in2.png> ...
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function readPngMeta(buffer) {
  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  if (buffer.length < 24) throw new Error('PNG too short');
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  if (!buffer.slice(0, 8).equals(sig)) throw new Error('Not a PNG');
  // IHDR starts at offset 8. Length(4) + "IHDR"(4) + width(4) + height(4)
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height, bytes: buffer };
}

function buildIco(outPath, pngPaths) {
  const images = pngPaths.map((p) => {
    const buf = fs.readFileSync(p);
    const { width, height, bytes } = readPngMeta(buf);
    if (width !== height) throw new Error(`Non-square PNG: ${p} ${width}x${height}`);
    return { width, bytes };
  });

  const n = images.length;
  // ICONDIR: 6 bytes + 16 bytes per entry
  const headerSize = 6 + 16 * n;
  const totalSize = headerSize + images.reduce((s, i) => s + i.bytes.length, 0);
  const out = Buffer.alloc(totalSize);

  // ICONDIR
  out.writeUInt16LE(0, 0);             // Reserved: 0
  out.writeUInt16LE(1, 2);             // Type: 1 = ICO
  out.writeUInt16LE(n, 4);             // Count

  let offset = headerSize;
  for (let i = 0; i < n; i++) {
    const { width, bytes } = images[i];
    const entryStart = 6 + 16 * i;
    // bWidth: 0 means 256
    out.writeUInt8(width >= 256 ? 0 : width, entryStart);
    // bHeight: 0 means 256
    out.writeUInt8(width >= 256 ? 0 : width, entryStart + 1);
    out.writeUInt8(0, entryStart + 2);         // bColorCount: 0 = no palette
    out.writeUInt8(0, entryStart + 3);         // bReserved
    out.writeUInt16LE(1, entryStart + 4);      // wPlanes: 1
    out.writeUInt16LE(32, entryStart + 6);     // wBitCount: 32 (RGBA)
    out.writeUInt32LE(bytes.length, entryStart + 8);  // dwBytesInRes
    out.writeUInt32LE(offset, entryStart + 12);       // dwImageOffset
    bytes.copy(out, offset);
    offset += bytes.length;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out);
  return { size: out.length, count: n };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node scripts/build-ico.js <out.ico> <a.png> [b.png ...]');
    process.exit(1);
  }
  const [out, ...rest] = args;
  const info = buildIco(out, rest);
  console.log(`Wrote ${out}: ${info.count} images, ${info.size} bytes`);
}

module.exports = { buildIco };
