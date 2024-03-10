---
sidebar_position: 1
---

# Motivation for Commerce Schema

## Problem Statement

Working with eCommerce data to build insights, make decisions, and power advertising campaigns is harder than it should be. As an industry, eCommerce lags behind when it comes to data engineering and data science best practices. As an industry, we tend to rely on siloed “Marketplace Apps” that compete by offering *proprietary insights* and *secret sauce*.

*The ability to customize these tools to meet a business’ specific requirements is low. Interoperability between these tools is rudimentary.*

- - -

There are large, sophisticated tools that can be leveraged for eCommerce — such as enterprise CDP products, enterprise-grade data warehousing solutions, and so forth. But these platforms *lack a point of view*, and so leveraging them efficiently for eCommerce use cases is difficult.

*The “Time to Value” of implementing enterprise tools from scratch is low. Total cost of ownership of these tools is often too high.*

<aside>
🤔 **TLDR; eCommerce data strategies are nascent, because we aren’t working together as a community.**

</aside>

## Solution

Data warehousing and cloud computer have almost become a commodity. With AI, building machine learning models is significantly easier now than it was just 2 years ago. All the component pieces are in place for eCommerce to catch up with other industries in terms of ***The Modern Data Stack*.**

<aside>
🤔 What’s missing is a shared vocabulary for building interoperable data tools — from analytics platforms to eCommerce-specific machine learning tools.

</aside>

**Commerce Schema** is an attempt to solve this problem through collaboration and open source.

**Commerce Schema** is a community and collection of shared specifications for working with eCommerce data - be that 1st-party eCommerce “events” (like `add_to_cart` or `purchase` events) or data warehouse entities like `orders` or `products`, or `customers`.

With these shared specifications (really, a shared *point of view*), we can collectively start building composable analytics solutions for eCommerce, that might look like the following.

[https://www.figma.com/file/fCkYgpk7Zp2EtTpjkcNqmG/The-Modern-Data-Stack-for-eCommerce?type=whiteboard&node-id=0-1&t=0QoQ2Zt87pWzH64P-0](https://www.figma.com/file/fCkYgpk7Zp2EtTpjkcNqmG/The-Modern-Data-Stack-for-eCommerce?type=whiteboard&node-id=0-1&t=0QoQ2Zt87pWzH64P-0)

*(Apologies for the bias towards Fueled, but as an example, it hopefully stands.)*

## Next Steps

To get started, we need to:

1. Agree to a handful of high-level specifications for working with eCommerce data.
2. Once we have those specifications, we can begin to leverage tools like dbt, Google Datafold, and semantic layers (like Cube.dev) to transform, blend, and work with various sources of 1st-party and eCommerce data.

## Q1 2024 Community Sprints & Working Groups

[Working Group — Defining “Data Marts”](https://www.notion.so/Working-Group-Defining-Data-Marts-3f8ffbc7593145a587e267481542ead1?pvs=21)

[Boulder Hackathon - April 5th, 2024](https://www.notion.so/Boulder-Hackathon-April-5th-2024-15b9b73bca374ec18180263fccc42ef9?pvs=21)