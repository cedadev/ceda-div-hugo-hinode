---
title: New services and reminder of software changes on JASMIN
date: 2024-09-04 11:00:00+00:00
tags: ['news', 'jasmin']
thumbnail: 
icon: fa-solid fa-code text-warning
---

Dear users

## New services now available

Details of the new Rocky 9 environment are
{{<link "https://help.jasmin.ac.uk/docs/software-on-jasmin/rocky9-migration-2024/#details-of-the-new-rocky-linux-9-environment" >}}now available here{{</link>}}.

Users are now encouraged to start using the new
`login`, `sci`, `xfer`, `hpxfer` servers as listed in that document, and to feed back any problems experienced in using these to the [JASMIN Helpdesk](support@jasmin.ac.uk).

Further updates on the new environment will be provided there as they emerge.

## Software changes

As announced last week, the following changes have taken place today:

We have made available versions of Jaspy and Jasr that are compliant with the licensing issues previously highlighted. Default versions are marked with `(D)`. From this point onwards, the **current and 3 previous versions of Jaspy** will be supported, alongside the current and **2 previous versions of Jasr**. 

Older, unsupported and/or non-compliant versions will no longer be available. All compliant versions are now denoted by `v` in the name instead of `r`.

Hence the following releases now show up with `module avail`:

```
jaspy/3.10/v20230718
jaspy/3.11/v20240815
jaspy/3.11/v20240302
jaspy/3.11/v20240508 (D)
```

```
jasr/4.2/v20230718
jasr/4.3/v20240320
jasr/4.3/v20240815 (D)
```

To enable a transition away from previous non-compliant variants (denoted by `r`), for the time being these can be discovered by listing the contents of `/apps/jasmin/modulefiles` and loaded by specific name, for example

`module load jaspy/3.8/r20211105`

However you are advised to move away from using these `r` variants **as soon as possible**, as they will be removed from JASMIN on Tuesday 15th October 2024.

JASMIN Team
