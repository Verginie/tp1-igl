import React, { Component } from 'react';
import ETUDIANT from './ETUDIANT';

class Table extends Component {
    state = { 
      Mes_Etudiants : [
            {
                
                matricule :17001,
                nom :"hamdi",
                prenom :"taki",
                Note_cc :0,
                Note_ci :0,
                Note_cf :0,
                MY_moyen : 0

            },
            {
                
                matricule :17002,
                nom :"chouadra",
                prenom :"yasser",
                Note_cc :0,
                Note_ci :0,
                Note_cf :0,
                MY_moyen : 0

            },
            {
               
                matricule :17003,
                nom :"Dbabza",
                prenom :"drisss",
                Note_cc :0,
                Note_ci :0,
                Note_cf :0,
                MY_moyen : 0


            },
            {
                matricule :17004,
                nom :"midou",
                prenom :"bista",
                Note_cc :0,
                Note_ci :0,
                Note_cf :0,
                MY_moyen : 0

            }
        
            ],

     }



     calculer_moyenne = event=>{
        this.state.Mes_Etudiants.map(Etudiant => {
             this.state.MY_moyen =5;
        });
            
    }
    render() { 
        return ( 
        <div>
            <div className="container">
                <div className="row pl-5">
                    {/* Listes déroulantes */}
                   
                    {/* Liste 2cp */}  
                         <div class="dropdown col-lg-1 mt-5">
                        <a class="btn btn-secondary dropdown-toggle" href="./Home" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            2 CPI
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="./Home">Groupe 3</a>
                            <a class="dropdown-item" href="./Home">Groupe 5</a>
                            
                        </div>
                    </div>
                    {/* Liste 1CS */}
                         <div class="dropdown col-lg-1 mt-5">
                        <a class="btn btn-secondary dropdown-toggle" href="./Home" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            1 CS
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="./Home">Groupe 1</a>
                            <a class="dropdown-item" href="./Home">Groupe 2</a>
                            <a class="dropdown-item" href="./Home">Groupe 4</a>
                            
                        </div>
                    </div>
                    {/* Barre de recherche */}
                        <div className="mt-5 ml-auto col-lg-4" id="searchBar">
                          <input className="form-control" type="text" placeholder="Rechercher un étudiant" aria-label="Search"></input>
                        </div>
                </div>
            </div>

            {/* Tableau des étudiants */}
                   <div className="container table-responsive-sm table-striped">
                        <table class=" table">
                          <thead>
                         <tr>
                         <th scope="col"  >Matricule</th>
                         <th scope="col">Nom</th>
                         <th scope="col">Prénom</th>
                         <th scope="col">CC</th>
                         <th scope="col">CI</th>
                         <th scope="col">CF</th>
                         <th scope="col">Moyenne</th>
                    
                         </tr>
                          </thead>
                          <tbody>
                              <ul>
                        {this.state.Mes_Etudiants.map(Etudiant => (<ETUDIANT item={Etudiant} />))}
                              </ul> 
    
                              <tr>
                        {/* dernière ligne concernant le calcul de la moyenne générale */}
                        <th><caption>Liste des étudiants</caption></th>
                        
                        <td> <button onClick ={ this.calculer_moyenne} className="btn btn-sm btn-primary text-uppercase" > Calculer la moyenne</button></td>
                    </tr>
                           
                         </tbody>
                         </table>

            </div>
                  </div>    
         );
    }
}
 
export default Table;