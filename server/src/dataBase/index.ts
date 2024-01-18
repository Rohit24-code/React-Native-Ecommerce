require("dotenv").config()
const mongoose=require("mongoose");

// { useNewUrlParser: true }: This option is used to ensure that Mongoose uses the latest URL parser when connecting to the MongoDB database. The useNewUrlParser option is set to true to enable this behavior. This is important because the default parser is deprecated.

// { useUnifiedTopology: true }: This option enables the use of the new Server Discovery and Monitoring engine in MongoDB. It is set to true to use the new engine, which is recommended for avoiding deprecation warnings.

// In summary, this code establishes a connection to a MongoDB database using Mongoose, with specific options to use the latest URL parser and the new Server Discovery and Monitoring engine. Connecting to the database is a crucial step before performing any operations such as querying or updating data.

export const ConnectionToDataBase=mongoose.connect(process.env.MONGO_URI,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

// module.exports={ConnectionToDataBase};