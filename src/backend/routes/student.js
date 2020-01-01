const router = require('express').Router();
let Student = require('../models/Student.model');



///////////////////////////////////////////////// la liste des etudiants
router.route('/').get((req, res) => {
  Student.find({})
    .then(Students => res.json(Students))
    .catch(err => res.status(400).json('Error: find list students ...failed+++++' + err));
});
///////////////////////////////////////////////// la recherche etudiant 
router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(Student => res.json(Student))
    .catch(err => res.status(400).json('Error: la recherche d"etudiant ne pas effectuée +++++' + err));
});
///////////////////////////////////////////////// l'ajout d'un etudiant 
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newStudent = new Student({username});

  newStudent.save()
    .then(() => res.json('newStudent added!'))
    .catch(err => res.status(400).json('Error: add student ... failed ++++++' + err));
});

///////////////////////////////////////////////// modification d'un etudiant 
router.route('/update/:id').post((req, res) => {
  
  Student.findById(req.params.id)
    .then(
    
      S => {     
            
        S.Note_cc = req.body.CC;
        S.Note_ci = req.body.CI;
        S.Note_cf = req.body.CF;
        S.MY_moyen = req.body.MOYEN;

               S.save()
                      .then(() => res.json('Notes modifiés!'))
                      .catch(err => res.status(400).json('Error: zazazazaz++++++' + err));
                 })
                         .catch(err => res.status(400).json('Error:mazzzzzzzzzzzzz ' + err));
                                                });
module.exports = router;