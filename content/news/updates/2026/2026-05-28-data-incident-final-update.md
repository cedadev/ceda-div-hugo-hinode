---
title: Data Recovery Incident - Final update
date: 2026-05-28 17:30:00
tags: ['news', 'ceda', 'data-incident-nov25']
icon: fa-solid fa-square-check text-success
---

On Tuesday 18th November 2025, during the migration of data in the CEDA Archive, a mistake was made that resulted in just over 3PB out of 27PB being removed from the online archive. This is a final update on this incident, with follow-on work now incorporated into business-as-usual activities, like ongoing investigation of corrupt files.

## Where we are now

The vast majority of data has been fully recovered.

We restored the data in four groups:

- Most datasets were recovered from tape and other archive caches. This is fully restored with the exception of a handful of corrupt files, and a couple of datasets where the tape process failed.
- The CMIP group was restored using a combination of data from the tape archive and copies held in ESGF systems. The ESGF retrievals greatly improved the recovery speed. Again, it's all restored, with the exception of a handful of corrupt files.
- The plan to restore MODIS data was always to recover from the source in the US. This is now all restored.
- The Sentinel main data files have been recovered from tape. This data is primarily stored on tape only anyway, with only small metadata files left on disk. The process of pulling these small files from tape is now a regular background job that will continue as needed.

Investigation into the corrupt files will continue as part of business-as-usual processes. If nothing can be done these discrepancies will be flagged for users.
Overall, nearly all affected data have been successfully fully restored to the same state as before the incident.

## Looking back on the recovery exercise

### What went well

**Supportive stakeholders** - Our stakeholders and user communities have been very understanding and patient. We really appreciated their support in dealing with the recovery effort.

**Rapid team response** - Thanks to a speedy response from members of the CEDA team, we were able to prevent an additional 1.5PB from being deleted. Due to our existing teamwork and coordination we were able to respond to the initial incident and manage the recovery exercise quickly, calmly and efficiently. Specifically, close working between the CEDA and Scientific Computing teams ensured coordination of tape usage, migration and provision of larger caching areas enabled improved recovery times.

**Recovering data from multiple sources** - We used high-performance data transfer tools to source data from additional locations. [You can read here]({{% ref "https://www.ceda.ac.uk/news/updates/2026/2026-05-28-jasmin-updates-may-2026/" %}}) about how we managed to recover over 790TB in 27 hours using the Janet network with the online data transfer service Globus.

**We plan for failure** - Having learned from previous recoveries, we know that it’s vital to define clear roles for staff members to play in the event and make the recovery tasks into clear procedures so they can be handed over to other team members. All of the actions and processes we undertook during the recovery were recorded and documented which we have added to our framework for handling incidents of this nature. This includes scripts we utilised for the recovery and efficient data transfers.

### Lessons learnt

**Improved communication planning** - Despite reacting quickly and effectively, we should have taken the time to develop a more robust communication plan that provided users with more information such as timelines and readable lists of affected datasets. We also created some confusion by using the word ‘deleted’ numerous times in our communications; instead, we should have clarified that we only lost the online copy and that data were still safe on tape.

**How to say what’s missing** - It was hard to communicate which data were affected. As a storage failure, it affected lots of datasets, but only partially. Conveying this succinctly to users without saying everything is missing proved difficult. We will research better ways to share this information in a readable and comprehensive format. 

**Single point of failure** - Due to the spread of expertise and knowledge among the staff, there were only a few people who knew the intricacies of the storage system and thus were able to assist in the recovery. This created a bottleneck that meant the majority of the recovery work fell on a small number of staff, placing a lot of pressure on them which was further exacerbated due to illness and absences. We are now sharing knowledge and expertise more widely internally to ensure that in the future we have a recovery team of at least four staff members in order to improve our resilience.

**It’s not just the data that needs restoring** - One issue we had was with the dataset access control, which isn’t backed up to tape. This meant that a lot of the datasets did not have their correct permissions upon recovery, which led to a situation where users were still unable to access datasets despite our information claiming that they had been “fully restored”. Thankfully, having access initially restricted before restoration was the safe approach to preserve access controls where needed, though this introduced initial access delays. We are seeking to minimise such delays in the future by updating our data restoration processes to take this into account.

**Monitoring backup processes** - A small number of backup failures led to the most notable problems with the recovery. We will be improving the monitoring of our tape archiving systems and implementing better alert systems.

## Finally

We would like to say a huge thank you to our users, stakeholders, and colleagues who were extremely supportive and sympathetic to our staff throughout the process. We acknowledge that this scenario was far from ideal for everyone involved, and we are grateful to everyone for showing understanding and patience.

Thank you!
