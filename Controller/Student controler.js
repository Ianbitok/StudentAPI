const db = require("../model/dbConnect");

const student = db.student;

module.exports = {
    // Add Student
    addStudent: async(req, res, next) => {
        try {
            let info = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender,
            } 

            const addStudent = await student.create(info)

            res.status(200).send(addStudent)
        } catch (error) {
            next(error)
        }
    },

    // Get All Students
    getAllStudent: async(req, res, next) => {
        try {
            let students = await student.findAll({})
            res.status(200).send(students)
        } catch (error) {
            next(error)
        }
    },

    // Get Student by ID
    getStudent: async(req, res, next) => {
        try {
            let id = req.params.id
            let Student = await student.findOne({where: {student_id: id}})

            if(!student) {
                throw(createError(404, "Student does not exist."))
            }
            res.status(200).send(Student)
        } catch (error) {
            next(error)
        }
    },

    // Update Student by ID
    updateStudent: async(req, res, next) => {
        try {
            let id = req.params.id

            const updateStudent = await student.update(req.body, {where: {student_id: id}})

            if(!student) {
                throw(createError(404, "Student does not exist."))
            }
            res.status(200).send(updateStudent)
        } catch (error) {
            next(error)
        }
    },
}