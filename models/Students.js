const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    studentId : String ,
    studentfirstName : String,
    studentlatName : String,
    studentDob : String ,
    studentAddress : String,
    studentContact : Number
});

const studentModule = mongoose.model('Student' , studentSchema);
module.exports = studentModule;
