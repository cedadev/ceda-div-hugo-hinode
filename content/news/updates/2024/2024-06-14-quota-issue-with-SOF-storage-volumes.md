---
title: Quota issue with SOF storage volumes
date: 2024-06-14 14:30:00
tags: ['news', 'jasmin']
icon: fa-solid fa-database text-danger

---

Dear users,

We are aware of an issue with volume quotas in the SOF storage system, affecting GWS volumes /gws/nopw/j04/* and CEDA Archive volumes.
It appears that the system is permitting writes beyond the initial volume quota, then artificially increasing the quota reported by “df -H” up to a point where writes are no longer possible.
The volume quota is initially set when a volume is created; this is recorded in the JASMIN Projects Portal and available to view in the GWS Dashboard at https://mon.jasmin.ac.uk (accounts portal credentials required). This is the true volume quota: it appears that the value reported by df -H has become unreliable in these cases.
The suggested course of action for GWS managers is as follows:

- Use the Projects Portal or GWS Dashboard to check the true quota
- If the “used” value reported by df -H exceeds this value, some data will need to be removed to bring the usage down below the true quota
- The GWS Scanner UI can help visualise where space is being consumed within a GWS (but take care to note the date of the last scan)
- Once usage is brought below the true quota, normal operation of the volume should resume

We appreciate this may cause some difficulties: the system team is actively engaged with the storage vendor on this issue to find a solution.

With apologies for any inconvenience,
JASMIN Team
