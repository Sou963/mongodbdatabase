var monconnet=require("mongodb").MongoClient;

var url="mongodb+srv://souravbosu844_db_user:1yxAubMvf6yUQvav@cluster1.glem11w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

var client=new monconnet(url);

async function deletedata(){
   try {
    await client.connect();
    //dbname
    const mydatabase=client.db("school");
    const filename=mydatabase.collection("students");
    const mydelete=await filename.deleteMany({age:{$lt:20}});
    console.log("deleted data less then 20:",mydelete.deletedCount);

   }
   catch(error){
    console.log("error found:",error.message)

   }
   finally{
    await client.close();
   }
} 
deletedata();
    
