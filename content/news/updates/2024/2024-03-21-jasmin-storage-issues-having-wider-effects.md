---
title: JASMIN storage issues having wider effects
date: 2024-03-21 09:30:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fas triangle-exclamation text-danger
---

An internal performance issue with SOF storage is causing many machines to be unresponsive. The storage vendor is engaged with the system team's investigation.

SOF storage is used for `/gws/nopw/*` group workspaces and CEDA Archive storage volumes.

This will have wide-reaching effects across the JASMIN platform and CEDA Archive services.

As a result of the above, new LOTUS jobs are currently prevented from being started from the queues, to reduce load on the affected system and avoid failed jobs. New jobs are still being queued and will be run when the cluster is more stable.

A separate issue with PFS storage from earlier in the week is now resolved: if any further issues are encountered with PFS storage (used for `/work/scratch-pw*` and `/gws/pw/*` group workspaces), please wait until the above issues are resolved before reporting to the JASMIN helpdesk.

Please watch for further updates on the {{<link "ceda_status">}}status page{{</link>}}.

Apologies for any inconvenience,

JASMIN Team
