const express = require('express');

const {
    findAllPlacementExams,
    findPlacementExamById,
    findPlacementExamsByStudentId,
    createPlacementExam,
    deletePlacementExam,
    editPlacementExam
} = require('../controllers/placement_exam.controller');

const {
    validateStudentID
} = require('../middlewares/student.middleware');

const router = express.Router();

router.param('studentID', validateStudentID);
// router.param('examID');

router.get('/placementExam', findAllPlacementExams); // gets all records in PE table

router.get('/placementExam/:id', findPlacementExamById); // gets a single placement exam

router.get('/placementExam/student/:studentID', findPlacementExamsByStudentId); // gets all placement exams taken by a single student

router.post('/placementExam', createPlacementExam); // creates a new record in PE table

router.put('/placementExam/:id', editPlacementExam); // edits a current record in PE table

router.delete('/placementExam/:id', deletePlacementExam); // deletes a record in PE table

module.exports = router;