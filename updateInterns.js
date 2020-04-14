var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {   
    if (err) throw err;
    var dbase = db.db("Martins_c");
    oldQuery=  {movie: "The Banker", year: "2020", rating: 8}
    newQuerry =  {$set:{movie: "Twilight", year: "2008", rating: 7}}
    dbase.collection('myMovies').updateOne(oldQuery,newQuerry,(err,res)=>{
        if (err) throw err;
        console.log('1 movie updated');
    });
    
});