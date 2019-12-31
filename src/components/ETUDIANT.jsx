import React, { Component } from 'react';


class ETUDIANT extends Component {
    
        state={
          note_cc :0,
          note_ci :0,
          note_cf :0,
          moyen :0        
           }

        /////////////////////////////////////////// ///////////////////////////////////////////

           ecrire1 = event => {
            if(event.currentTarget.value===''){
            this.setState({moyen :
              ( 
              parseFloat(this.state.note_ci, 10)+
              parseFloat(this.state.note_cf, 10))*(1/3)
            });
            }else{
              this.setState({ note_cc: event.currentTarget.value});
              this.setState({moyen : 0});
              this.setState({  
                moyen : (
                 ( parseFloat(event.currentTarget.value, 10) +
                  parseFloat(this.state.note_ci, 10)+
                  parseFloat(this.state.note_cf, 10))*(1/3)
                          ) }); 
                 
            }           
          };
          /////////////////////////////////////////// ///////////////////////////////////////////
          ecrire2 = event => {
            if(event.currentTarget.value===''){
              this.setState({moyen :
                ( parseFloat(this.state.note_cc, 10) +
                parseFloat(this.state.note_cf, 10))*(1/3)
               });
              }else{
                this.setState({ note_ci: event.currentTarget.value});
                this.setState({moyen : 0});
                this.setState({  
                  moyen : (
                   ( parseFloat(this.state.note_cc, 10) +
                    parseFloat(event.currentTarget.value, 10)+
                    parseFloat(this.state.note_cf, 10))*(1/3)
                            ) });  
                   
              }   
                     };
        /////////////////////////////////////////// ///////////////////////////////////////////

          ecrire3 = event => {
            if(event.currentTarget.value ===''){
              this.setState({moyen :
                ( parseFloat(this.state.note_cc, 10) +
                parseFloat(this.state.note_ci, 10)
                )*(1/3) });
              }else{
                this.setState({ note_cf: event.currentTarget.value});
                this.setState({moyen : 0});
                this.setState({  
                  moyen : (
                   ( parseFloat(this.state.note_cc, 10) +
                    parseFloat(this.state.note_ci, 10)+
                    parseFloat(event.currentTarget.value, 10))*(1/3)
                            ) });  
                   
              }   
                      };
           
         
       /////////////////////////////////////////// ///////////////////////////////////////////
     
         
    render() { 

        return  (
          
                    <tr className="container-fluid">
                        <th scope="row">{this.props.item.matricule}</th>
                            <td>{this.props.item.nom}</td>
                            <td>{this.props.item.prenom}</td>  
                            <td><input type="Number" step="0.25" min ="0" max="20" className="form-control" id="noteCC" placeholder="--"   onChange={this.ecrire1}   ></input></td>
                            <td><input type="Number" step="0.25" min ="0" max="20" className="form-control" id="noteCI" placeholder="--"   onChange={this.ecrire2}  ></input></td>
                            <td><input type="Number" step="0.25"  min ="0" max="20" className="form-control" id="noteCF" placeholder="--"  onChange={this.ecrire3}  ></input></td>
                            <td className="moyenneEtudiant"> {this.state.moyen.toFixed(2)} </td>
                    </tr>
          
        
        );
    }
   
}
 
export default ETUDIANT;
