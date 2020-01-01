import React, { Component } from 'react';
import ETUDIANT from './ETUDIANT';
import axios from 'axios';

class Table extends Component {
   
    constructor(props){
        super(props);
         this.calculer =this.calculer.bind(this);
    }
    state = { 
        annee:this.props.a,
        groupe:this.props.b,
        moyenne_classe:0,
        Mes_Etudiants: []
            }
                
////////////////////////////////////////////////////////////////////////////////////////////////////
                componentDidMount(){

                    axios.get('http://localhost:5000/student/')
                        .then( Students => {
                                             this.setState({ Mes_Etudiants : Students.data})   
                                             console.log(Students.data);
                                             
                                           })
                        .catch(function (error) { console.log(error); })
                                        }     
  /////////////////////////////////////////////////////////////////////
    calculer () {
                this.state.moyenne_classe=0;

                let list=[];
                 let m = 0;
                 let nb =0;
                 let som =0;
                 this.state.Mes_Etudiants.map(Etudiant => {
                      if((Etudiant.id_annee === this.state.annee) && (Etudiant.id_groupe === this.state.groupe)){
                                                  list.push(Etudiant) ;                  

                                                                                                                 }          
                                                        } );
                            list.map( e=> som =som+e.MY_moyen);
                            m =(som/list.length);
                
                                 this.setState({moyenne_classe : m  });

                         }
    
    
/////////////////////////////////////////////////////////////////////
    render() { 
        return ( 
        <div>
            <div className="container">
                    <h4> L'annee :  { this.state.annee } CP </h4> 
                    <h4> Le groupe : { this.state.groupe } </h4>
 
                <div className="row pl-5">

                    {/* Barre de recherche */}
                        <div className="mt-5 ml-auto col-lg-4" id="searchBar">
                          <input className="form-control" type="text" placeholder="Rechercher un étudiant" aria-label="Search"></input>
                        </div>
                </div>
            </div>

            {/* Tableau des étudiants */}
                   <div >
                        <table className=" table">
                        <div className="container">                               
                          <thead>
                                <tr>
                                        <th scope="col">Matricule</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">CC</th>
                                        <th scope="col">CI</th>
                                        <th scope="col">CF</th>
                                        <th scope="col">Moyenne</th>
                            
                                </tr>
                          </thead>
                          <tbody>
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
                                    
                                <td> <button onClick={this.calculer} className="btn btn-sm btn-primary text-uppercase" > Calculer la moyenne</button></td>
                                <td><h1> {this.state.moyenne_classe.toFixed(2)} </h1> </td>

                              </tr>
                         
                         
                           </tbody>
                       </div>                                

                        </table>
                     </div>
                  </div>    
         );
    }
}
 
export default Table;