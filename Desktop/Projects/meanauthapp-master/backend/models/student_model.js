const mongoose = require('mongoose');
let fs = require('fs');

const studentSchema = mongoose.Schema({
    rno: {
        type: Number
    },
    name: {
        type: String
    },
    mobile_no: {
        type: Number
    },
    image: {
        type: String
    }
});

const Student = module.exports = mongoose.model('students', studentSchema);

module.exports.getStudents = (callback, limit) => {
    Student.find(callback).limit(limit);
};

module.exports.addStudent = (Stu, callback) => {
    let dt=new Date();//current date and time of server
    let text = "";//random text
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( let i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    let pos=Stu.student_img.indexOf(",");
    let base64d=Stu.student_img.substring(pos+1);
    let path="./public/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    let path1="/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    let addedStu = {
        rno: Stu.rno,
        name: Stu.name,
        mobile_no: Stu.mobile_no,
        image: path1
    };

    return Student.create(addedStu,callback);
};

module.exports.deleteStudent = (Stu, callback) => {
    if (Stu.image != '')
    {
        let path='./public'+Stu.image;
        fs.unlink(path,function(err){
            if(err){
                console.log(err);
            }
            console.log('Deleted successfuly')});
    }
    let query = {rno: Stu.rno};
    Student.remove(query, callback);
};

module.exports=Student;