
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('preferred_contact_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('preferred_contact_type').insert([
        { method: 'email' },
        { method: 'in-person' },
        { method: 'phone' },
        { method: 'SMS' },
        { method: 'WhatsApp' }
      ]);
    });
};
