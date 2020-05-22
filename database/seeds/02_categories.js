exports.seed = async function(knex) {
  await knex("categories").insert([
    {
      category_title: "Microbiology",
      user_id: 1,
    },
    {
      category_title: "Chemistry",
      user_id: 2,
    },
    {
      category_title: "Biology",
      user_id: 3,
    },
  ])
}