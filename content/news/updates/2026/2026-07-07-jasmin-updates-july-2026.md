---
title: JASMIN updates July 2026
date: 2026-07-07 10:00:00
tags: ['news', 'jasmin', 'ceda']
icon: fas sun text-warning
---

Please note the following updates for your attention:

1. [JASMIN scheduled maintenance day Tuesday 14th July 2026](#jasmin-scheduled-maintenance-day-tuesday-14thjuly-2026)
1. [STFC Cloud outage this week 6-10 July](#stfc-cloud-outage-this-week-6-10-july)
1. [Recent power & storage issues](#recent-power--storage-issues)
1. [Storage migration & need for GWS cleanup](#storage-migration--need-for-gws-cleanup)
1. [Try using `inter` partition as alternative to sci servers](#try-using-inter-partition-as-alternative-to-sci-servers)

## JASMIN scheduled maintenance day Tuesday 14th July 2026

A regular, scheduled maintenance day is planned for Tuesday 14th July 2026. This will affect all JASMIN and CEDA services.

As usual, the LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 until 23:59 on the day, but any job submitted before 04:00 with a running time that goes over the reservation period will not start until after the reservation has finished.

## STFC Cloud outage this week 6-10 July

As already announced to JASMIN Cloud tenants, a reminder that during this week, the STFC Cloud platform, on which the JASMIN Cloud operates, is unavailable due to planned maintenance work. This will affect any service that is run from the JASMIN Cloud. It does not affect the JASMIN Object Store, which is not part of the cloud service.

## Recent power & storage issues

The scratch volume `/work/scratch-pw4` has now completed reconstruction after the power outages of 18 June and is fully usable again. This was the last major issue remaining from the incident.

## Storage migration & need for GWS cleanup

The mammoth task of migrating the entire CEDA Archive and most Group Workspace volumes is now over 80% complete.

While the move to the new (SSDE) storage provides many benefits: a more stable and reliable storage platform, significantly less power draw, less machine room space, it provides no additional storage capacity. At the beginning of the migration, we asked GWS members and managers to reduce usage by up to 30% to ensure that new projects had space to be accommodated on JASMIN - this has not happened to the required extent, so several new projects are currently waiting for space.

Please, all GWS users:

- Identify and clear out any data which are no longer needed.
- All: MOVE any data which is not immediately needed on disk to the Near-Line Data Store (NLDS) service, from where it can be easily retrieved in future. [NLDS](https://help.jasmin.ac.uk/docs/short-term-project-storage/nlds/) is now much easier to start using, following recent improvements.
- Managers & Deputies: Use the [`gwschown` tool](https://help.jasmin.ac.uk/docs/short-term-project-storage/managing-a-gws/#changing-ownership-of-files-in-your-gws) to re-assign ownership of data from users who have left your project, so that their data can be appropriately managed. Ask support@jasmin.ac.uk if you need help. 
- Expedite moving data to the CEDA Archive for long-term curation, if this was planned for your project. For help with this process, please ask support@ceda.ac.uk. Do not leave data long-term in a GWS - it not backed up and does not offer the same data access services as the CEDA Archive.
- Importantly, report back to your GWS manager how much space has been released, so that they can request a reduction in allocation, which can then be used for other projects.

Far too much data in GWS volumes has not been accessed (let alone modified) for many years - this is an unsustainable use of JASMIN storage. Please help us to improve this situation so that we can support new projects on JASMIN.

## Try using  `inter` partition as alternative to sci servers

With the introduction of the new interactive partition on LOTUS, it is now effectively possible to “guarantee” resources for your interactive task without inconveniencing other users. If you use the sci servers for large, resource intensive interactive tasks, please consider using this new facility. We will be reducing the number of sci servers in due course, so you are encouraged to try out the alternative method now. [Instructions were included in our Easter update](2026-03-26-jasmin-updates-easter-2026/#new-interactive-partition-on-lotus---pilot).

Thank you for your attention and apologies for any inconvenience caused.

JASMIN Team