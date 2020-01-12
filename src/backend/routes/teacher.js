const router = require('express').Router();
let Teacher = require('../models/Teacher.model');

////////////////////////////////////////////////////////////
router.route('/').get((req, res) => {
  
  Teacher.find({})
    .then(Teachers =>
        {
          //console.log(Teachers);
          res.json(Teachers)
        }
       )
    .catch(err => res.status(400).json('Error: la list pas disponible +++++' + err));
});
////////////////////////////////////////////////////////////
router.route('/add').post((req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const mail = req.body.mail;
  const password = req.body.password;
  const newTeacher = new Teacher({nom,prenom,mail,password});

  newTeacher.save()
    .then(() => res.json('Teacher added!'))
    .catch(err => res.status(400).json('Error: failed add teacher to BDD' + err));
});

module.exports = router;