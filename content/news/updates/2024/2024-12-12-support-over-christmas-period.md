---
title: Support over the Christmas period and JASMIN updates
date: 2024-12-12 09:00:00+00:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fas holly-berry text-success
---

Dear JASMIN and CEDA users,

This message includes information about JASMIN and CEDA support arrangements over the Christmas period and important updates on JASMIN services:

- JASMIN support over the Christmas period
- Reminder of host retirements
- News on IDL software
- JASMIN scheduled maintenance day 21 Jan 2025

## JASMIN and CEDA support over the Christmas period

As we approach the Christmas period, please be aware of the limited support arrangements in place which will result in JASMIN and CEDA services running “at-risk”. While the shutdown of our host organisation, STFC, runs from 15:00 on Tuesday 24th December 2024 to 09:00 on Thursday 2nd January 2025, a reduced number of staff will be at work from Monday 16th December to Monday 6th January, so the helpdesk and support teams will be operating at reduced capacity between those dates. A change freeze applies from 10:00 on Friday 13th December to maintain system stability.

JASMIN and CEDA services should therefore be considered to be running “at-risk” from  Monday 23rd December 2024 to Thursday 2nd January 2025, with no helpdesk service available during this period.
CEDA websites, archives and services, including access to JASMIN, should be available during this period but will operate unsupported. Should any problems occur to our services, it is unlikely that these would be fixed until staff return in the New Year.

All user queries received during this period will be answered as soon as possible from Thursday 2nd January 2025.

The CEDA and JASMIN teams would like to take this opportunity to wish all our users a very Merry Christmas and a Happy New Year.

## Host retirements

As per the [timetable previously announced]({{% ref "2024-11-21-jasmin-host-retirements.md" %}}), the following hosts will be retired on Friday 13th December at 16:00:

```
xfer2
hpxfer2
sci[5,6,8]
login[3,4]
gridftp1
```

Please read the {{<link "https://help.jasmin.ac.uk/docs/software-on-jasmin/rocky9-migration-2024/#details-of-the-new-rocky-linux-9-environment">}}description of the new Rocky 9 environment{{</link>}} for details of replacement services.

## Update on IDL software

IDL users should read the {{<link "https://help.jasmin.ac.uk/docs/software-on-jasmin/rocky9-migration-2024/#notes" >}}notes in context here{{</link>}} about where & which versions of IDL are now available.

   1. IDL versions 8.9 and 9.1 are now available on the Rocky 9 sci servers.
   1. These will also be the versions available on the new cluster, which will be announced in early 2025.
   1. For the limited remaining time that the existing LOTUS cluster is available (with CentOS7 nodes), 8.5 is the default, with other legacy versions still available on those nodes.

## JASMIN scheduled maintenance day 21 Jan 2025

A regular, scheduled maintenance day is planned for Tuesday 21st January 2025. This will affect all JASMIN and CEDA services.

The LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 am on the day 23:59 pm on the day, but any job submitted before 04:00 am with a running time that goes over the reservation period will not start until after the reservation has finished.
