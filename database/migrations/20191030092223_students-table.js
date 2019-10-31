exports.up = function (knex) {
  return knex.schema
      .createTable('school_grades', table => {
          table.increments();
          table.text('name').notNullable().unique();
      })
      .createTable('contact_types', table => {
        table.increments();
        table.text('method').notNullable().unique();
      })
      .createTable('locations', table => {
        table.increments();
        table.text('name').notNullable().unique();
      })
      .createTable('students', table => {
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
              .inTable('school_grades')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.text('school_name');
          table
              .date('grade_updated');
          table.text('home_telephone');
          table.text('mobile_telephone');
          table.integer('block');
          table.text('road');
          table.text('building');
          table.text('flat');
          table.text('email');
          table.text('notes');
          table
              .integer('contact_type_id')
              .unsigned()
              .references('id')
              .inTable('contact_types')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.boolean('no_call').defaultTo(false);
          table.boolean('delinquent').defaultTo(false);
          table.boolean('expelled').defaultTo(false);
          table
              .integer('location_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('locations')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');

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
};

exports.down = function (knex) {
  return knex.schema
      .dropTable('locations')
      .dropTable('school_grades')
      .dropTable('contact_types')
      .dropTable('students')
      .dropTable('contacts')
      .dropTable('student_contacts')
};
