// Generates minimal valid PNG icons for the PWA manifest
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'icons')
mkdirSync(OUT, { recursive: true })

function adler32(data) {
  let a = 1, b = 0
  for (const byte of data) { a = (a + byte) % 65521; b = (b + a) % 65521 }
  return (b << 16) | a
}

function crc32(data) {
  const table = []
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[i] = c
  }
  let crc = 0xffffffff
  for (const b of data) crc = table[(crc ^ b) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function uint32BE(n) {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]
}

function chunk(type, data) {
  const typeBytes = [...type].map(c => c.charCodeAt(0))
  const allForCrc = [...typeBytes, ...data]
  return [...uint32BE(data.length), ...typeBytes, ...data, ...uint32BE(crc32(allForCrc))]
}

function deflate(data) {
  // zlib wrapper around uncompressed deflate (BTYPE=00)
  const blocks = []
  const BSIZE = 65535
  for (let i = 0; i < data.length; i += BSIZE) {
    const block = data.slice(i, i + BSIZE)
    const last = i + BSIZE >= data.length ? 1 : 0
    blocks.push(last, block.length & 0xff, (block.length >> 8) & 0xff,
      (~block.length) & 0xff, ((~block.length) >> 8) & 0xff, ...block)
  }
  const body = new Uint8Array(blocks)
  const checksum = adler32(data)
  return new Uint8Array([0x78, 0x01, ...body, ...uint32BE(checksum)])
}

function makePNG(size, bgR, bgG, bgB, fgR, fgG, fgB) {
  // Build raw pixel rows (RGBA, filter byte prepended = 0)
  const rows = []
  const cx = size / 2, cy = size / 2, r = size * 0.38
  const pr = size * 0.18 // pick radius

  for (let y = 0; y < size; y++) {
    const row = [0] // filter byte
    for (let x = 0; x < size; x++) {
      const dx = x - cx, dy = y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Circle background
      if (dist > r) { row.push(0, 0, 0, 0); continue }

      // Guitar pick shape (simplified rounded diamond)
      const px = Math.abs(dx) / (pr * 1.1), py = dy / (pr * 1.4)
      const inPick = (px + Math.max(0, py)) < 1.05 && dist < r * 0.82

      if (inPick) row.push(fgR, fgG, fgB, 255)
      else row.push(bgR, bgG, bgB, 255)
    }
    rows.push(...row)
  }

  const raw = new Uint8Array(rows)
  const compressed = deflate(raw)

  const sig = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
  const ihdr = chunk('IHDR', [...uint32BE(size), ...uint32BE(size), 8, 2, 0, 0, 0])
  const idat = chunk('IDAT', [...compressed])
  const iend = chunk('IEND', [])

  return Buffer.from([...sig, ...ihdr, ...idat, ...iend])
}

for (const size of [192, 512]) {
  const png = makePNG(size, 0x09, 0x09, 0x0b, 0xf5, 0x9e, 0x0b)
  writeFileSync(join(OUT, `icon-${size}.png`), png)
  console.log(`✓ icon-${size}.png`)
}
console.log('Icons generated in public/icons/')
