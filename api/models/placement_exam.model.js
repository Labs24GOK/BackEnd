const db = require('../../database/db-config');

const returning = [
    'pe.id',
    'pe.student_id',
    'pe.test_date',
    'pe.test',
    'pe.level_id',
    'pe.fluency',
    'pe.accuracy',
    'pe.comprehension',
    'pe.writing_level',
    'pe.mc_correct',
    'pe.mc_marked',
    'pe.notes',
    'l.description',
    'l.certificate_text'
];

const create = body => {
    return db('placement_exam')
        .insert(body)
        .returning('*');
};

const findAll = () => {
    return db('placement_exam as pe')
        .join('level as l', 'l.id', 'pe.level_id')
        .select(returning)
        .orderBy('pe.id', 'desc');
};

const findByExamId = id => {
    return db('placement_exam as pe')
        .where("pe.id", "=", id)
        .join('level as l', 'l.id', 'pe.level_id')
        .select(returning)
        .first();
};

const findByStudentId = id => {
    return db('placement_exam as pe')
        .where('pe.student_id', '=', id)
        .join('level as l', 'l.id', 'pe.level_id')
        .select(returning)
        .orderBy('pe.test_date', 'desc');
};

const remove = id => {
    return db('placement_exam as pe')
        .del()
        .where("pe.id", "=", id);
};

const update = (id, body) => {
    return db('placement_exam as pe')
        .update(body)
        .where("pe.id", "=", id)
        .returning('*');
};

module.exports = {
    create,
    findAll,
    findByExamId,
    findByStudentId,
    remove,
    update
};