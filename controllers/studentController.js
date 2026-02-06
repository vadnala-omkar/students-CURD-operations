const Student = require('../models/student');


// Create and Save a new Student
const createStudent = async(req, res)=>{
    try{
        const {name, age, rollNo, phone, email, address} = req.body;
        const student = new Student({name, age, rollNo, phone, email, address})
        await student.save();
        res.status(201).send({message: 'Student created successfully', student});
    }
    catch(error){
        res.status(400).send({message: 'Error creating student', error: error.message});
    }
}
// Retrieve and return all students from the database.
const getStudents = async(req, res)=>{
    try{
        const students = await Student.find();
         res.status(200).json({students});
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Error fetching students', error: err.message});
    }
}

//get single student by id
const getStudentById = async(req, res)=>{
    try{
        const rollNo = req.params.id;
        const studentId = await Student.findOne({rollNo});
        if(!studentId){
            return res.status(404).send({message: 'Student not found'});
        }
        res.status(200).json({studentId});
    }catch(err){
        console.log(err);
        res.status(500).send({message: 'Error fetching student', error: err.message});
    }
}

//put update student by id
const updateStudentById = async (req, res) => {
    try {
        const { name, age, phone, email, address } = req.body;

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, age, phone, email, address },
            { new: true } // returns updated document
        );
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({message: 'Student updated successfully', student});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error updating student',
            error: err.message
        });
    }
};


//deleting a student by id
const deleteStudentById = async(req, res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Student deleted successfully', deleteStudent});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Error deleting student', error: err.message});
    }
}
module.exports = {createStudent, getStudents, getStudentById, updateStudentById, deleteStudentById}

