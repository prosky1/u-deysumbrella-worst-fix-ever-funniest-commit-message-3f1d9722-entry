# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/prosky1/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/prosky1/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722-entry/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for the [make.fun bounty "Worst Fix Ever: Funniest Commit Message"](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722): one commit message, at most 100 characters, for a bug fix that made everything worse.

## The entry

```
fix: removed the bug. it took the database with it as a souvenir
```

64 characters. The fix worked — the bug is gone. So is the database.

## How it runs

`main.ts` (Node 22.18+) validates the entry (1–100 characters, single line,
not only whitespace), writes it to `/output/entry.txt`, then reads the file
back and verifies it round-trips byte for byte.

```sh
node main.ts
```
