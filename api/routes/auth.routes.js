const express = require('express');

const router = express.Router();

router.post('/parent-register', (req, res) => {});

/********************************************************
*                         OLD                        *
********************************************************/

server.post('/parent-register', (req, res) => {
  console.log('parent-register');
  const user = req.body.user;
  const family = req.body.family;
  const student = req.body.student;

  const hashedPassword = bcrypt.hashSync(user.password, 10);

  model
    .addUser({
      username: user.username,
      password: hashedPassword,
      name: user.name || null,
      email: user.email || null,
      user_type: user.user_type
    })
    .then(user => {
      console.log('User return:', user);
      model
        .addFamily({
          mother_name: family.mother_name,
          father_name: family.father_name,
          primary_telephone: family.primary_telephone,
          secondary_telephone: family.secondary_telephone,
          user_id: user[0].user_id
        })
        .then(family => {
          console.log('Family return:', family);
          model
            .addStudent({
              first_name: student.first_name,
              additional_names: student.additional_names,
              cpr: student.cpr,
              email: student.email,
              birthdate: student.birthdate,
              registration_date: new Date(),
              location_id: student.location_id,
              family_id: family[0].user_id
            })
            .then(student => {
              console.log('Student return:', student);
              res.status(200).json({
                student_name: student[0]
              });
            })
            .catch(error => {
              console.log('student', error);
              res.status(500).json({
                message: `There was an error attempting to register a student: ${error}.`
              });
            });
        })
        .catch(error => {
          console.log('family', error);
          res.status(500).json({
            message: `There was an error attempting to add a family: ${error}.`
          });
        });
    })
    .catch(error => {
      console.log('user', error);
      res.status(500).json({
        message: `There was an error attempting to register user: ${error}.`
      });
    });
});
