---
author: Matt Pritchard
title: Editing guide
description: Editing guide for this website
layout: docs
---

## Introduction

This site is built with a the {{<link "hugo">}}Hugo{{</link>}} static site builder using the {{<link "hinode_docs">}}Hinode theme{{</link>}}, with styling customised for CEDA.

This guide covers how to edit and update the various sections of the site.

## Site layout

Content is organised into the following main sections:

- News
- Events
- Projects
- About

and is written in Markdown format, but with a few extra features provided by both {{<link "hugo">}}Hugo{{</link>}} and the {{<link "hinode_docs">}}Hinode theme{{</link>}} template. It is worth reading the documentation for both of these to understand the syntax fully (use the links above).

Two further links in the site's navbar point to components whose content is managed elsewhere:

- **Status**
  - CEDA/JASMIN service status: this page is a single-page section of this site that renders a JSON feed of events, content for which is stored in the {{<link url="https://github.com/cedadev/ceda-status">}}ceda-status{{</link>}} repository.
- **Techblog**
  - an external link to the separately-hosted CEDA TechBlog, maintained {{<link url="https://github.com/cedadev/tech-blog">}}here{{</link>}}

## Overview of publishing process

After [initial setup](#initial-setup-and-using-vscode-to-help-with-the-edit-process), the edit/update process involves:

1. pulling the latest changes to the site repo into your local copy (VSCode can do this for you)
1. making a branch for your edits
1. making some changes (e.g. adding a new news item)
1. checking that a LOCAL preview of the site looks OK with your changes
1. committing your changes to your branch (in the version of your repo)
1. pushing that branch to the remote repository (Github)
1. checking that a REMOTE preview of the site looks OK with your changes (a remote preview is generated for each branch automatically)
1. creating a pull request to merge that branch into `main`
1. reviewing the pull request, see {{<link "#roles"/>}}
1. merging the pull request, see {{<link "#roles"/>}}
1. waiting for the site to be rebuilt
1. checking that all is OK with the rebuilt live site

## Roles

The following roles are in use for this site (corresponding to groups in our GitHub org). Your GitHub ID needs to be a member of the relevant group(s).

- **ceda-div-site-authors**
  - can create content for review & publication by an editor
- **ceda-div-site-editors**
  - can merge changes for publication to the live site

## Adding a news item

News items are stored in the directory `content/news/updates/YYYY` where `YYYY` is the current year.

There is a template news item here, which can be copied as an example:

`content/news/updates/2024/2024-03-06-an-example-news-item.md`

But to do this, note the following:

- the filename should be of the form `YYYY-MM-DD-slug.md`, where
  - `YYYY-MM-DD` is the publication date. If the year is 2024, this file should go in the `2024` directory.
  - `slug` is a CONCISE string **representing** the title (doesn't have to be identical)
  - `.md` format extension needs to be present, but is not used in the eventual URL of the article

Inside the markdown file we have:

```markdown
---
title: An example news item
date: 2024-03-06 10:30:00
tags: ['news', 'ceda']
thumbnail: 
icon: fas circle-info text-info
draft: true # remove this line in your copy
---

No need to repeat the title as a heading here.
This is an example news item which can be copied to create a new one.
It should end with a blank line.

### Here's a heading

Here's some text

#### A subheading

And some more text, just before the blank line at the end.

```

Let's look at the top section first:

- The "Frontmatter" or metadata section is at the start of the markdown file, between the separators `---` and `---`. [Hugo allows frontmatter](https://gohugo.io/content-management/front-matter/#overview) in YAML, TOML or JSON syntax, with the separator symbol defining which: `---` is for YAML). For this site, to keep things simple, we'll stick to YAML as used above.
- There should be a blank line after the separator and before the markdown content, and also at the end of the file (see #linting).

For a full explanation see the {{<link "https://gethinode.com/docs/content/content-management/#front-matter">}}documentation on Hinode Frontmatter{{</link>}}.

The Frontmatter fields used above (and sufficient for a simple news item) are:

field | content | comment
--- | --- | ---
**title** | Full title of the post | Avoid quotes, ampersands or other symbols, be consistent with capitalisation. Don't repeat the title in the markdown: the title text is rendered for you in list & single views. Feel free to add other headings within the markdown starting with `### Heading3` (because the `title` gets rendered as `## Heading2`).
**date** | Publication date/time of the post | Must be in the format `YYYY-MM-DD hh:mm:ss` including the time and seconds and the date part should correspond with the filename. Articles with a date in the future are NOT included in the live site, so you can use this to schedule future publication, but only if the site is rebuilt at some point before that date.
**tags** | Tags relevant to this post | Check first to choose from {{<link "/tags">}}existing tags{{</link>}} or add your own. Take care with typos not to create new ones unnecessarily.
thumbnail | Optional image for the post | An image file specified here will be used as the thumbnail for the post in list view, and as a banner across the top of the post in single view. It should exist in a corresponding directory `assets/img/YYYY/YYYY-slug/`, so you need to include the creation of that directory and the adding of that image file in your changes, in order to refer to it. <br>**A post should have either an image OR an icon, with the other field left blank**
**icon** | Optional icon for the post | Should be in format `<icon-library> <icon-name> text-<colour>` and chosen from the free FontAwesome icons here (that link filters for the free ones). Used `fa`, `fab` or `fas` for `<icon-library>`, depending on whether you have chosen from regular, brands or solid icon libraries. For colours, the choice is from this site's predefined theme colors, i.e.<br>{{< badge title="primary" color="primary" >}}{{< badge title="secondary" color="secondary" >}}{{< badge title="success" color="success" >}}{{< badge title="danger" color="danger" >}}{{< badge title="warning" color="warning" >}}{{< badge title="info" color="info" >}}{{< badge title="light" color="light" >}}{{< badge title="dark" color="dark" >}}.  <br>**A post should have either an image OR an icon, with the other field left blank**
{.table .table-striped}

## What is markdown?

{{<link "https://en.wikipedia.org/wiki/Markdown">}}Markdown{{</link>}} is very lightweight markup language for creating formatted text. It's intended to be easy to read in its basic form, but the Hugo and Hinode systems used here add some additional functionality by using shortcodes and other features, which help specifically in the creation of richly-formatted static websites.

## Style guidelines

We want to keep the site looking smart, engaging and easy to read.

By taking care with authoring, reviewing and publishing content on the site using well-documented tools, this is now more achievable than with previous platforms. Here are some guidelines and tips about the combination of tools we're using, which will help us do this:

### Markdown source files

- Install and use the David Anson / `markdownlint` {{<link "https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint">}}markdown linter for VScode{{</link>}}
  - this helps keep markdown content tidy and functional
  - for example: preferred syntax for lists, whitespace, headings, etc.
  - it doesn't support shortcodes off-the shelf, but we could write extra rules to do so
- Use a VSCode markdown preview extension for a basic layout / proof-reading (this won't understand Hinode shortcodes though)
- Use VSCode's git integration to help with managing changes to the site.

### Content

- Be concise
- Use labelled links instead of "please follow the link below"
- Use {{<button>}}buttons{{</button>}} to make links or actions visually distinct
- Links are automatically generated from subheadings (hover to see them), so don't make your own
- Use the {{<link "https://gethinode.com/docs/components/link/">}}link{{</link>}} shortcode where possible, as this makes it easier to control their appearance throughout the site. But if you can't bothered, the `[markdown](#url)` format works too. 
- Use **alerts** to really grab attention

{{<alert type="info">}}
This is an alert of type `"info"`
{{</alert>}}

{{<alert type="danger">}}
This is an alert of type `"danger"`
{{</alert>}}

### Images

(see {{<link "https://gethinode.com/docs/components/image/">}}Hinode docs{{</link>}})

Hinode has some clever image-formatting features, see {{<link "https://gethinode.com/docs/components/image/">}}Hinode docs{{</link>}} for details.

Store images for a news item post in `assets/img/YYYY/YYYY-slug/` and choose one of them as the thumbnail. Others can be referred to in the text 
using the `image` shortcode, e.g.

{{< example lang="hugo" show_preview="false" >}}
{{</* image src="img/flowers.jpg" ratio="3x2" caption="image caption" */>}}
{{< /example >}}

Note that although the image is stored below `assets/img`, the path starts with `img/` for the shortode. Add captions. Read the docs for why.
Use `wrapper` classes to control the size & how the image is displayed.

### Code and commands

Hugo supports {{<link "https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages">}}Chroma syntax-highlighting of a huge list of languages{{</link>}}, and Hinode provides shortcodes for some of these.
Use the {{<link "https://gethinode.com/docs/components/command-prompt/">}}command-prompt{{</link>}}
or {{<link "https://gethinode.com/docs/components/example/">}}example{{</link>}}
shortcodes to render examples smartly,

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* command user="user" host="sci1" */>}}
export MY_VAR=123 ## comment
(out)command output
{{</* /command */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

 or use {{<link "https://gohugo.io/render-hooks/code-blocks/">}}code blocks
{{</link>}} to apply syntax highlighting.

```python
print("hello world")
```

Use `inline code`highlighting to show paths or filenames like `/home/users/<username>`.

Many of these features are more suited to documentation (hence also using Hinode for the JASMIN Help Docs site),
but if we're including this sort of information in news items then these features help make it easier to 
read and more engaging as content.

## Editing an event

## Editing a Project

## Editing the About pages

## Making other changes to the site

### Configuration

Cofiguration files are stored in...

### Layouts

The `layouts` directory contains...

## Initial setup and using VSCode to help with the edit process

