const {MongoClient}=require("mongodb");

var url="mongodb+srv://souravbosu844_db_user:1yxAubMvf6yUQvav@cluster1.glem11w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

var client = new MongoClient(url);

var databasename="school";
var collectionname="students";

async function run(){
    try{
        await client.connect();
        const mydatabase=client.db(databasename);
        const mycollection=mydatabase.collection(collectionname);
        console.log("connection successful");
        await sortdata(mycollection);
    }
    catch(error){
        console.log("error found:",error.message);
    }
    finally{
        await client.close();
        console.log("connection closed");
    }
}
run();

async function sortdata(mycollection){
    try{
        var sort=await mycollection.find().sort({age:-1}).toArray();
        console.log("sorted data=",sort);
    }
    catch(error){
        console.log("error found:",error.message);
    }
}