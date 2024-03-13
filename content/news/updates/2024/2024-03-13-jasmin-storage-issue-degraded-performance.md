---
title: JASMIN issue with home directories and related storage
date: 2024-03-13 15:00:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fas triangle-exclamation text-warning
---

An issue with the storage used for the following services is causing degraded performance and is under investigation with the vendor:

- home directories
- use of software using `module` or from `/apps/jasmin`
- non-parallel-write scratch `/work/scratch-nopw2`
- GWS small-files (smf) volumes `/gws/smf/*/*`

This may result in not being able to log in to some hosts.

Please watch for further updates on the {{<link "ceda_status">}}status page{{</link>}}.

Apologies for any inconvenience,

JASMIN Team
