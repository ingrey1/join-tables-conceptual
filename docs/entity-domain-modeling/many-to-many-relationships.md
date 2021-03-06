---
sidebar_position: 3
custom_edit_url: null
---

# Many-To-Many Entity Relationships 

---

**Wolf**

| id (PK) | name      | age | weight | cave_id (FK) |
|----|------------|-----|--------|---------| 
| 1  | Nighteyes  | 6   | 200    | 4       |
| 3  | Young Bull | 50  | 65     | 77      |

**Water**

| id (PK) | location | type  |
|----|----------|-------|
| 1  | 33       | lake  |
| 2  | 45       | river |

---

The cave wolves have to drink when they're thirsty. Fortunately, the forest has many sources of water, including: lakes and rivers. Because the cave wolf database will track drinking behavior, it's fine to introduce a Water table. A single wolf may frequent multiple water sources, and often a lake or river will have multiple wolves drinking from it on any given occasion. In this situation, a 'wolf' has many 'water' sources, and each 'water' source has many a 'wolf' drinking from it. This is known as a **many-to-many** relationship.

When SQL tables have a **one-to-one** or **one-to-many** relationship, adding a **foreign key** on one of the tables is sufficient to realize the relationship in the database. However, for **many-to-many** relationships between two tables, it's best practice to introduce a third table, often called a **Join Table**.

---

**WolfWater**

| id (PK) | wolf_id (FK) | water_id (FK) | date       |
|----|---------|----------|------------|
| 1  | 1       | 1        | 2000-12-28 |
| 2  | 1       | 1        | 2000-12-29 |
| 3  | 1       | 2        | 2000-12-30 |
| 4  | 3       | 2        | 2000-12-30 |
| 5  | 3       | 2        | 2000-12-30 |

---

Each row of the WolfWater **Join Table** represents an occasion on which a 'wolf' drank from a 'water' source. For example, consider the 'wolf' named Nighteyes who has the 'id' of 1. It can be seen that there are three rows with a 'wolf_id' of 1. This means there were three separate occasions on which Nighteyes drank from a 'water' source. On "2000-12-28" and "2000-12-29", Nighteyes drank from 'water_id'  1, and on "2000-12-30", he drank from the 'water_id' 2.

Now that the **many-to-many** relationship between 'wolf' and 'water' source has been established via the **Join Table** WolfWater, this table can be used to answer questions about drinking behavior via SQL queries.  



