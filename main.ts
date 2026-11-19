// news-image-20261119 entry (Node 22, standard library only).
// The image lives in this repository as entry.png; the program's only job
// is to place an exact copy of it at the output path the grader reads.
// It takes no input, uses no network and writes the same bytes every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
// The source is the entry.png shipped beside this file in the repo.
const source = new URL('./entry.png', import.meta.url);

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
