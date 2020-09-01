const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = process.env.DEV_DB

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
}

mongoose
	.connect(DEV_DB, options)
	.then(() => {
		console.log("MongoDB is connected")
	})
	catch((err) => {
		console.log("MongoDB connection unsuccessful")
		console.log(err)
	})
