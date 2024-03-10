---
title: Sprint Planning
---

# Boulder Hackathon Sprint Planning

## Pods/Working Groups

The hackathon will be structured around specific tasks/practices associated with working with warehouse data. Teams should feel free to hack on whatever they want.

A community Google Doc for brainstorming and organizing sprints can be found [here](https://docs.google.com/document/d/1eQgpBcPfsUXzlSuEefiFld0AZzBRvDBfqpVQ2aFGnYo/edit).

The following are ideas for pods/working groups that might want to sprint together:

#### Data Source Transformations

There are various ETLs like AirByte, Fivetran, and Stitch for pulling eCommerce data into a warehouse. Each uses a slightly different data structure for common sources of data, like BigCommerce or Shopify data.

The ETL’d data for BigCommerce and Shopify also differ in table structure — even when ETL’d using the same tool.

This pod will sprint to build dbt packages for blending data between various ETL tools and data sources.

#### eCommerce Semantic Layers

Once data is blended, transformed, and documented in a data warehouse, teams can begin to analyze this data in BI tools. Semantic layers, like Cube.dev’s semantic layer, provide a framework for defining measures and metrics that can be used across various BI tools.

This pod will work in building semantic layer definitions for canonical data marts in the data warehouse. This could include [Cube.dev](http://Cube.dev) semantic layer definitions, [dbt Metrics](https://docs.getdbt.com/docs/build/metrics-overview), or Google Looker Blocks.

#### Attribution Models, ML Models & Linear Regressions

This pod will work on building serverless functions for basic machine learning and linear regression modeling with eCommerce data. With shared schemas/data marts, it will be easier for teams to share these models and build upon each other’s work.

This pod might also be interested in working on shared 1st-party attribution models.

#### Anomaly Detection

It’s difficult to know when data stops flowing or integrations otherwise *break*. But with a little ML and statistical analysis, warehouse data can be used to fire off notifications when integrations break — or worse, there’s an issue with your business than need to be addressed quickly.

#### eCommerce Data 101

This pod will be dedicated to providing 2-3 training opportunities as part of the hackathon for folks who are new to all this data engineering and analytics stuff. Session proposals will be developed in advance of the event.