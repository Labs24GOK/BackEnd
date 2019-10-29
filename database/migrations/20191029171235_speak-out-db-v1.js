
exports.up = function (knex) {
    return knex.schema
        .createTable('students', table => {
            table.increments();
            table.text('cpr')
                .unique();
            table
                .date('registration_date')
                .notNullable();
            table.text('first_name').notNullable();
            table.text('additional_names').notNullable();
            table.text('gender').notNullable();
            table
                .date('birthdate')
                .notNullable();
            table.text('school_grade').notNullable();
            table
                .integer('school_grade_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('school_grades')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.text('school_name');
            table
                .date('grade_updated');
            table.text('home_telephone').notNullable();
            table.text('mobile_telephone').notNullable();
            table.integer('block').notNullable();
            table.text('road').notNullable();
            table.text('building').notNullable();
            table.text('flat').notNullable();
            table.text('email');
            table.text('notes');
            table
                .integer('contact_type_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('contact_types')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.boolean('no_call').defaultTo(false);
            table.boolean('delinquent').defaultTo(false);
            table.boolean('expelled').defaultTo(false);

        })
        .createTable('contacts', table => {
            table.increments();
            table.text('name').notNullable().unique();
        })
        .createTable('student_contacts', table => {
            table.increments();
            table
                .integer('student_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('students')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table
                .integer('contact_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('contacts')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('school_grades', table => {
            table.increments();
            table.text('name').notNullable().unique();
        })
        .createTable('contact_types', table => {
            table.increments();
            table.text('method').notNullable().unique();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('students')
};
