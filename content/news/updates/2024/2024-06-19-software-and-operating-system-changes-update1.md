---
title: Software and operating system changes - update 1
date: 2024-06-19 17:30:00
tags: ['news', 'ceda', 'jasmin', 'rocky9', 'cylc']
thumbnail:
icon: fa-solid fa-code text-info

---

This is the first update about our progress migrating operating systems on JASMIN from CentOS7 to Rocky Linux 9 as announced previously {{<link "../2024/2024-05-03-software-and-operating-system-updates-coming-soon-to-jasmin/">}}here{{</link>}}. Details of the migration in particular software packages can be found {{<link "https://help.jasmin.ac.uk/docs/software-on-jasmin/rocky9-migration-2024">}}here{{</link>}}.

## This update includes:

1. New set of Rocky9 sci machines - please test your code NOW!
1. Cylc upgrade to version 8
1. Module environments reviewed

## Details

### 1. New set of Rocky9 `sci` machines

These are available for testing interactive processing tasks. It is important that all users consider how the change to Rocky9 might affect their workflows so we encourage you to test your processing tasks interactively at this stage. The following machines are avialable now for **testing** (NB: final set of host names TBC):
 
 * 1 x virtual machine:  `sci-r9.jasmin.ac.uk`
 * 2 x high-mem physical machines: `sci-ph-01.jasmin.ac.uk` & `sci-ph-01.jasmin.ac.uk`

### 2. `cylc` upgrade

Users of `cylc` workflow manager (currently version 7 under CentOS7) will need to test and if necessary adapt their workflows to cylc version 8 under Rocky9: previous versions are not compatible with the new operating system. Cylc 8 is available on the current `cylc` server (CentOS7) for testing. Users are therefore encouraged to start testing with Cylc 8 as soon as possible, in case their suites need to be adapted.

The newer version can be specified with:

```bash
export CYLC_VERSION=8
```

Confirm the version at run time with:

{{<command>}}
cylc version
(out)8.2.3
{{</command>}}

To make Cylc 8 the default, add the following to `~/.bash_profile`:

```bash
export CYLC_VERSION=${CYLC_VERSION:-8}
```

IMPORTANT: The Cylc 8 web UI requires use of a web browser such as Firefox: this not available yet, so  neither “rose edit” nor “rosie go” will work. Please look out for further news on this.

### 3. Module environment reviewed

Software made available centrally via the `module` environment under `/apps/modulefiles` is being reviewed. GNU and PGI compilers will **not** be migrated to the new system as we believe there is no evidence of use. The GNU compiler is currently available via the JASPY environment and PGI was acquired by NVIDIA[^1]. Please let us know if there is any particular requirement for any Intel library under `/apps/modulefiles` so that it can be included in the list of packages to migrate.

Please let us know about your experience of using the Rocky9 sci machines, by e-mailing JASMIN Support (support@jasmin.ac.uk) and including "Rocky9 feedback" in the subject line.

Thanks in advance for your cooperation

CEDA and JASMIN Teams

[^1]: The "PGI Compilers and Tools" technology is a part of the Nvidia HPC SDK product available as a {{<link "https://developer.nvidia.com/hpc-sdk">}}free download from Nvidia{{</link>}}.
