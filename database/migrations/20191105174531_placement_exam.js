
exports.up = function (knex) {
    return knex.schema
        .createTable("placement_exam", table => {
            table.increments();
            table
                .integer("student_id")
                .unsigned()
                .references("id")
                .inTable("student")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table.date('test_date');
            table.text('test');
            table
                .integer("overall_level_id")
                .unsigned()
                .references("id")
                .inTable("level")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table.integer('speaking_fluency');
            table.integer('spoken_accuracy');
            table.integer('listening_comprehension');
            table
                .integer("oral_level_id")
                .unsigned()
                .references("id")
                .inTable("level")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table.integer('mc_correct');
            table.integer('mc_marked');
            table
                .integer("mc_level_id")
                .unsigned()
                .references("id")
                .inTable("level")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table.text('notes');
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("placement_exam");
};
