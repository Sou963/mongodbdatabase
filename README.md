What is MongoDB?

MongoDB is a NoSQL database (not relational like MySQL).

It stores data in JSON-like documents (key-value pairs) instead of rows and tables.

Each document is flexible (doesn’t require a fixed schema).

Example of a MongoDB document:

{
  "name": "Sourav",
  "age": 22,
  "skills": ["Flutter", "React", "MongoDB"]
}

🔹 Install MongoDB

Local installation: Download from MongoDB Download Center
.

Cloud (easier): Use MongoDB Atlas
 (free cluster).

🔹 Basic MongoDB Commands

Open terminal and enter:

mongosh


Now try:

1. Show Databases
show dbs

2. Create / Switch Database
use mydatabase

3. Create a Collection (like a table)
db.createCollection("users")

4. Insert Data
db.users.insertOne({ name: "Sourav", age: 22 })
db.users.insertMany([
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 20 }
])

5. Show Data
db.users.find()

6. Query Data
db.users.find({ age: { $gt: 21 } })   // greater than 21
db.users.find({ name: "Rahim" })

7. Update Data
db.users.updateOne(
  { name: "Sourav" },
  { $set: { age: 23 } }
)

8. Delete Data
db.users.deleteOne({ name: "Karim" })

9. Count Documents
db.users.countDocuments()
