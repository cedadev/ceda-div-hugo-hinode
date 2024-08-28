---
title: Important software changes on JASMIN Autumn 2024
date: 2024-08-29 12:00:00+00:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fas triangle-exclamation text-warning
---

Dear users

You will already be aware of the migration already underway from the CentOS7 to Rocky
Linux 9 operating systems: further details of that new environment will follow shortly
in a separate announcement.

Alongside this, for two reasons, we also need to update how we maintain and provide
software for our users on JASMIN:

- Due to the effort and technical challenges involved in maintaining older software, our software support policy will now be such that we support **only** -
  - the current version and up to 3 previous versions of JASPY
  - the current version and up to 2 previous versions of JASR
- Due to licensing constraints, **we are no longer able to host or allow use of ANY software containing Anaconda products**: this means **any** use of the `default` channel.
  - Conda environments which make use of ONLY free channels, for example `conda-forge`, can continue to be used.

In order to implement these changes, we will be taking the following actions:

- Creation of new JASPY & JASR releases which rely only on conda-forge.
  - Releases will from now on be labelled e.g. `jaspy-3.11-vYYYYMMDD`, the `v` signalling that it is compliant with this new policy.
  - The first such new releases are already available but will become the default on Wednesday 4th September; the Notebooks service will also be updated to use the new JASPY release on this date. These are:
    - `jaspy/3.11/v20240815`
    - `jasr/4.3/v20240815`
- For 3 previous versions of JASPY, and 2 previous versions of JASR, compliant variants of these releases will be made (e.g. `jaspy/3.11/v20240508` to replace `jaspy/3.11/r20240508`), which make no use of Anaconda products.
  - These new variants will become available on Wednesday 4th September
- Older and non-compliant (therefore unsupported) versions of JASPY (>3 previous) and JASR (>2 previous) will be subject to:
  - **soft removal on Wednesday 4th September**
    - They will no longer be discoverable via “module avail” but will remain able to be loaded by using their full name, for a limited transition period.
  - **hard removal on Tuesday 15th October**
    - All unsupported and non-compliant releases will be physically removed from all JASMIN filesystems
    - Modules for recent non-compliant releases will be modified to load the equivalent compliant variant instead.
- Requiring all users to check any conda environments which they themselves have created, to ensure that no use of the Anaconda “default” channel is made. Instructions/assistance on this will be provided in due course.
- (Likely) blocking connections to the Anaconda default channel over the network to enforce this in due course, so please take action to update your software environment(s) before this happens.

We apologise for any inconvenience this may cause, and thank you in advance for your cooperation.

JASMIN Team
