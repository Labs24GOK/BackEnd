const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('./database/db-config');

module.exports = passport => {
    const authenticateUser = async (username, password, done) => {
        const user = await db('user')
            .where({ username })
            .first();

        if (user == null) {
            return done(null, false, { message: 'No user with that username' });
        }

        try {
            if (await bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'username', session: true }, authenticateUser));
    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });
    passport.deserializeUser((user_id, done) => {
        return db('user')
            .where({ user_id })
            .first()
            .then(user => {
                done(null, user);
            })
            .catch(error => {
                done(error, false);
            });
    });
};
