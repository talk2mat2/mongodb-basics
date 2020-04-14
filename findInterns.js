
var MongoClient =  require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    dbase= db.db('Martins_c');
    dbase.collection('myMovies').findOne({}).then(doc => {
        console.log(doc);
           }).catch((err) => {throw err;          
        });db.close();
});

//the first document in the collection 


