---
title: Reminder of upcoming JASMIN changes and maintenance periods
date: 2024-10-04 15:00:00+00:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fa-solid fa-code text-warning
---

Dear users

Please note the following JASMIN announcements for your attention:

1. New services now available: please start using them!
2. JASMIN maintenance: electrical testing, 8-10 October (all systems at risk)
3. JASMIN Scheduled maintenance day, Tuesday 15 October (all systems at risk)

## 1\. New services now available

### General

[JASMIN Help Documentation](https://help.jasmin.ac.uk) has now been updated to reflect the new Rocky 9 servers, so users are now asked to start using these (`login`, `sci`, `xfer`, `hpxfer`, etc) wherever possible.
Please update your local configuration if you have stored the names of older servers.
Older servers will start to be withdrawn over the next weeks, but will be announced in advance.

This does not yet include details of the new cluster: further details will follow as this approaches readiness.

### NoMachine NX Graphical desktop service

New servers for the [NoMachine NX graphical desktop service](https://help.jasmin.ac.uk/docs/interactive-computing/graphical-linux-desktop-access-using-nx/) will come into production on
15th October (see below). On this date, **one** CentOS7 NX server, `nx-login4` (aka `nx4`), will remain, but `nx-login1`, `nx-login2` and `nx-login3` will be retired.

Please note the updated connection instructions, especially for Windows users.

The new servers `nx[1-3]`, like the new login servers `login-0[1-4]` are configured to be
accessible from **any** network, so there is no longer a requirement for some users to use specific servers only.

If you have problems with the new servers and/or instructions, you should change your existing connection profile to use the old `nx4` instead, until a solution can be found.

Please feed back any other issues to the JASMIN Helpdesk.

### JASPY and JASR python environments

[As previously announced]({{% ref "2024-08-29-important-software-changes-autumn" %}}), older and non-compliant releases of these environments **will be withdrawn from JASMIN on 15th October**.

Details of the currently-supported environments are [available here](https://help.jasmin.ac.uk/docs/software-on-jasmin/jaspy-envs/).

Please make sure you have updated your local configuration in line with these changes.

## 2\. JASMIN maintenance: electrical testing, 8-10 October

As previously announced via the [status page](/status), electrical testing will be taking
place in the machine room where JASMIN is housed, between 8 and 10 October.

LOTUS cluster capacity will be reduced during this period as power to racks is temporarily removed.

There is the possibility of disruption to other services during this period.

## 3\. JASMIN scheduled maintenance day, Tuesday 15 October

As previously announced via the [status page](/status), a regular maintenance day is scheduled for
Tuesday 15th October. This potentially affects all JASMIN and CEDA Services.

As usual, the LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 am until 23:59 pm on the day, but any job submitted before 04:00 am with a running time that goes over the reservation period will not start until after the reservation has finished.

Please note all the above updates and plan your work accordingly to minimise any inconvenience caused.

JASMIN Team
