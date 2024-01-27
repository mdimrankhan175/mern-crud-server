import mongoose from 'mongoose'


const Connection= async (username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-ggt6zw1-shard-00-00.rup44km.mongodb.net:27017,ac-ggt6zw1-shard-00-01.rup44km.mongodb.net:27017,ac-ggt6zw1-shard-00-02.rup44km.mongodb.net:27017/?ssl=true&replicaSet=atlas-6zjhjp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true,  useFindAndModify: false, })
        console.log('Imran Database connected successfully')

    }catch(error){
        console.log('Error while connecting with the databse', error)
    }
}

export default Connection