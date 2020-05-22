
exports.seed = async function(knex) {
  await knex("users").insert([
    {
      username: "guitarllamama12",
      password: "!g0tap@ssword"
    },
    {
      username: "dooWop",
      password: "th@tT#!ng"
    },
    {
      username: "finalUser",
      password: "badpassword:("
    },
  ])
}