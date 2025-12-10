---
title: Support over the Christmas period and JASMIN updates
date: 2025-12-11 09:00:00+00:00
tags: ['news', 'jasmin', 'ceda']
thumbnail: 
icon: fas holly-berry text-success
---

Dear JASMIN and CEDA users,

This message includes information about JASMIN and CEDA support arrangements over the Christmas period and important updates on JASMIN services:

- JASMIN and CEDA support over the Christmas period
- Changes to scratch storage - **action required!**
- Storage migration progress
- New single login service
- VSCode usage with JASMIN
- JASMIN scheduled maintenance day 27 Jan 2026

## JASMIN and CEDA support over the Christmas period

JASMIN and CEDA support will close for the Christmas period at 16:30 on Friday 19th December 2025 and reopen on 5th January 2026. 

During that time, JASMIN and CEDA services will be running at risk; monitoring will remain in place for critical infrastructure, but any tickets raised and any service disruption will be dealt with after staff return on the 5th January. No routine changes to services will be made after Friday 19th December to avoid disruption during the festive period.

The CEDA and JASMIN teams would like to take this opportunity to wish all our users a very Merry Christmas and a Happy New Year.

## Changes to scratch storage

New scratch volumes are now available, please now use these:

- `/work/scratch-pw4`
- `/work/scratch-pw5`

We previously announced closure of the old volumes `/work/scratch-pw2, /work/scratch-pw3` would be on 4th December 2025: revised dates are now as follows:

- Made read-only by end of **Wed 17th December**
- Removed from use by patch date in January.

Additional notes:

- Scratch data older than 28 days is automatically deleted, and the use of tools like `touch` to re-age the data is not permitted - users found to be abusing this will be sanctioned. Users are able to store up to a maximum of 100 TB.

- Scratch volumes are now accessible via our {{<link "https://help.jasmin.ac.uk/docs/data-transfer/globus-transfers-with-jasmin/">}}Globus data transfer service{{</link>}}, to help make data transfers easier between GWS, scratch and XFC volumes. Please remember to `chgrp` any data moved from scratch or XFC to a GWS, to appropriate `gws_<name>` group, to ensure correct ownership and permissions within the GWS, see the new help article about {{<link "https://help.jasmin.ac.uk/docs/getting-started/permissions-and-groups/">}}permissions and groups{{</link>}}.

## Storage migration progress

Work continues with our (huge!) task of moving Group Workspaces from old storage at `/gws/nopw/j04/*` to newer storage hardware. {{<link "https://docs.google.com/spreadsheets/d/1peHz7k3AfPAM_Z8pD-myX28S5bXAZMoZ_U3cAOC6ouo/edit?gid=1821731582#gid=1821731582">}}This sheet{{</link>}} provides an overview of progress and proposed dates for each group workspace. Please liaise with your GWS manager about the proposed dates: they can then liaise with JASMIN support on your behalf regarding any scheduling issues.

Progress with recovery from the recent data incident is [covered separately here](/tags/data-incident-nov25/).

## New single login service

A new, single login service is now available at `login.jasmin.ac.uk`. Users can use this single name as the login host for onward connections to sci servers and other locations within JASMIN. Initially 3 new login servers have been put in place behind this: you are assigned one of them automatically as you connect. If all goes well, we plan to decommission the individual servers `login-0[1,2,3,4]` (date TBC) and encourage users to connect to the single entity instead. Further updates to follow, but you are invited to try connecting to the new login service now.

- Some users may need to run `ssh-keygen -R login.jasmin.ac.uk` first to remove previous host key entries for that name from their `~/.ssh/authorized_keys`.

## VS Code usage with JASMIN

Users wishing to use VSCode with JASMIN should NOT do this on any login node: an automated process has now been set up to kill vscode processes on login nodes.
Please see the {{<link "https://help.jasmin.ac.uk/docs/interactive-computing/access-from-vscode/">}}VSCode help page{{</link>}} for the recommended routes, but note that your local `~/.ssh/config` can now be updated to use the single login service mentioned above.

## JASMIN scheduled maintenance day 27 Jan 2026

A regular, scheduled maintenance day is planned for Tuesday 27th January 2026. This will affect all JASMIN and CEDA services.

As usual, the LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 until 23:59 on the day, but any job submitted before 04:00 with a running time that goes over the reservation period will not start until after the reservation has finished.

We wish all our users very Happy Christmas and New Year!

JASMIN and CEDA Teams
