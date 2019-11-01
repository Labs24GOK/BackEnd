exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("term")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("term").insert([
        { name: "Fall 2014", subsection: 1 },
        { name: "Fall 2014", subsection: 2 },
        { name: "Fall 2014", subsection: 3 },
        { name: "Spring 2015", subsection: 1 },
        { name: "Spring 2015", subsection: 2 },
        { name: "Spring 2015", subsection: 3 },
        { name: "Fall 2015", subsection: 1 },
        { name: "Fall 2015", subsection: 2 },
        { name: "Fall 2015", subsection: 3 },
        { name: "Spring 2016", subsection: 123 },
        { name: "Fall 2016", subsection: 123 },
        { name: "Winter 2016", subsection: 123 },
        { name: "Spring 2017", subsection: 123 },
        { name: "Summer 2017", subsection: 123 },
        { name: "Fall 2017", subsection: 123 },
        { name: "Spring 2018", subsection: 123 },
        { name: "Summer 2018", subsection: 123 },
        { name: "Fall 2018", subsection: 123 },
        { name: "Winter 2018", subsection: 123 },
        { name: "Spring 2019", subsection: 123 }
      ]);
    });
};
