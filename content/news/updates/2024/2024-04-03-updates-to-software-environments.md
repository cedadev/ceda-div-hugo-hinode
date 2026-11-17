---
title: Updates to jaspy and jasr software environments
date: 2024-04-03 13:30:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fas code text-info
---

The following software environments jaspy and jasr will have new default versions on Tuesday 16th April (JASMIN patch day):

- `jaspy`: Python, and other tools and libraries.
  - based on Python 3.11, release notes at https://github.com/cedadev/ceda-jaspy-envs/releases/tag/jaspy3.11_r20240302
- `jasr`: R tools and libraries.  
  - based on R 4.3,  release notes at https://github.com/cedadev/ceda-jaspy-envs/releases/tag/jasr4.3_r20240320

The new version of Jaspy (`jaspy/3.11/r20240302`) and Jasr (`jasr/4.3/r20240320`) will become the default version that is obtained when using `module load jaspy` or  `module load jasr` without an explicit version number.

The previous releases will continue to be available if preferred, by loading the module with its full label e.g. `module load jaspy/3.10/r20220721`.

The new release includes updates to a number of software packages as well as some new tools (see release notes above). 

On the same day, the JASMIN Notebooks Service will be updated to use `jaspy/3.11/r20240302` and the current version will no longer be available on the Notebooks service.

Note: We will not be updating `jasmin-sci` on the CentOS7 machines. The next update will be after the migration to the new operating system, Rocky 9 - more info to follow later.

We advise you to plan your work accordingly to minimise the impact, but please accept our apologies in advance for any inconvenience.
