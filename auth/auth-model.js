const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

async function add(user) {
	console.log("add function")
	user.password = await bcrypt.hashSync(user.password, 10)

	const [id] = await db("users").insert(user)
	return findById(id)
}

function find() {
	console.log("find function")
	return db("users").select("id", "username")
}

function findBy(filter) {
	console.log("findBy function")
	return db("users")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id) {
	console.log("findById function")
	return db("users")
		.select("id", "username")
		.where( id )
		.first()
}

module.exports = {
	add,
	find,
	findBy,
	findById,
}