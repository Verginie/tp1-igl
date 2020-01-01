const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TeacherSchema = new Schema(
  {
    id : Number,
    nom: String,
    prenom:String ,
    mail :String ,
    password :String ,
    TABgroupes:[Number,Number],
  });

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;