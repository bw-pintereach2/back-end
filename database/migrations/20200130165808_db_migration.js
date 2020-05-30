exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("username", 255)
        .notNullable()
        .unique();
      tbl.string("password", 255).notNullable();
    })

    .createTable("categories", tbl => {
      tbl.increments();

      tbl.string("category_title", 255)
        .notNullable();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
    })

    .createTable("articles", tbl => {
      tbl.increments();
  
        
      tbl.string("article_title", 255)
        .notNullable();
      tbl.string("article_link", 255)
       .notNullable();
      tbl.string("article_notes", 255);
      tbl.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE');
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("articles")
  .dropTableIfExists("categories")
  .dropTableIfExists("users")
};