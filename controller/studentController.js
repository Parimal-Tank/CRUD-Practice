const studentModel =  require('../models/Students');

module.exports = function(app){

    app.get('/'  , function(req , res){
        
        studentModel.find( function(err , data){
            if(err) throw err;
            res.send(data);
          }
        )

    })

    app.post('/save' , function(req, res){

        let studentData = new studentModel();

        studentData.studentId =  req.body.studentId;
        studentData.studentfirstName = req.body.studentfirstName;
        studentData.studentlastName = req.body.studentlastName;
        studentData.studentDob = req.body.studentDob;
        studentData.studentAddress = req.body.studentAddress;
        studentData.studentContact = req.body.studentContact;

        studentData.save(function(err , data){
            if(err) throw err;
            return res.status(400).send(studentData);

        })
    })

    app.post('/delete' , function(req ,res){

        studentModel.findByIdAndDelete(req.body.id ,function(err , data){
            if(err) throw err;
            res.send(data);
            console.log("Successfully Deleted");
        })
    })


    app.post('/update' , function(req ,res){
        studentModel.findByIdAndUpdate(req.body.id ,  {studentfirstName : req.body.studentfirstName}, function(err , data){
            if(err) throw err;

            res.send(data);
        })
    })
}