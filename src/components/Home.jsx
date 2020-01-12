import React, { Component } from 'react';
import axios from 'axios';

import ETUDIANT from './ETUDIANT';
class Home extends Component {

                state = { 
                     annee:1,
                     groupe:1,
                     moyenne_classe:0,
                     Mes_Etudiants: []
                 }
                                
////////////////////////////////////////////////////////////////////////////////////////////////////
componentDidMount(){
            this.setState({annee :1})
            this.setState({groupe :1})  

             let list=[];

              axios.get('http://localhost:5000/student/')
                  .then( Students => {
                         this.setState({Mes_Etudiants :Students.data});


                                     })
                    .catch(function (error) { console.log(error); })
                        
                }     
            /////////////////////////////////////////////////////////////////////
     calculer_moyenne= event =>{ 
                            this.state.moyenne_classe=0;

                            let list=[];
                            let m = 0;
                            let nb =0;
                            let som =0;
                            this.state.Mes_Etudiants.map(Etudiant => {
                                if((Etudiant.id_annee === this.state.annee) && (Etudiant.id_groupe === this.state.groupe)){
                                                            list.push(Etudiant) ;       
                                                            nb=nb+1;           

                                                                                                                            }          
                                                                    } );
                                        list.map( e=> som =som+e.MY_moyen);                                        
                                        m =(som/nb);
                                        this.setState({moyenne_classe : m  });

             }


/////////////////////////////////////////////////////////////////////
    //prof ={this.props.my_compte}
    dasher1= event =>{  
        this.setState({annee :1})
        this.setState({groupe :1})  
                      };

    dasher2= event =>{ 
             this.setState({annee :1})
             this.setState({groupe :2})   
    
                      };
    dasher3= event =>{ 
          this.setState({annee :2})
         this.setState({groupe :1})       
                      };

    dasher4= event =>{   
        this.setState({annee :2})
       this.setState({groupe :2})     
                      };                   
   
       /////////////////////////////////////////////////////////////
       render() { 

                       return ( 
                      <div>
   
            <div className="container">
                    
                  
   
                <div className="row pl-5">
                   <noscript>
                   <h4> L'annee :  { this.state.annee     /*pour afficher lannee et le groupe */ } CP </h4> 
                    <h4> Le groupe : { this.state.groupe  /*pour afficher lannee et le groupe */ } </h4>
                   


                   </noscript>
               
   
                    
                        <div className="row pl-5">
                                         {/* Listes déroulantes :  hadi ya */}
                   
                                     {/* Liste 2cp */}  
                            <div className="dropdown col-lg-1 mt-5">
                                <a className="btn btn-secondary dropdown-toggle" href="./dashboard" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    1 CPI
                                </a>
   
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" onClick ={ this.dasher1}>Groupe 1</a>
                                    <a className="dropdown-item" onClick ={ this.dasher2}>Groupe 2</a>
                                    
                                </div>
                            </div>
                            <h2> Bienvenu {this.props.my_compte.prenom  }</h2>
                            {/* Liste 1CS */}
                            <div className="dropdown col-lg-1 mt-5">
                                <a className="btn btn-secondary dropdown-toggle" href="./dashboard" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    2 CPI
                                </a>
   
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" onClick ={ this.dasher3}>Groupe 1</a>
                                    <a className="dropdown-item" onClick ={ this.dasher4}>Groupe 2</a>
                                    
                                </div>
                            </div>
                             {/* Barre de recherche */}
                        <div className="mt-5 ml-auto col-lg-4" id="searchBar">
                          <input className="form-control" type="text" placeholder="Rechercher un étudiant" aria-label="Search" id="myInput"></input>
                        </div>
   
                </div>
   
                </div>
            </div>
   
            {/* Tableau des étudiants */}
                   <div className="container table-responsive-sm table-striped">
                        <table className=" table">
                          <thead>
                             <tr>
                                <th scope="col" >Matricule</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prénom</th>
                                <th scope="col">CC</th>
                                <th scope="col">CI</th>
                                <th scope="col">CF</th>
                                <th scope="col">Moyenne</th>
                            </tr>
                          </thead>
                          <tbody  id="myTable">
                             
                                                        {
                                        
                                        this.state.Mes_Etudiants.map(Etudiant => {
                                                    if((Etudiant.id_annee === this.state.annee) && (Etudiant.id_groupe === this.state.groupe)){
                                                        return <ETUDIANT item={Etudiant} />
                                                            }          
                                        
                                        } )
   
                                        } 
                              
    
                              <tr>
                                    {/* dernière ligne concernant le calcul de la moyenne générale */}
                                <th><caption>Liste des étudiants</caption></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                    
                                <td> <button onClick ={ this.calculer_moyenne} className="btn btn-sm btn-primary text-uppercase" > Calculer la moyenne</button></td>
                                <td><h1> {this.state.moyenne_classe.toFixed(2)} </h1> </td>
   
                              </tr>
                           
                         </tbody>
                    </table>
   
               </div>
            </div>    
           );
}
}
export default Home;
