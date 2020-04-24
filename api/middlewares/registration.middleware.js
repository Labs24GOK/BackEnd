const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');
const Auth = require('../models/auth.model');
const User = require('../models/user.model');


const validateRegistration = catchAsync(
    async (req, res, next) => {
        const {
            username,
            password,
            email,
            user_type
        } = req.body;
       
        if (
            (
                !username ||
                !password ||
                !email ||
                !user_type 
            )
        ) {
            next(new AppError('One or more input fields are missing', 403));
            return;
        }
        req.user = {
            username,
            email,
            password,
            user_type
        };
        // CHECKS IF EMAIL USERNAME  IS IN USE
        const userByEmail = await User.findUserByCriteria(
            'email',
            email
        );
        const userByUsername = await User.findUserByCriteria(
            'username',
            username
        );

        if (userByEmail) {
            return next(
                new AppError(
                    'User with that email already exists',
                    403
                )
            );
        }
        if (userByUsername) {
            return next(
                new AppError(
                    'User with that username already exists',
                    403
                )
            );
        }
        next();
    }
);

    module.exports = {
  validateRegistration
};
