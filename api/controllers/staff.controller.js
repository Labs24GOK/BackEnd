const Staff = require('../models/staff.model');
const bcrypt = require('bcrypt');
const Course = require('../models/course.model');

const findStaffById = async (req, res) => {
	try {
		const staff = await Staff.findByID(req.staffID);
		if (!staff) {
			return res
				.status(406)
				.json({ error: 'No staff member found with that ID' });
		}
		return res.status(200).json(staff);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const findAllStaff = async (req, res) => {
	try {
		const allStaff = await Staff.find();
		return res.status(200).json(allStaff);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const createAStaff = async (req, res) => {
	try {
		const hashedPassword = bcrypt.hashSync(req.user.password, 10);
		req.user = { ...req.user, password: hashedPassword };
		const newStaffID = await Staff.create(req.user, req.staff);
		const newStaff = await Staff.findByID(newStaffID[0]);
		return res.status(201).json(newStaff);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const editAStaff = async (req, res) => {
	try {
		const editedStaff = await Staff.edit(req.staffID, req.user, req.staff);
		return res.status(201).json(editedStaff);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const deleteAStaff = async (req, res) => {
	try {
		await Staff.remove(req.staffID);
		return res.status(200).json({ message: 'Staff Deleted' });
	} catch (error) {
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const getAllCoursesByStaff = async (req, res) => {
	try {
		const courses = await Course.findCoursesByTeacherID(req.staffID);
		res.status(200).json(courses);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

module.exports = {
	findStaffById,
	findAllStaff,
	createAStaff,
	editAStaff,
	deleteAStaff,
	getAllCoursesByStaff
};
