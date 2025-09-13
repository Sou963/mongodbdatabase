const {MongoClient}=require("mongodb");

var url="mongodb+srv://souravbosu844_db_user:1yxAubMvf6yUQvav@cluster1.glem11w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

var client =new MongoClient(url);

var databasename="school";
var collectionname="students";

async function fun(){
    try{
        await client.connect();
        const mydatabase=client.db(databasename);
        const mycollection=mydatabase.collection(collectionname);
        console.log("connection successful");
        await updata(mycollection);
    }
    catch(error){
        console.log("error found:",error.message);
    }
    finally{
        await client.close();
        console.log("connection closed");
    }

}

async function updata(mycollection){
    try{
        var up=await mycollection.updateOne({age:21},{$set:{age:22}});
        console.log("data updata=",up);
    }
    catch(error){
        console.log("error found:",error.message);
    }

}

fun();