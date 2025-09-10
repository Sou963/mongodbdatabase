const { MongoClient } = require('mongodb');

var url="mongodb+srv://souravbosu844_db_user:1yxAubMvf6yUQvav@cluster1.glem11w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

var client=new MongoClient(url);

var dataasename="school";
var collectionname="students";

async function run(){
    try {
        await client.connect();
        const mydatabase=client.db(dataasename);
        const mycollection=mydatabase.collection(collectionname);
        console.log("connection successful");
        await findor(mycollection);
    }
    catch(error){
        console.log("error found",error.message);
    }
    finally{
        await client.close();
        console.log("connection closed")
    }
}

// async function findone(mycollection) {
    
//         try{
//             const alluserdata=await mycollection.find().toArray();
//              console.log("all user data:",alluserdata);

//         }
//         catch(error){
//             console.log("error found:",error.message);
//         }
//    finally{
//        await client.close();
//    }
// }
run();

// async function findwithcondition(mycollection){
//     try{
//         const adults = await mycollection.find({ age: { $gt: 21 } }).toArray();
//         console.log("Users age > 21:", adults);
//     }
//    catch(error){
//        console.log("error found:",error.message);
//    }
//    finally{
//        await client.close();
//    }
// }
// async function findAnd(mycollection){
//     try{
//         const specificUser = await mycollection.find({ name: "Rahim", age: 25 }).toArray();
//         console.log("Specific User:", specificUser);
//     }
//    catch(error){
//        console.log("error found:",error.message);
//    }
//    finally{
//        await client.close();
//    }
// }

async function findor(mycollection){
    try{
        const ordata=await mycollection.find({$or:[{name:'Raju'},{age:23}]}).toArray();
        console.log("Or data:",ordata);
    }
   catch(error){
       console.log("error found:",error.message);
   }
   finally{
       await client.close();
   }
}