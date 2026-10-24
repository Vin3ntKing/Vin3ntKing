+++
title = 'The ten largest trades are not the ten most recent'
date = 2025-08-01
lastmod = 2026-10-24
draft = false
summary = 'Top-N trades, a global maximum, and the time range a query actually covers.'
+++

My OKX trade monitor keeps a bounded min-heap for each trading pair. Each incoming trade goes into the heap. If there are more than ten entries, the smallest trade by value is removed. The heap keeps up to ten of the largest trades received for that pair.

“Largest” and “most recent” describe different things, though.

The code doesn't expire trades by age. An early large trade can stay in the heap until enough larger trades arrive to push it out. The command-line label referring to the five most recent large trades is therefore misleading. The query returns up to five of the largest trades received for that pair since the program started.

The global maximum has the same boundary. Each incoming trade is compared with the stored maximum, which is replaced when necessary. That gives the largest trade received across the subscribed pairs during this run. It doesn't establish the largest trade on the whole exchange over the past day.

A query for the last five minutes would need a time window and a way to remove expired records. Limiting the number of entries in a heap doesn't provide either.

The query label should say what the code actually returns. Latency and throughput claims can wait for a benchmark.

The implementation uses C++ `priority_queue` with a custom comparator to maintain a min-heap. See the [C++ working draft](https://eel.is/c++draft/priority.queue) for the interface.
