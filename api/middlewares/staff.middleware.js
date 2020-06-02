const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');
const User = require('../models/user.model');
const Model = require('../models/model.js');
const Staff = require('../models/staff.model');

const validateCreateStaff = catchAsync(async (req, res, next) => {
	const {
		password,
		email,
		name,
		cpr,
		mobile_number,
		accent,
		gender,
		birthdate,
		teaching_rate,
		admin,
		active,
	} = req.body;
	if (
	  admin === null ||
	  admin === undefined ||
	  !email ||
	  !name ||
	  !password ||
	  !gender
	) {
	  next(new AppError('Wrong Body', 400));
	  return;
	}
	req.user = {
		user_type: admin,
		email,
		name,
		password,
		
	};

	// CHECKS IF EMAIL OR CPR IS IN USE

	if (email) {
		const userByEmail = await Model.findByEmail({email});
		if (userByEmail) {
			return next(new AppError('User with that email already exists', 401));
		}
	}

	if (cpr) {
		const staffByCPR = await Staff.findByCPR(cpr);
		if (staffByCPR) {
			return next(
				new AppError('Staff member with that CPR already exists', 401)
			);
		}
	}

	req.staff = {
		teaching_rate,
		active: active || true,
		cpr: cpr || null,
		mobile_number: mobile_number || null,
		gender,
		accent: accent || null,
		birthdate: birthdate || null,
	};

	next();
});

const validateEditStaff = catchAsync(async (req, res, next) => {
	const {
		email,
		name,
		cpr,
		mobile_number,
		accent,
		gender,
		birthdate,
		teaching_rate,
		admin,
		active,
	} = req.body;
	if (
		admin === null ||
		admin === undefined ||
		!email ||
		!name ||
		!gender
	) {
		return next(new AppError('Wrong Body', 400));
	}
	req.user = {
		user_type: admin ? 'admin' : 'staff',
		email,
		name,
	};

	req.staff = {
		teaching_rate,
		cpr: cpr || null,
		mobile_number: mobile_number || null,
		gender,
		accent: accent || null,
		birthdate: birthdate || null,
		active,
	};

		// CHECKS IF EMAIL OR CPR IS IN USE

		// if (email) {
		// 	const userByEmail = await Model.findByEmail({email});
		// 	if (userByEmail) {
		// 		return next(new AppError('User with that email already exists', 401));
		// 	}
		// }
	
		// if (cpr) {
		// 	const staffByCPR = await Staff.findByCPR(cpr);
		// 	if (staffByCPR) {
		// 		return next(
		// 			new AppError('Staff member with that CPR already exists', 401)
		// 		);
		// 	}
		// }
	next();
});

const validateStaffID = (req, res, next) => {
	const staffID = +req.params.staffID;
	if (isNaN(staffID)) {
		return next(new AppError('Please enter a valid ID', 401));
	}
	req.staffID = staffID;
	next();
};

const checkIfStaffExistsByID = catchAsync(async (req, res, next) => {
	const staff = await Staff.findByID(req.staffID);
	if (!staff) {
		next(new AppError('Staff with that ID does not exist', 406));
		return;
	}
	req.staffUser = staff;
	next();
});

module.exports = {
	validateCreateStaff,
	validateStaffID,
	validateEditStaff,
	checkIfStaffExistsByID,
};
