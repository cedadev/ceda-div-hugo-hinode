---
title: Data, docker and Django - Rory and Zach's Journey at CEDA
date: 2024-07-29 10:00:00
tags: ['news', 'ceda', 'placement']
thumbnail: "../img/news/2024/2024-07-29-zach-and-rory/zach-rory-thumbnail.jpg"

---

This year, CEDA had the pleasure of welcoming two industrial placement students, Rory Jenns and Zach Wharton, who joined us as Software Engineers for their Industrial Placement year. Hailing from the University of Nottingham and Loughborough University, respectively, Rory and Zach have spent the past 12 months diving into various projects, from software development to stakeholder engagement and system deployment. Let’s take a look at the fantastic work they accomplished during their time with us.

### Revolutionising CEDA's Data Catalogue

Zach, with his knack for enhancing user experiences, took on the task of developing new front-end features for the {{< link "https://catalogue.ceda.ac.uk/" >}} CEDA Data Catalogue. {{< /link >}} Using JavaScript (a programming language), he introduced an ‘embedded search’ on catalogue record pages allowing users to further refine their searches of related content. This was a game-changer, especially as the increasing connectivity of records was causing longer page load times. Zach’s solution provided a more efficient way to access relevant information, giving users greater control and reducing wait times. Kudos to Zach!

Meanwhile, Rory focused on a novel implementation in data management: tagging datasets based on the classifications of their licences by what use they permit. This lets users, at a glance, tell if a dataset has a licence for their use (e.g. find data that permits academic or commercial usage).  “Changing the data model of the large legacy system comes with risk. So, using Docker, my first step was to ‘sandbox’ the catalogue, creating an isolated local environment to develop.” Rory’s changes also provide greater flexibility in access routes to data associated with different licensing options, allowing CEDA to cater for diverse options needed by data providers storing data in the CEDA archive.

{{< image src="../img/news/2024/2024-07-29-zach-and-rory/zachs-big-dream.jpg" caption="Zach in front of RAL Space's BIG DREAM" >}}

#### Enhancing the Archival of Data

Rory and Zach’s paths crossed again when they both worked on crucial systems for intaking data from users into the archive.

Rory started his placement by improving ‘Arrivals’, a Python/Django app for reviewing incoming datasets arriving in the archive. He spoke with data scientists at CEDA to find out how they used the system, where improvements could be made, and desired features. Using this knowledge he created web tools that give our data scientists greater visibility and control to review and fix incoming datasets. This allows staff to review datasets from their web browsers, lowering the bar to entry.

Following this, Rory created data workflows across services to automate common work, again lowering the bar to entry. He proudly presented this work in Leeds at the 2024 NCAS Harmony in the Skies Early Careers symposium (https://zenodo.org/records/11109744), increasing the awareness of CEDA and its data scientists’ work to related partners.

At the same time, Zach revitalised our ‘FileOps server’, an internal system that has been part of our file processing pipeline for the past two decades. Recognizing the need for modernisation, Zach used a modern technology called FastAPI to simplify and improve the system. This new approach made it easier to develop and maintain, while also making the system more reliable and able to handle a greater volume of requests. This upgrade was a significant milestone for CEDA, ensuring our file operations would continue to be efficient and dependable. Zach's work prepared the ‘FileOps server’ for future growth and adaptability, maintaining high standards in our file management processes.

{{< image src="../img/news/2024/2024-05-13-ncas-symposium/Rory-at-NCAS.jpg" caption="Rory presenting his work at the NCAS Harmony in the Skies 2024 Early Careers Symposium" >}}

#### Engaging with External Partners

Our projects often involve collaboration with external partners, Rory and Zach had the chance to engage with some of the big names in environmental data.

Zach worked closely with the Met Office on a project to update the format of rain radar data. He picked up and configured existing codebases to meet the Met Office’s requirements, marking his first experience working with external stakeholders. Reflecting on this, Zach said, “My standout experience at CEDA is most likely working on a software development project with the Met Office. I was able to advance as a software developer because I collaborated with well-known industry names. It was eye-opening to work with external stakeholders and see the real-world applications of our work.”

Rory, on the other hand, engaged with the European Space Agency (ESA) when moving our Data Relay Hub to a new architecture so it is more reliable and can be more easily extended. During this, Rory gained hands-on experience in automating deployments and using infrastructure-as-code tools, such as Ansible and Docker. Using these tools meant that the deployment process was self-documenting and would make the process of moving to the new Data Relay Hub simpler. “Working on the Data Relay Hub has been a unique experience for me. Luckily, I had the chance to work directly with ESA, an opportunity that few this early in their career receive. In the work itself, I made use of a variety of technologies while working through how to implement an operational system.”

On top of this, he got to dive into the architecture and design of larger operational systems that move large data volumes (in the terabytes per day). This project was a valuable learning experience, allowing Rory to develop his skills in an innovative environment and experience working with external partners.

#### Looking Ahead

As their placements come to an end, Rory and Zach are heading back to university to complete their final years. Rory is set to become the President of his university’s ‘CompSoc’ (the School of Computer Science Society) and plans to have his dissertation utilise CEDA’s vast data holdings, inspired by his work here. Zach, meanwhile, will be undertaking a final year project that applies modern machine learning techniques to predict horse racing results using historical data.

We’re incredibly proud of the contributions Rory and Zach have made during their time at CEDA and wish them all the best in their future endeavours. Their hard work and dedication have left a lasting impact, and we’re excited to see what they achieve next.

{{< image src="../img/news/2024/2024-07-29-zach-and-rory/zach-rory-CEDA.jpg" caption="Rory and Zach on Zach’s final day. Pictured with some CEDA colleagues (and Tim Peake!)" >}}

If you'd like to read more about the amazing work our other previous industrial placement students have done, you can check them out out here:

- {{< link "../2023/2023-07-27-adrian-debskis-industrial-placement.md" >}} Check out how Adrian Dębski applied his speed-cubing skills to the CEDA catalogue search. {{< /link >}}

- {{< link "../2016/2016-07-29-high-flying-year-in-industry-student-kate-winfields-time-with-ceda.md" >}} Click here to read about Kate Winfield's major overhaul of CEDA's data catalogue. {{< /link >}}
