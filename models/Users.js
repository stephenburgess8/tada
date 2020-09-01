const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		email_is_verified: {
			type: Boolean,
			default: false
		},
		password: {
			type: String
		}
	},
	{ strict: false }
)

module.exports = User = mongoose.model("users", UserSchema)
