const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = process.env.DEV_DB
const uri = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongocluster}.amsqv.mongodb.net/?retryWrites=true&w=majority`

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
}

mongoose
	.connect(db, options)
	.then(() => {
		console.log("MongoDB is connected")
	})
	catch((err) => {
		console.log("MongoDB connection unsuccessful")
		console.log(err)
	})
