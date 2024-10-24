---
title: Changes to JASMIN cron, transfer and NX services
date: 2024-10-24 09:30:00+00:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fa-solid fa-gear text-warning
---

Please note the following JASMIN announcements for your attention:

1. Changes to `cron` (and all transfers using `xfer3`)
1. Changes to NoMachine NX service (`nx-login` servers)

## 1\. Changes to cron and transfer services

The old servers enabling task scheduling with `cron`, namely `cron.jasmin.ac.uk` (aka `cron1.ceda.ac.uk`) and `xfer3.jasmin.ac.uk`, are due to be retired, as replacements are already available as part of our migration to the Rocky Linux 9 operating system.

If you use `cron`, please take action now to move your scheduled tasks to the relevant new server:

- **General tasks, including submission to LOTUS**
  - OLD server = `cron.jasmin.ac.uk` (aka `cron1.ceda.ac.uk`)
  - NEW server = `cron-01.jasmin.ac.uk`

- **Scheduled or other transfers using `xfer3`**
  - OLD server = `xfer3.jasmin.ac.uk`
  - NEW server = `xfer-vm-03.jasmin.ac.uk`

The OLD servers will be **removed on Thursday 21 November 2024**, at which point, the new cron server will take over the alias `cron.jasmin.ac.uk`, but **responsibility for moving each cron jobs lies with the job owner**. Please remember to use {{<link "https://help.jasmin.ac.uk/docs/workflow-management/using-cron/#crontamer">}}crontamer{{</link>}} to control your job(s).

Users of xfer3 may have previously needed to use specifically that server due to network access rules. The new Rocky 9 xfer servers no longer have this restriction, as all 3 servers xfer-vm-0[123] are identical in this respect and allow connections from anywhere. As a result, the xfer-sp access role is now redundant so will be retired on/around this date. However users needing to schedule transfers should move their cron jobs to `xfer-vm-03`, or use {{<link "https://docs.globus.org/cli/reference/timer_create_transfer/" >}}Globus timers{{</link>}}.

## 2\. Changes to NoMachine NX service (nx-login servers)

We previously announced that servers `nx-login[123]` would be retired on the recent scheduled maintenance day (15 October), however this work was not completed. Retirement of these servers will now happen on **Thursday 31 October (1 week today)**.
New Rocky 9 NX servers are available as `nx[123].jasmin.ac.uk`, with no network restriction, so all are available to all users.

For a limited time, we will maintain one old server `nx-login4` (aka `nx4`), to provide continuity for those users who have not yet migrated. Old connection profiles pointing to `nx-login[123]` should now be replaced with one pointing to a new server, one of `nx[123]`.

Windows users in particular should note the {{<link "https://help.jasmin.ac.uk/docs/interactive-computing/graphical-linux-desktop-access-using-nx/#setting-up-your-connection">}}updated instructions{{</link>}}: you may not be able to make an onward connection to other machines unless you change to the recommended method.

**One** old server will remain for a limited period, for users who experience difficulty moving to the new servers. An existing connection profile can be edited to point to `nx-login4`, accessible from anywhere, but this will remain for a limited period only (tbc).

{{<link "https://help.jasmin.ac.uk/docs/software-on-jasmin/rocky9-migration-2024/#details-of-the-new-rocky-linux-9-environment">}}See here{{</link>}} for further information about the migration to Rocky Linux 9.

JASMIN Team
