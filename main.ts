import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const OUT = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(OUT, { recursive: true });
copyFileSync(join(dirname(fileURLToPath(import.meta.url)), 'entry.png'), join(OUT, 'entry.png'));
