---
sidebar_position: 1
custom_edit_url: null
---

# Introduction

When setting up a relational SQL database, an important task is identifying which tables will go in the database, and how those tables are related to each other. One way to do this involves modeling the target domain in terms of entities and their relationships. The following document will describe three kinds of entity relationships, and illustrate how they can be implemented as persistent, structured data in a SQL database.  

- **Domain**: a situation or context. For example, a Dinosaur or Movie domain.        
- **Entity**: these are the objects that exist in a given domain. For example, a Dinosaur domain might have plant, lake, and dinosaur entities; a Movie domain might have movie, director, viewer, and venue entities.

Suppose that the goal is to setup a database for a wolf preserve, in order to track the health and success of a cave wolf repopulation effort. The domain is the forest where the wolves live. This domain contains many different entities: trees, bushes, caves, bacteria, molecules, wolves, rabbits. However, not all of these entities are relevant for the practical concerns that will determine which tables go in the wildlife database. For example, a 'bush' could be a relevant entity for a database aimed at cataloging plant life, but it's not important for the wolf database.

Here are a couple potentially relevant entities: 'wolf' and 'cave'. The wolves need to be tracked, so the database will have a Wolf table. These wolves live in caves, so the database should also have a Cave table. 

---

**Wolf**

| id | name       | age | weight |
|----|------------|-----|--------|
| 1  | Nighteyes  | 6   | 200    |
| 2  | Halla      | 3   | 150    |
| 3  | Claw       | 10  | 80     |
| 4  | Swift      | 20  | 110    |
| 3  | Young Bull | 50  | 65    |

**Cave**

| id | size      | location | mineral   |
|----|-----------|----------|-----------|
| 1  | 800       | 78       | Granite   |
| 2  | 600       | 43       | Limestone |
| 3  | 400       | 62       | Mud       |

---

The next section will examine the 'wolf' and 'cave' entity relationship, and consider how that relationship can be realized in a hypothetical wildlife database with Wolf and Cave tables.  
