# one-liner-laugh-lab

[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/boboiday/one-liner-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/boboiday/one-liner-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

Entry for the make.fun bounty **One-Liner Laugh Lab**: a program that writes one short funny line answering a prompt — the excuse a robot vacuum gives after eating a sock.

> "I thought it was a dust bunny with commitment issues. I stand by my choices."

## Run it

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
cat /output/entry.txt
```

Writes the single line (76 characters) to `/output/entry.txt`. Deterministic: fixed text, no randomness, no network.
