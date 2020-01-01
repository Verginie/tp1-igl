const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let Teacher = require('./models/Teacher.model');
let Student = require('./models/Student.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
/////////////////////////
        mongoose.connect(
    "mongodb://yasser123:yasser123123@ds033489.mlab.com:33489/yasser-igl",
                      { useNewUrlParser: true,useUnifiedTopology: true },
                function(error){
                     if(error){
                                 console.log(error);
                                 
                     }else{
                                 console.log("connected to database");

                     }}
    );

/////////////////////////////////////////////////////////////////
   ///********************************************** NE SUPPRIME PAS CES COMMENTAIRES ************ 
       /* Teacher.create(
    { id: 1,nom:"yasser",prenom:"yasser",mail : "yyyy", password :"yyyy",TABgroupes:[]}
  );
  Teacher.create(
    { id: 1,nom:"dris",prenom:"dris",mail : "dddd", password :"dddd",TABgroupes:[]}
  );
  //////////////////////////////////////////////////////////:
  Student.create(
    {
                  
      matricule :17001,
      nom :"yasser",
      prenom :"chouadra",
      Note_cc :7,
      Note_ci :7,
      Note_cf :7,
      MY_moyen : 7
  
  }
  );
  Student.create(
    {
                  
      matricule :17001,
      nom :"yasser",
      prenom :"chouadra",
      Note_cc :8,
      Note_ci :8,
      Note_cf :8,
      MY_moyen : 8
  
    }
  );*/
  ///////////////////////////////////////
const teacherRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
