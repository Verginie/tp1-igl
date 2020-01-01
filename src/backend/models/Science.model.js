const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ScienceSchema = new Schema(
  {
    id_Science : Number,
    id_Groupe : int,
    id_Annee : int,
    
    module: String,
    salle :String ,
    date:Date ,
    complete : Boolean ,
  });

const  Science = mongoose.model(' Science', ScienceSchema);

module.exports =  Science;