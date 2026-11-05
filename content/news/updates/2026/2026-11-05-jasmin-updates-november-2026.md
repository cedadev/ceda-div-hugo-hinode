---
title: JASMIN updates November 2026
date: 2026-11-05 08:52:00
thumbnail: ''
icon: fas leaf text-warning
tags:
  - ceda
  - jasmin
---

- Scheduled maintenance day Wednesday 25 November 2026
- Changes to cron on JASMIN
- Timetable for retirement of Elastic Tape/JDMA, migration to NLDS
- Reminder: use interactive sessions in preference to sci servers

## Scheduled maintenance day Wednesday 25 November 2026

An additional scheduled maintenance day is planned for Wednesday 25h November 2026. This will affect all JASMIN and CEDA services.

As usual, the LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 until 23:59 on the day, but any job submitted before 04:00 with a running time that goes over the reservation period will not start until after the reservation has finished.

## Changes to cron on JASMIN

`cron` (for scheduling tasks) is available on JASMIN in the following locations:

- `cron-01.jasmin.ac.uk` (for initiating processing workflows)
- `xfer-vm-03.jasmin.ac.uk` (for initiating automated transfers)

Due to a system misconfiguration, it has recently been possible to run cron jobs elsewhere on JASMIN, but this will be corrected on the scheduled maintenance day announced above.

If you have cron tasks which reside in places other than those listed above, you must take action before that date when cron will be disabled in all other locations.

Please note that no heavy processing should take place on the cron hosts themselves, which are also liable to reboots at short notice.

Please make sure you read and abide by the [“Cron on JASMIN” rules documented here](https://help.jasmin.ac.uk/docs/workflow-management/using-cron/#cron-on-jasmin), including mandatory use of the `crontamer` tool provided on both those hosts. 

## Timetable for retirement of Elastic Tape/JDMA, migration to NLDS

Now that the NLDS (Near-Line Data Store) service has been in full use and available to all users for some time, we plan to retire the previous systems (ET/JDMA) according to the timetable below.

Please take note of this to avoid disruption:

- **Now**
    - Familiarise yourself with [how the NLDS service works](https://help.jasmin.ac.uk/docs/short-term-project-storage/nlds/)
    - Begin adapting any scripts/workflows to use it 
- **Mid December 2026**
    - Aim to be reliant on NLDS for all new ingests
    - Aim to be reliant on NLDS for retrievals (for data ingested using NLDS)
- **4 January 2027**
    - Migration of ET/JDMA catalogue to NLDS begins, GWS by GWS.
    - Retrieval via NLDS will be possible once a GWS has completed migration (ingest already possible).
    - Ingest via ET/JDMA no longer possible once a GWS has completed migration.
- **28 January 2027**
    - Ingest via Elastic Tape/JDMA will be closed
    - Retrieval via Elastic Tape/JDMA will be closed
    - Migration of ET/JDMA catalogue to NLDS completes
    - All near-line data access via NLDS only

## Reminder: use interactive sessions in preference to sci servers

You are also reminded that you should now consider using interactive sessions on LOTUS as an alternative to the sci servers, particularly if you use the sci servers for large, resource intensive interactive tasks. We recently reduced the number of sci servers so you are encouraged to move to the alternative method now.

Thanks in advance for your cooperation,

JASMIN Team
