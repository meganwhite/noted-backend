
exports.up = function(knex) {
    return knex.schema
        .createTable("users",tbl => {
            tbl.increments();
            tbl.string("username",128).notNullable();
            tbl.string("password").notNullable();
            tbl.text("avatar");
        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("title").notNullable();
            tbl.string("topic").notNullable();
            tbl.string("link");
            tbl
                .integer("user_id")
                .notNullable()
                .references("id")
                .inTable("users")
        })
        .createTable("notes", tbl => {
            tbl.increments();
            tbl.text("note")
            tbl
                .integer("resource_id")
                .notNullable()
                .references("id")
                .inTable("resources")
        })
  
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists("notes")
        .dropTableIfExists("resources")
        .dropTableIfExists("users")
};
