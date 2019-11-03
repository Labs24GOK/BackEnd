exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("group_type")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("group_type").insert([
        { short_description: "Nur", long_description: "Nursery" }
      ]);
    });
};
