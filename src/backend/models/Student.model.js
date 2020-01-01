const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    id : Number,
    id_Groupe: Number,
    id_Annee : Number,
    matricule :Number,
    prenom: String,
    nom :String ,
    mail :String ,
    password :String ,
    ///////
    Note_cc : { type: Number, min: 0, max: 20 },
    Note_ci : { type: Number, min: 0, max: 20 },
    Note_cf : { type: Number, min: 0, max: 20 },
    MY_moyen : { type: Number, min: 0, max: 20 }
    
  });

const Student = mongoose.model('Student', StudentSchema);

module.exports =Student;