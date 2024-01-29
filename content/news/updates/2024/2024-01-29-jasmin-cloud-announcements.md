---
title: JASMIN Cloud Survey and Announcements
date: 2024-01-29 15:00:00+00:00
tags: ['news','jasmin']
thumbnail: 
icon: fa-solid fa-cloud text-info
---

Dear Users,

We have a couple of cloud related announcements to share with the JASMIN community:

1. JASMIN Cloud Survey
2. Deprecation of CentOS 7 cloud images
3. Upcoming migration of the Cloud Portal to Azimuth

#### JASMIN Cloud Survey

We have recently been informed that our cloud platform VMWare Integrated OpenStack (VIO) is being discontinued. This presents us with an opportunity to make decisions on the direction which we want to take the JASMIN Cloud. The timescale for this is by mid 2025.

We would like to ask all JASMIN Users to take the following short survey about the JASMIN Cloud so that we can gather information about why you do or do not use the cloud and about any features which you would like to see. Also we would specifically like to hear what existing tenants are using the cloud for so that we can capture those requirements.

{{< link "https://forms.office.com/e/8tfAfTcDWw" >}} **Please click here to find the survey link.** {{< /link >}}

#### Deprecation of CentOS 7 cloud images

As you may be aware, CentOS 7 is coming to its end of life in June. We have decided to move to Rocky Linux 9 for JASMIN services and are working hard to switch all JASMIN services to this as soon as possible.

The Rocky Linux 9 image has been available in the External cloud (*-U tenancies) for a few months. On 12th February the CentOS 7 image will be removed from all external tenancies meaning that no new machines will be able to be created with that image. We encourage you to migrate your machines over to Rocky Linux 9 (or Ubuntu) as soon as you can.

We will start chasing tenants in March to migrate their CentOS machines so that there are no remaining CentOS machines in the External cloud when CentOS 7 reaches its end of life.

We are still working on an image for the managed tenancies (*-M and *-S tenancies), and will be in touch with tenants in due course to migrate their machines over to Rocky Linux 9.

#### Upcoming migration of the Cloud Portal to Azimuth

We will soon be changing the JASMIN Cloud portal to StackHPC’s Azimuth portal. For tenants who use the Cluster-as-a-Service (CaaS) system, you will need to recreate your clusters in the new system that Azimuth provides when Azimuth is ready for use. We will provide generous overlap between the two systems to ease the transition as much as possible, but the current CaaS system will be turned off at the end of this period.

Azimuth will also allow all existing external cloud tenants to use the platforms feature (the replacement for CaaS), not just tenancies with CaaS enabled. Hopefully this will provide more flexibility to tenants, especially with Azimuth’s greatly expanded platforms compared to the existing CaaS system.

If there are any questions about any of these topics, please feel free to email the JASMIN Helpdesk. (support@jasmin.ac.uk)

Thanks
JASMIN Team
