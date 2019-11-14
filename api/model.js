const db = require("../database/db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findAny,
  remove,
  update,
  updateAny,
  makeWhere,
  addUser,
  addMeeting,
  addFamily,
  addStudent
};

// function find(view, where, perPage, skip) {
//     console.log('where', where)
//     console.log('select * from "' + view + '"' + (where ? ' where ' + where : ''));
//     const rows = db.raw('select * from "' + view + '"' + (where ? ' where ' + where : '') + (perPage ? ' limit ' + perPage : '') + (skip ? ' offset ' + skip : ''));
//     return rows
// }
function find(view, where) {
  console.log("where", where);
  console.log(
    'select * from ' + view + (where ? " where " + where : "")
  );
  const rows = db.raw(
    'select * from ' + view + (where ? " where " + where : "")
  );
  return rows;
}

function findAny(perPage, skip, table, where, orderBy) {
  let propName;
  let propValue;

  if (where) {
    propName = where.split("=")[0];
    propValue = where.split("=")[1];
  }

  return db(table).modify(function (queryBuilder) {
    if (orderBy) {
      queryBuilder.orderBy(orderBy);
    }

    if (where) {
      queryBuilder.where(propName, propValue);
    }

    if (perPage) {
      queryBuilder.limit(perPage);
    }

    if (skip) {
      queryBuilder.offset(skip);
    }
  });
}

function makeWhere(body, conn) {
  if (!conn) conn = "and";
  let where = "";
  let i = 0;
  for (let [key, value] of Object.entries(body)) {
    if (!i) where = where + `${key} = '${value}'`;
    else where = where + ` ${conn} ${key} = '${value}'`;
    console.log(`${key}: ${value}`);
    i++;
  }
  console.log("where", where);
  return where;
}

function findBy(view, filter) {
  console.log("filter", filter);
  return db.raw('select * from "' + view + '" where ' + filter);
}

async function add(table, body) {
  let where = makeWhere(body);
  await db(table).insert(body);

  return findBy(table, where);
}

function findById(view, id) {
  return db(view)
    .where({ id })
    .first();
}

function remove(tab, whe) {
  return db.raw('delete from "' + tab + '" where ' + whe);
}

function update(table, where, body) {
  let id = where;

  console.log(
    '*********************update "' +
    table +
    '" set ' +
    makeWhere(body, ",") +
    " where " +
    where
  );
  //   return db.raw(
  //     'update "' + table + '" set ' + makeWhere(body, ",") + " where " + where
  //   );
  return db(table)
    .where({ id: body.id })
    .update(body);
}

function updateAny(table, where, body) {

  console.log(
    '*********************update "' +
    table +
    '" set ' +
    makeWhere(body, ",") +
    " where " +
    where
  );
  return db.raw(
    'update "' + table + '" set ' + makeWhere(body, ",") + " where " + where
  );
}

function addUser(userData) {
  return db("user")
    .insert(userData)
    .returning("*");
}

function addUser(userData) {
  console.log("Username and password:", userData);

  return db("user")
    .insert(userData)
    .returning("username");
}

function addMeeting(meeting) {
  return db("meeting")
    .insert(meeting)
    .returning({ id: "id" });
}

function addFamily(familyData) {
  return db("family")
    .insert(familyData)
    .returning("*");
}

function addStudent(studentData) {
  return db("student")
    .insert(studentData)
    .returning("*");
}
