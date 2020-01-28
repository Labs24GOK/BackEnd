const Staff = require('../models/staff.model');

const findStaffById = async (req, res) => {
  try {
    const staffID = +req.params.staffID;
    if (isNaN(staffID)) {
      return res.status(401).json({ error: 'Please enter a valid ID' });
    }
    const staff = await Staff.findByID(staffID);
    if (!staff) {
      return res
        .status(406)
        .json({ error: 'No staff member found with that endpoint' });
    }
    return res.status(200).json(staff);
  } catch (error) {}
};

module.exports = {
  findStaffById
};
