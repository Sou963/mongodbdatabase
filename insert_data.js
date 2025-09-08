const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://souravbosu844_db_user:1yxAubMvf6yUQvav@cluster1.glem11w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(url);

async function connection() {
  try {
    await client.connect();
    await insertdata();
    console.log("Successfully inserted data");
  } catch (error) {
    console.log("Error found:", error.message);
  } finally {
    await client.close();
  }
}

async function insertdata() {
  const mydatabase = client.db("school");
  const mycollection = mydatabase.collection("students");
  const mydata = [
    { name: "Mukta Bosu", age: 18, class: "10th" },
    { name: "Sourav Bosu", age: 20, class: "B.Tech" },
    { name: "Avishek Bosu", age: 18, class: "12th" },
    { name: "Sourav Kumar", age: 25, class: "BCA" },
    { name: "Sourav", age: 21, class: "BBA" },
    { name: "Raju", age: 23, class: "11th" },
  ];
  await mycollection.insertMany(mydata);
}

connection();
