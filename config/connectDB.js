//we should fisrt install mongoose by npm install mongoose.
//this file connectDB under the folder config is used to connect to the database
// the "mongodb://127.0.0.1:27017/contactList" is brought from the mongo.exe terminal
//we have created a db called contacList via use contactList command in mongo
// i have added a collection called users via the command db.users.insert()
const mongoose = require("mongoose");
function connectDB() {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
      console.log(`the database is connected`)
  }).catch((err)=>{
      console.log(err)
  });
}

module.exports = connectDB;
