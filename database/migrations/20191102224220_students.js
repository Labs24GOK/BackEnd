exports.up = function (knex) {
    return knex.schema
        .createTable('school_grade', table => {
            table.increments();
            table.text('name').notNullable().unique();
            table.timestamps(true, true);
        })
        .createTable('preferred_contact_type', table => {
            table.increments();
            table.text('method').notNullable().unique();
            table.timestamps(true, true);
        })
        .createTable('location', table => {
            table.increments();
            table.text('name').notNullable().unique();
            table.timestamps(true, true);
        })
        .createTable('block', table => {
            table.increments();
            table.integer('block_code').notNullable().unique();
            table.text('neighborhood');
            table.timestamps(true, true);
        })
        .createTable('student', table => {
            table.increments();
            table.text('cpr')
                .unique();
            table
                .date('registration_date');
            table.text('first_name');
            table.text('additional_names');
            table.text('gender');
            table
                .date('birthdate')
            table
                .integer('school_grade_id')
                .unsigned()
                .references('id')
                .inTable('school_grade')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
            table.text('school_name');
            table
                .date('grade_updated');
            table.text('home_telephone');
            table.text('mobile_telephone');
            table
                .integer('block_code')
                .unsigned()
                .references('block_code')
                .inTable('block')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
            table.text('road');
            table.text('building');
            table.text('flat');
            table.text('email');
            table.text('notes');
            table
                .integer('preferred_contact_type_id')
                .unsigned()
                .references('id')
                .inTable('preferred_contact_type')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
            table.boolean('no_call').defaultTo(false);
            table.boolean('delinquent').defaultTo(false);
            table.boolean('expelled').defaultTo(false);
            table
                .integer('location_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('location')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
            table.timestamps(true, true);

        })
        .createTable('contact', table => {
            table.increments();
            table.text('name').notNullable();
            table.timestamps(true, true);
        })
        .createTable('student_contact', table => {
            table.increments();
            table
                .integer('student_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('student')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
            table
                .integer('contact_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('contact')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index();
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('student_contact')
        .dropTable('contact')
        .dropTable('student')
        .dropTable('block')
        .dropTable('location')
        .dropTable('preferred_contact_type')
        .dropTable('school_grade');
};
