---
title: JASMIN updates March 2026
date: 2026-03-11 16:00:00
tags: ['news', 'jasmin', 'ceda']
icon: fas book text-info
---

Please note the following updates for your attention:

- New high memory nodes (6TB RAM) added to LOTUS
- ORCHID restructured - new resource limit and new Slurm partition
- LOTUS restructured - new interactive partition (pilot)
- JASMIN scheduled maintenance day Tuesday 14th April
- Closure of legacy VIO7 cloud platform
- Storage migration progress

## New high memory nodes

A set of high memory nodes was added to the cluster LOTUS. Each node has 6TB of physical memory and 192 CPU cores. This is considered a special resource and access is controlled via the access role {{<link "https://accounts.jasmin.ac.uk/services/additional_services/lotus-special/">}}`additional services : lotus-special`{{</link>}} on the JASMIN accounts portal. A new partition called `special` is able to submit jobs to the new set of nodes, with access controlled by holding the above access role. Further details of the `special` partition including resource limits/QoS are {{<link "https://help.jasmin.ac.uk/docs/batch-computing/slurm-queues/">}}documented here{{</link>}}.

## ORCHID restructured - new resource limit and new Slurm partition

`orchid48` - A new quality of service (QoS) `orchid48` has been added to the `orchid` partition to allow 48 hours of processing time on the GPU. Access to the `orchid48` QoS is on a request basis: if your workflow needs to run on a GPU for 2 days, please contact the JASMIN helpdesk and justify the resource request.

`gpumig` - A new partition `gpumig` is configured to submit jobs to GPU nodes with Multi-Instance GPU (MIG) feature enabled. This MIG feature allows GPUs to be securely partitioned into up to seven separate GPU Instances for CUDA applications, to run multiple smaller workloads on a single GPU, ensuring that the GPU’s resources are fully utilised. This is especially useful for applications that do not need the full capacity of a GPU and therefore users may want to run smaller and different workloads on the single GPU-MIG instance. Each GPU card is partitioned to 4 GPU-MIG instances on JASMIN.
Holding the `orchid` access role will enable job submissions to the `gpumig` partition.

Details on the resource limits/QoSs and on how to submit jobs to the `gpumig` partition are {{<link "https://help.jasmin.ac.uk/docs/batch-computing/orchid-gpu-cluster/#multi-instance-gpu-partition">}}documented here{{</link>}}.

## New interactive partition on LOTUS - pilot

It is possible now to work interactively on LOTUS in a similar way to being on a `sci` server, but with guaranteed resources via the new and high priority interactive partition.

The new interactive partition has three runtime limits defined in QoS: 
- `inter` (3hrs)
- `inter4h` (4hrs)
- `inter6h` (6hrs).

For convenience, three corresponding aliases have been set up: `inter` , `inter4` and `inter6` to access the new partition with a specific Slurm job accounting/GWS membership.

For example:

{{<command host="sci-vm-02" user="user">}}
inter --account=<GWS-name-membership>
(out)salloc: Pending job allocation 1410784
(out)salloc: job 1410784 queued and waiting for resources
(out)salloc: job 1410784 has been allocated resources
(out)salloc: Granted job allocation 1410784
(out)salloc: Nodes host1182 are ready for job
exit
(out)salloc: Relinquishing job allocation 1410780
{{</command>}}

Notes:

1. It is possible to SSH to the allocated LOTUS compute node (`host1182.jc.rl.ac.uk` in this example) from another terminal session from a `sci` server e.g. `ssh host1182.jc.rl.ac.uk`. Please note that exiting the interactive session will terminate all other SSH sessions on the allocated node.
1. VSCode can be run within the interactive job session. This provides better control of memory resources compared to running VSCode on a `sci` server.
1. JASMIN documentation will be updated towards the end of the pilot phase.

## JASMIN maintenance day Tuesday 14th April

A regular, scheduled maintenance day is planned for Tuesday 14th April  2026. This will affect all JASMIN and CEDA services.

As usual, the LOTUS batch processing cluster will be unavailable for the duration of the work on the day, to avoid running jobs being adversely affected. A reservation will start at 05:00 until 23:59 on the day, but any job submitted before 04:00 with a running time that goes over the reservation period will not start until after the reservation has finished.

## Closure of legacy VIO7 cloud platform

All cloud tenants should now have received their new tenancy and have access through the JASMIN cloud portal. All machines and services need to be migrated from the legacy VIO7 cloud platform to the new cloud platform by Tuesday 14th April.

We've updated our {{<link "https://help.jasmin.ac.uk/docs/for-cloud-tenants/">}}documentation for the new cloud and portal{{</link>}}.
If you've been waiting for a new tenancy, please contact JASMIN support.

## Storage migration progress

Hopefully you will be aware from previous notices, and via your GWS manager, of current work underway to migrate GWSs and the CEDA Archive from old to new storage hardware. Work is progressing well, with the half-way point now in sight at least for GWS migrations. Archive migrations have now resumed.

While the archive migrations should be transparent to users, migrations of GWS volumes do mean a change in path, but you can check the path of your GWS in the accounts portal (on the same page where you would apply for access for it). GWS migrations also involve a cutover period for a final sync and a check stage before the new volume is released for use, during which both old and new volumes are inaccessible to users, but we try to keep the length of this to a minimum. Please check with your GWS manager, with whom we will be communicating the timescale and progress of your particular workspace.

The task is large and challenging, but feedback from workspaces that have now migrated is very good, so we look forward to completing this task over the coming months.

Thank you for your attention and apologies for any inconvenience caused.

JASMIN Team
