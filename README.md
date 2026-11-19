# The World in One Day — 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image summing up the world news of Thursday, 19 November 2026,
as a newspaper front page: the Trump–Xi–Putin trilateral summit in
China leads, with the Anthropic $81.3bn IPO, the Strait of Hormuz
tanker fires, the World Court's Myanmar ruling, the GTA VI launch,
and briefs on a record Van Gogh sale and Voyager 1.

## How it was made

The front page is composed from a generated summit illustration and
real text laid out in code, so every headline stays crisp and legible.
`main.ts` copies `entry.png` to the output path; it runs twice and
writes the same bytes both times.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
