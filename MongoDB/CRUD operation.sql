
{name: "bhuwan", mobile:1234}

// inserting the query in mongodb

insertOne({name: "bhuwan", mobile:1234})

insertMany([{name: "bhuwan", mobile:1234},{name: "Hari", mobile:1234}])

// updating 

updateOne({name:"Bhuwan"}, $set:{mobile:3333})


// find()

find({name:"bhuwan"})


//Delete

deleteOne({name:"bhuwan"})






