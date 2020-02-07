exports.up = function(knex) {
  return knex.schema
    .createTable('school_grade', table => {
      table.increments();
      table
        .text('name')
        .notNullable()
        .unique();
      table.timestamps(true, true);
    })
    .createTable('user', table => {
      table.increments('user_id');
      table.string('user_type').notNullable();
      table
        .text('username')
        .unique()
        .notNullable();
      table.text('password').notNullable();
      table
        .text('email')
        .unique()
        .notNullable();
      table.text('name').notNullable();
      table.text('short_name');
      table.timestamps(true, true);
    })
    .createTable('preferred_contact_type', table => {
      table.increments();
      table
        .text('method')
        .notNullable()
        .unique();
      table.timestamps(true, true);
    })
    .createTable('location', table => {
      table.increments();
      table
        .text('name')
        .notNullable()
        .unique();
      table.timestamps(true, true);
    })
    .createTable('block', table => {
      table.increments();
      table
        .integer('block_code')
        .notNullable()
        .unique();
      table.text('neighborhood');
      table.timestamps(true, true);
    })
    .createTable('family', table => {
      table.increments();
      table.text('mother_name');
      table.text('father_name');
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
      table.text('primary_telephone').notNullable();
      table.text('secondary_telephone').notNullable();
      table
        .integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
      table.timestamps(true, true);
    })
    .createTable('student', table => {
      table.increments();
      table.text('cpr').unique();
      table
        .date('registration_date')
        .defaultTo(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()
          ).toUTCString()
        );
      table.text('first_name');
      table.text('additional_names');
      table.text('gender');
      table.date('birthdate');
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
        .date('grade_updated')
        .defaultTo(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()
          ).toUTCString()
        );
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
      table
        .integer('family_id')
        .unsigned()
        .references('id')
        .inTable('family')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
      // table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('student')
    .dropTable('family')
    .dropTable('block')
    .dropTable('location')
    .dropTable('preferred_contact_type')
    .dropTable('user')
    .dropTable('school_grade');
};
