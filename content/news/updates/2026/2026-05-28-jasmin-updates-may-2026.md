---
title: JASMIN updates May 2026
date: 2026-05-28 10:00:00
tags: ['news', 'jasmin', 'ceda']
icon: fas circle-info text-info
---

Please note the following updates for your attention:

- [**Important information for IDL users**](#important-information-for-idl-users)
- [**Interactive jobs vs sci servers**](#interactive-jobs-vs-sci-servers)
- [**JASMIN scheduled maintenance day Tuesday 14th July**](#jasmin-scheduled-maintenance-day-tuesday-14th-july)
- [**Storage migration progress and reminder to use new paths**](#storage-migration-progress)
- [**Security advice**](#security-advice)

## Important information for IDL users

If you are a user of the IDL software on JASMIN, you should have received an email with important
information about ongoing provision of IDL on JASMIN.
If you haven't received this, please contact support@jasmin.ac.uk as soon as possible.

## Interactive jobs vs sci servers

With the introduction of the new interactive partition on LOTUS, it is now effectively possible to "guarantee" resources
for your interactive task without inconveniencing other users.
If you use the sci servers for large, resource intensive interactive tasks, please consider using this new facility.
We may look at reducing provision of sci servers in future, in favour of this more managed approach, so you are
encouraged to try it out now.

Instructions were included in our [Easter update](2026-03-26-jasmin-updates-easter-2026#new-interactive-partition-on-lotus---pilot).

## JASMIN scheduled maintenance day Tuesday 14th July

A regular, scheduled maintenance day is planned for Tuesday 14th July 2026. This will affect all JASMIN and CEDA services.

As usual, the LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 until 23:59 on the day, but any job submitted before 04:00 with a running time that goes over the reservation period will not start until after the reservation has finished.

## Storage migration progress

Our task of migrating Group Workspace and CEDA Archive volumes to new storage is still underway and progressing well.
The second tranche of storage is due to be installed in early June, completing the replacement of our previous buld (SOF)
storage system. While this does not increase capacity overall, it significantly reduces storage power consumption and uses a much lower machine room footprint. In addition, feedback from users has been very positive about the new system's performance and reliability. 

While the archive migrations should be transparent to users, **migrations of GWS volumes do mean a change in path, but you can check the new path of your GWS in the accounts portal** (on the same page where you would apply for access for it). We have noticed a number of failed tasks due to referencing the old locations of volumes, so please check the new path (it should contain `ssde` rather than `nopw`) and ensure that any scripts and code are updates: ideally this should be done via configuration files and/or environment variables rather than hard-coded paths.

GWS migrations also involve a cutover period for a final sync and a check stage before the new volume is released for use, during which both old and new volumes are inaccessible to users, but we try to keep the length of this to a minimum. Please check with your GWS manager, with whom we will be communicating the timescale and progress of your particular workspace.

## Security advice

Sharing some sensible advice from one of our partner Digital Research Infrastructures, please note the following:

- **Be cautious with third-party software and build instructions**. When downloading packages, libraries, or following build recipes from the internet, please take a moment to verify the source. Supply-chain attacks (where malicious code is embedded in seemingly legitimate packages or instructions) are increasingly common. If something looks unusual, it probably warrants a closer look before you run it.

- **Do not run proof-of-concept exploit code on the system**. When new vulnerabilities are publicly disclosed, working exploits often circulate shortly afterwards. Running these on our system (even out of curiosity!) puts the system and other users at risk and may constitute a breach of your acceptable use obligations.

- **When in doubt, ask**. If you are unsure whether something you're planning to do on the system is appropriate, or if you notice anything suspicious, please get in touch with the support team before proceeding. There are no silly questions.

JASMIN Team
