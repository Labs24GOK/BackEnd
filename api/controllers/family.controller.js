// const { catchAsync } = require('../utils/catchAsync');

// const Family = require('../models/family.model');


// const findAllFamilies = catchAsync(async (req, res, next) => {
//   const families= await Family.findAllFamilies();
//   return res.status(200).json(families);
// });

// const findFamilyById =  catchAsync(async (req, res, next) => {
//     const family= await Family.findBy();
//     return res.status(200).json(family);
//   });

// module.exports = { findAllFamilies, findFamilyById };