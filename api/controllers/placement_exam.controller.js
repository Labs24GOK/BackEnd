const { catchAsync } = require('../utils/catchAsync');
const PlacementExam = require('../models/placement_exam.model');

const findAllPlacementExams = catchAsync(async (req, res) => {
    const exams = await PlacementExam.findAll()
    return res.status(200).json(exams);
});

const findPlacementExamById = (req, res) => {
    const { id } = req.params;
    PlacementExam.findByExamId(id)
        .then(funkyMonkey => {
            res.status(200).json(funkyMonkey);
        });
};

const findPlacementExamsByStudentId = (req, res) => {
    const { studentID } = req.params;
    PlacementExam.findByStudentId(studentID)
        .then(response => {
            res.status(200).json(response);
        })
};

const findPlacementExamsByType = (req, res) => {
    const { typeID } = req.params;
    console.log("typeID: ", typeID);
    // let examType;
    // if (typeID === 1) {
    //     console.log("in If 1")
    //     examType = 'online'
    // } else if (typeID === 2) {
    //     console.log("in If 2")
    //     examType = 'oral'
    // }
    // console.log("examType: ", examType);
    PlacementExam.findByType(typeID)
        .then(response => {
            console.log("Find by type: ", response);
            res.status(200).json({ message: "response" })
        })
}

const findPlacementExamsByStudentIDAndType = (req, res) => {
    const { studentID } = req.params.studentID;
    const { type } = req.params.type;
    PlacementExam.findByStudentIdAndType(studentID, req.type)
        .then(response => {
            console.log("Find by student id & type: ", response);
            res.status(200).json({ message: "ID & TYPES SUCCESS" })
        })
}

const createPlacementExam = (req, res) => {
    PlacementExam.create(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: "Jeremy, go eat a butterfinger!", error: err })
        })
};

const deletePlacementExam = catchAsync(async (req, res) => {
    const { id } = req.params;
    await PlacementExam.remove(id);
    return res.status(200).json({ message: 'Placement Exam Deleted'})
});

const editPlacementExam = catchAsync(async (req, res) => {
    const { id } = req.params;
    const [editedExam] = await PlacementExam.update(id, req.body);
    const exam = await PlacementExam.findByExamId(editedExam.id);
    res.status(200).json(exam);
});

module.exports = {
    findAllPlacementExams,
    findPlacementExamById,
    findPlacementExamsByStudentId,
    findPlacementExamsByType,
    findPlacementExamsByStudentIDAndType,
    createPlacementExam,
    deletePlacementExam,
    editPlacementExam
};