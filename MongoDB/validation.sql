db.createCollection('products',{validator:{
    $jsonSchema:{
        bsonType:'object', 
        required:['title', 'pname', 'owner', 'comments']
        properties:{
            title:{
                 bsonType:'string', 
                 description:'Title must be string'

            },
            pname:{
                 bsonType:'string', 
                 description:'Title must be string'

            },
            owner:{
                 bsonType:'objectId', 
                 description:'id of customer'

            },
            comments:{
                     bsonType:'string', 
                 description:'comment must be string'

            }
        }
        } 

    }
        
})