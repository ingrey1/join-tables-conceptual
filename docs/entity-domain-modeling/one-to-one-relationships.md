---
sidebar_position: 1
---

# One-To-One Entity Relationships

---

**Wolf**

| id | name      | age | weight |
|----|-----------|-----|--------|
| 1  | Nighteyes | 6   | 200    |
| 3  | Claw      | 10  | 80     |


**Cave**

| id | size      | location | mineral   |
|----|-----------|----------|-----------|
| 4  | 800       | 78       | Granite   |

---

The kind of relationship between two entities depends on the situation. Assume that in the cave-wolf domain, the wolves never share caves, and only ever inhabit one cave at a time. In this case, a 'wolf' and a 'cave' stand in a **one-to-one** relationship: a wolf has one cave, and each cave belongs to one wolf. 

To capture this relationship between the Wolf and Cave tables, we can add a new column to the Wolf table: 'cave_id'.

---

**Wolf**

| id | name      | age | weight | cave_id |
|----|-----------|-----|--------|---------| 
| 1  | Nighteyes | 6   | 200    | 4       |
| 3  | Claw      | 10  | 80     |         |

---

By adding the Cave 'id' as a foreign key named 'cave_id' to the Wolf table, the hypothetical database has successfully captured the one-to-one relationship between the 'wolf' and 'cave' entities. Now, if someone is curious which cave Nighteyes lives in, they can check the 'cave_id'. In this case, Nighteyes lives in the cave with a primary key of 4. Looking at the Cave table, it's clear Nighteyes occupies the cave at location 78 in the forest, and that cave is made of Granite.

Of course, not every cave wolf will have a cave. This state of affairs is represented in Claw's record as an empty or null 'cave_id' value.

The next section will illustrate the one-to-many relationship, using 'wolf' and 'rabbit' entities. 