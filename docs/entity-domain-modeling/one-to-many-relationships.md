---
sidebar_position: 2
custom_edit_url: null
---

# One-To-Many Entity Relationships 

---

**Wolf**

| id | name      | age | weight | cave_id |
|----|-----------|-----|--------|---------| 
| 1  | Nighteyes | 6   | 200    | 4       |

**Rabbit**

| id | name   | age |
|----|--------|-----|
| 1  | Floppy | 3   |
| 2  | Hoppy  | 22  |
| 3  | Nappy  | 25  |

---

In this forest, groups of rabbits live together in a cave, attending to the needs of that cave's wolf. Each occupied cave has one wolf, and, possibly, many rabbits. Since one cave wolf has many rabbit servants, and those rabbit servants serve just one wolf, the 'wolf' and 'rabbit' entities stand in a **One-To-Many** relationship.

Capturing this relationship requires adding the Wolf 'id' as a column to the Rabbit table.

---

**Rabbit**

| id | name   | age | wolf_id |
|----|--------|-----|---------|
| 1  | Floppy | 3   | 1       |
| 2  | Hoppy  | 22  | 1       |
| 3  | Nappy  | 25  |         |

---

Now that the one-to-many relationship is realized via the foreign key 'wolf_id' in the Rabbit table, it's possible to find out which wolf a rabbit lives with by examining the 'wolf_id': Floppy and Hoppy live with a wolf which has the primary key of 1, while Nappy doesn't live with any wolf. 

The next section will illustrate the many-to-many entity relationship type. 