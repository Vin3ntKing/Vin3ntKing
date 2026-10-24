+++
title = 'Why databases spend so much time moving data'
date = 2022-11-01
lastmod = 2026-10-24
draft = false
summary = 'A note on buffer pools and what “computation is free” leaves out.'
+++

One line in my database notes says that fetching data is much slower than computing on it, so the cost of computation is effectively free.

It's a useful reminder to pay attention to I/O. Taken literally, though, it leaves out too much.

A query reading from an SSD has different costs from one whose data is already in memory. Which pages it needs, and whether those pages can be reused, affect how much time it spends waiting. A buffer pool holds data pages in memory so later accesses can use them again.

My notes describe a buffer as a layer between storage and memory. More precisely, the buffer pool lives in memory and is managed by the database. PostgreSQL's `shared_buffers` is one example. The operating system also has its own cache.

Once the data is in memory, CPU work still matters. Scanning, comparisons, memory access patterns, and synchronization all take time. Calling computation free is an approximation for a particular bottleneck, rather than a rule for every query.

The questions I want to keep asking are: where is the data, how much needs to move, and what can be reused? Then, how much work does processing it actually take?

Reference: [PostgreSQL memory configuration](https://www.postgresql.org/docs/current/runtime-config-resource.html#RUNTIME-CONFIG-RESOURCE-MEMORY).
